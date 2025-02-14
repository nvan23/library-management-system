const models = require('../models');
const SequelizeFilter = require('../utils/sequelizeFilter');
const SequelizeAutocompleteFilter = require('../utils/sequelizeAutocompleteFilter');
const AbstractRepository = require('./abstractRepository');
const AuditLogRepository = require('./auditLogRepository');
const BookCategoryRepository = require('./bookCategoryRepository');
const BookTopicRepository = require('./bookTopicRepository');
const BookTypeRepository = require('./bookTypeRepository');
const BookLocationRepository = require('./bookLocationRepository');
const FileRepository = require('./fileRepository');
const lodash = require('lodash');
const ValidationError = require('../../errors/validationError');

class BookRepository extends AbstractRepository {
  constructor() {
    super();

    this.inTableAttributes = [
      'id',
      'isbn',
      'title',
      'series',
      'author',
      'publishingCompany',
      // 'loanPeriodInDays',
      'numberOfCopies',
      'stock',
      'importHash',
      'updatedAt',
      'createdAt',
    ];

    this.fileAttributes = ['images'];

    this.relationToOneAttributes = {};

    this.relationToManyAttributes = {};
  }


  async create(data, options) {
    const record = await models.book.create(
      {
        ...lodash.pick(data, this.inTableAttributes),
        createdById: AbstractRepository.getCurrentUser(
          options,
        ).id,
        updatedById: AbstractRepository.getCurrentUser(
          options,
        ).id,
      },
      {
        transaction: AbstractRepository.getTransaction(
          options,
        ),
      },
    );
    
    await BookCategoryRepository.add(
      record.id,
      data.categories || [],
      options,
    );

    await BookTypeRepository.add(
      record.id,
      data.types || [],
      options,
    );

    await BookTopicRepository.add(
      record.id,
      data.topics || [],
      options,
    );

    await BookLocationRepository.add(
      record.id,
      data.locations || [],
      options,
    );

    await this._createOrUpdateRelations(
      record,
      data,
      options,
    );

    await this._createOrUpdateFiles(record, data, options);

    await this._auditLogs(
      AuditLogRepository.CREATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  async update(id, data, options) {
    let record = await models.book.findByPk(id, {
      transaction: AbstractRepository.getTransaction(
        options,
      ),
    });

    record = await record.update(
      {
        ...lodash.pick(data, this.inTableAttributes),
        updatedById: AbstractRepository.getCurrentUser(
          options,
        ).id,
      },
      {
        transaction: AbstractRepository.getTransaction(
          options,
        ),
      },
    );
    
    await BookCategoryRepository.refresh(
      record.id,
      data.categories || [],
      options,
    );

    await BookTopicRepository.refresh(
      record.id,
      data.topics || [],
      options,
    );

    await BookTypeRepository.refresh(
      record.id,
      data.types || [],
      options,
    );

    await BookLocationRepository.refresh(
      record.id,
      data.locations || [],
      options,
    );

    await this._createOrUpdateRelations(
      record,
      data,
      options,
    );

    await this._createOrUpdateFiles(record, data, options);

    await this._auditLogs(
      AuditLogRepository.UPDATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  async destroy(id, options) {
    let record = await models.book.findByPk(id, {
      transaction: AbstractRepository.getTransaction(
        options,
      ),
    });

    await record.destroy({
      transaction: AbstractRepository.getTransaction(
        options,
      ),
    });

    await this._auditLogs(
      AuditLogRepository.DELETE,
      record,
      null,
      options,
    );
  }

  async findById(id, options) {
    const record = await models.book.findByPk(id, {
      include: this._buildIncludeForQueries(),
      transaction: AbstractRepository.getTransaction(
        options,
      ),
    });

    return this._fillNonTableAttributesForRecord(
      record,
      null,
      options,
    );
  }

  async count(filter, options) {
    return models.book.count(
      {
        where: filter,
      },
      {
        transaction: AbstractRepository.getTransaction(
          options,
        ),
      },
    );
  }

  async _auditLogs(action, record, data, options) {
    let values = {};

    if (data) {
      values = {
        ...record.get({ plain: true }),
      };

      this.fileAttributes.forEach((field) => {
        values[field] = data[field];
      });

      Object.keys(this.relationToManyAttributes).forEach(
        (field) => {
          values[`${field}Ids`] = data[field];
        },
      );
    }

    await AuditLogRepository.log(
      {
        entityName: 'book',
        entityId: record.id,
        action,
        values,
      },
      options,
    );
  }

  async _createOrUpdateRelations(record, data, options) {
    for (const field of Object.keys(
      this.relationToManyAttributes,
    )) {
      await record[
        `set${AbstractRepository.jsUcfirst(field)}`
      ](data[field] || [], {
        transaction: AbstractRepository.getTransaction(
          options,
        ),
      });
    }

    for (const field of Object.keys(
      this.relationToOneAttributes,
    )) {
      await record[
        `set${AbstractRepository.jsUcfirst(field)}`
      ](data[field] || null, {
        transaction: AbstractRepository.getTransaction(
          options,
        ),
      });
    }
  }

  async _createOrUpdateFiles(record, data, options) {
    for (const field of this.fileAttributes) {
      await FileRepository.replaceRelationFiles(
        {
          belongsTo: models.book.getTableName(),
          belongsToColumn: field,
          belongsToId: record.id,
        },
        data[field],
        options,
      );
    }
  }

  _buildIncludeForQueries(attributes, includeToAppend) {
    if (!attributes) {
      return Object.keys(this.relationToOneAttributes).map(
        (key) => this.relationToOneAttributes[key],
      );
    }

    const attributesToInclude = lodash.intersection(
      attributes,
      Object.keys(this.relationToOneAttributes),
    );

    const nonIncludedYet = attributesToInclude.filter(
      (attribute) =>
        !includeToAppend.some(
          (included) => included.as === attribute,
        ),
    );

    return nonIncludedYet
      .map(
        (attribute) =>
          this.relationToOneAttributes[attribute],
      )
      .concat(includeToAppend);
  }

  async _fillNonTableAttributesForRows(
    rows,
    requestedAttributes,
    options,
  ) {
    if (!rows) {
      return rows;
    }

    return Promise.all(
      rows.map((record) =>
        this._fillNonTableAttributesForRecord(
          record,
          requestedAttributes,
          options,
        ),
      ),
    );
  }

  async _fillNonTableAttributesForRecord(
    record,
    requestedAttributes,
    options,
  ) {
    if (!record) {
      return record;
    }

    function isRequestedAttribute(fieldName) {
      if (
        !requestedAttributes ||
        requestedAttributes.length
      ) {
        return true;
      }

      return requestedAttributes.includes(fieldName);
    }

    const output = record.get({ plain: true });

    if (isRequestedAttribute('categories')) {
      output.categories = await BookCategoryRepository.findAllByBook(
        record.id,
        options,
      );
    }

    if (isRequestedAttribute('topics')) {
      output.topics = await BookTopicRepository.findAllByBook(
        record.id,
        options,
      );
    }

    if (isRequestedAttribute('types')) {
      output.types = await BookTypeRepository.findAllByBook(
        record.id,
        options,
      );
    }

    if (isRequestedAttribute('locations')) {
      output.locations = await BookLocationRepository.findAllByBook(
        record.id,
        options,
      );
    }

    const fields = Object.keys(
      this.relationToManyAttributes,
    )
      .concat(this.fileAttributes)
      .filter(isRequestedAttribute);

    for (const field of fields) {
      output[field] = await record[
        `get${AbstractRepository.jsUcfirst(field)}`
      ]({
        transaction: AbstractRepository.getTransaction(
          options,
        ),
      });
    }

    return output;
  }

  async findAndCountAll(
    {
      requestedAttributes,
      filter,
      limit,
      offset,
      orderBy,
    } = {
      requestedAttributes: null,
      filter: null,
      limit: 0,
      offset: 0,
      orderBy: null,
    },
    options,
  ) {
    let sequelizeFilter = new SequelizeFilter(
      models.Sequelize,
    );

    if (filter) {
      if (filter.id) {
        sequelizeFilter.appendId('id', filter.id);
      }

      if (filter.isbn) {
        sequelizeFilter.appendIlike(
          'isbn',
          filter.isbn,
          'book',
        );
      }

      if (filter.title) {
        sequelizeFilter.appendIlike(
          'title',
          filter.title,
          'book',
        );
      }

      if (filter.series) {
        sequelizeFilter.appendIlike(
          'series',
          filter.series,
          'book',
        );
      }

      if (filter.author) {
        sequelizeFilter.appendIlike(
          'author',
          filter.author,
          'book',
        );
      }

      if (filter.publishingCompany) {
        sequelizeFilter.appendIlike(
          'publishingCompany',
          filter.publishingCompany,
          'book',
        );
      }

      if (filter.category) {
        sequelizeFilter.appendRelationWithEqual(
          models.bookCategory,
          'categories',
          'category',
          filter.category,
        );
      }

      if (filter.topic) {
        sequelizeFilter.appendRelationWithEqual(
          models.bookTopic,
          'topics',
          'topic',
          filter.topic,
        );
      }

      if (filter.type) {
        sequelizeFilter.appendRelationWithEqual(
          models.bookType,
          'types',
          'type',
          filter.type,
        );
      }

      if (filter.location) {
        sequelizeFilter.appendRelationWithEqual(
          models.bookLocation,
          'locations',
          'location',
          filter.location,
        );
      }

      if (filter.status) {
        if (filter.status === 'available') {
          sequelizeFilter.appendCustom({
            stock: { [models.Sequelize.Op.gt]: 0 },
          });
        }

        if (filter.status === 'unavailable') {
          sequelizeFilter.appendCustom({
            stock: { [models.Sequelize.Op.lte]: 0 },
          });
        }

        
      }

      if (filter.createdAtRange) {
        sequelizeFilter.appendRange(
          'createdAt',
          filter.createdAtRange,
        );
      }
    }

    const include = this._buildIncludeForQueries(
      requestedAttributes,
      sequelizeFilter.getInclude(),
    );

    const requestedAttributesInTable =
      requestedAttributes && requestedAttributes.length
        ? [
            'id',
            ...lodash.intersection(
              this.inTableAttributes,
              requestedAttributes,
            ),
          ]
        : undefined;

    let { rows, count } = await models.book.findAndCountAll(
      {
        where: sequelizeFilter.getWhere(),
        include: sequelizeFilter.getInclude(),
        attributes: requestedAttributesInTable,
        limit: limit ? limit : undefined,
        offset: offset || undefined,
        order: orderBy
          ? [orderBy.split('_')]
          : [['createdAt', 'DESC']],
        transaction: AbstractRepository.getTransaction(
          options,
        ),
      },
    );

    rows = await this._fillNonTableAttributesForRows(
      rows,
      requestedAttributes,
      options,
    );

    return { rows, count };
  }

  async findAllAutocomplete(query, limit) {
    const filter = new SequelizeAutocompleteFilter(
      models.Sequelize,
    );

    if (query) {
      filter.appendId('id', query);
      filter.appendIlike('title', query, 'book');
      filter.appendIlike('author', query, 'book');
      filter.appendIlike('isbn', query, 'book');
    }

    const records = await models.book.findAll({
      attributes: [
        'id',
        'title',
        'author',
        'isbn',
        'stock',
      ],
      where: filter.getWhere(),
      limit: limit || undefined,
      orderBy: [['title', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: `${record.title} - ${record.author} -  ${record.isbn}`,
      stock: record.stock,
    }));
  }

  async refreshStock(id, options) {
    const book = await models.book.findByPk(id, {
      transaction: AbstractRepository.getTransaction(
        options,
      ),
    });

    const booksNotInStock = await models.loan.count({
      where: {
        bookId: id,
        returnDate: { [models.Sequelize.Op.eq]: null },
      },
      transaction: AbstractRepository.getTransaction(
        options,
      ),
    });

    const stock =
      Number(book.numberOfCopies) - Number(booksNotInStock);

    if (stock < 0) {
      throw new ValidationError(
        options.language,
        'entities.book.validation.bookOutOfStock',
      );
    }

    book.set('stock', stock);

    await book.save({
      fields: ['stock'],
      transaction: AbstractRepository.getTransaction(
        options,
      ),
    });
  }
}

module.exports = BookRepository;
