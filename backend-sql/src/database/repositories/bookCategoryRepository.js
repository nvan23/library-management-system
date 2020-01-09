const AbstractRepository = require('./abstractRepository');
const models = require('../models');
const SequelizeFilter = require('../utils/sequelizeFilter');

module.exports = class BookCategoryRepository extends AbstractRepository {
    static async findAll({ filter, orderBy }) {
        let sequelizeFilter = new SequelizeFilter(
            models.Sequelize,
        );

        if (filter) {
            if (filter.category) {
                sequelizeFilter.appendEqual('category', filter.category);
            }
        }

        return models.bookCategory.findAll({
            where: sequelizeFilter.getWhere(),
            attributes: ['category'],
            group: 'category',
            order: orderBy
                ? [orderBy.split('_')]
                : [['category', 'ASC']],
        });
    }

    static async findAllWithBooks({ filter, orderBy }) {
        const rows = await this.findAll({ filter, orderBy });
        return Promise.all(
            rows.map(async (row) => {
                row.books = await this.findAllBooksByCategory(row.category);
                return row;
            }),
        );
    }

    static async findAllBooksByCategory(category, options) {
        return models.book.findAll(
            {
                include: [
                    {
                        model: models.bookCategory,
                        as: 'categories',
                        where: { category },
                    },
                ],
            },
            { transaction: this.getTransaction(options) },
        );
    }
    static async findAllByBook(bookId, options) {
        const bookCategories = await models.bookCategory.findAll(
            {
                where: {
                    bookId,
                },
                raw: true,
            },
            { transaction: this.getTransaction(options) },
        );

        return bookCategories.map((bookCategory) => bookCategory.category);
    }



    static async add(bookId, categories, options) {
        for (const category of categories) {
            await models.bookCategory.findOrCreate({
                where: { bookId: bookId, category },
                defaults: {
                    bookId: bookId,
                    category,
                    createdById: this.getCurrentBook(options).id,
                    updatedById: this.getCurrentBook(options).id,
                },
                transaction: this.getTransaction(options),
            });
        }
    }

    static async refresh(bookId, categories, options) {
        await models.bookCategory.destroy({
            where: {
                bookId: bookId,
                category: { [models.Sequelize.Op.notIn]: categories },
            },
            transaction: this.getTransaction(options),
        });

        for (const category of categories) {
            await models.bookCategory.findOrCreate({
                where: { bookId: bookId, category },
                defaults: {
                    bookId: bookId,
                    category,
                    createdById: this.getCurrentBook(options).id,
                    updatedById: this.getCurrentBook(options).id,
                },
                transaction: this.getTransaction(options),
            });
        }
    }

    static async remove(bookId, categories, options) {
        await models.bookCategory.destroy({
            where: {
                bookId: bookId,
                category: { [models.Sequelize.Op.in]: categories },
            },
            transaction: this.getTransaction(options),
        });
    }
};
