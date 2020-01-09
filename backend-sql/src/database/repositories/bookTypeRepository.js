const AbstractRepository = require('./abstractRepository');
const models = require('../models');
const SequelizeFilter = require('../utils/sequelizeFilter');

module.exports = class BookTypeRepository extends AbstractRepository {
    static async findAll({ filter, orderBy }) {
        let sequelizeFilter = new SequelizeFilter(
            models.Sequelize,
        );

        if (filter) {
            if (filter.type) {
                sequelizeFilter.appendEqual('type', filter.type);
            }
        }

        return models.bookType.findAll({
            where: sequelizeFilter.getWhere(),
            attributes: ['type'],
            group: 'type',
            order: orderBy
                ? [orderBy.split('_')]
                : [['type', 'ASC']],
        });
    }

    static async findAllWithBooks({ filter, orderBy }) {
        const rows = await this.findAll({ filter, orderBy });
        return Promise.all(
            rows.map(async (row) => {
                row.books = await this.findAllBooksByType(row.type);
                return row;
            }),
        );
    }

    static async findAllBooksByType(type, options) {
        return models.book.findAll(
            {
                include: [
                    {
                        model: models.bookType,
                        as: 'types',
                        where: { type },
                    },
                ],
            },
            { transaction: this.getTransaction(options) },
        );
    }
    static async findAllByBook(bookId, options) {
        const bookTypes = await models.bookType.findAll(
            {
                where: {
                    bookId,
                },
                raw: true,
            },
            { transaction: this.getTransaction(options) },
        );

        return bookTypes.map((bookType) => bookType.type);
    }


    static async add(bookId, types, options) {
        for (const type of types) {
            await models.bookType.findOrCreate({
                where: { bookId: bookId, type },
                defaults: {
                    bookId: bookId,
                    type,
                    createdById: this.getCurrentBook(options).id,
                    updatedById: this.getCurrentBook(options).id,
                },
                transaction: this.getTransaction(options),
            });
        }
    }

    static async refresh(bookId, types, options) {
        await models.bookType.destroy({
            where: {
                bookId: bookId,
                type: { [models.Sequelize.Op.notIn]: types },
            },
            transaction: this.getTransaction(options),
        });

        for (const type of types) {
            await models.bookType.findOrCreate({
                where: { bookId: bookId, type },
                defaults: {
                    bookId: bookId,
                    type,
                    createdById: this.getCurrentBook(options).id,
                    updatedById: this.getCurrentBook(options).id,
                },
                transaction: this.getTransaction(options),
            });
        }
    }

    static async remove(bookId, types, options) {
        await models.bookType.destroy({
            where: {
                bookId: bookId,
                type: { [models.Sequelize.Op.in]: types },
            },
            transaction: this.getTransaction(options),
        });
    }
};
