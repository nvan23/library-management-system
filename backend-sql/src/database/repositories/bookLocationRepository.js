const AbstractRepository = require('./abstractRepository');
const models = require('../models');
const SequelizeFilter = require('../utils/sequelizeFilter');

module.exports = class BookLocationRepository extends AbstractRepository {
    static async findAll({ filter, orderBy }) {
        let sequelizeFilter = new SequelizeFilter(
            models.Sequelize,
        );

        if (filter) {
            if (filter.location) {
                sequelizeFilter.appendEqual('location', filter.location);
            }
        }

        return models.bookLocation.findAll({
            where: sequelizeFilter.getWhere(),
            attributes: ['location'],
            group: 'location',
            order: orderBy
                ? [orderBy.split('_')]
                : [['location', 'ASC']],
        });
    }

    static async findAllWithBooks({ filter, orderBy }) {
        const rows = await this.findAll({ filter, orderBy });
        return Promise.all(
            rows.map(async (row) => {
                row.books = await this.findAllBooksByLocation(row.location);
                return row;
            }),
        );
    }

    static async findAllBooksByLocation(location, options) {
        return models.book.findAll(
            {
                include: [
                    {
                        model: models.bookLocation,
                        as: 'locations',
                        where: { location },
                    },
                ],
            },
            { transaction: this.getTransaction(options) },
        );
    }
    static async findAllByBook(bookId, options) {
        const bookLocations = await models.bookLocation.findAll(
            {
                where: {
                    bookId,
                },
                raw: true,
            },
            { transaction: this.getTransaction(options) },
        );

        return bookLocations.map((bookLocation) => bookLocation.location);
    }



    static async add(bookId, locations, options) {
        for (const location of locations) {
            await models.bookLocation.findOrCreate({
                where: { bookId: bookId, location },
                defaults: {
                    bookId: bookId,
                    location,
                    createdById: this.getCurrentBook(options).id,
                    updatedById: this.getCurrentBook(options).id,
                },
                transaction: this.getTransaction(options),
            });
        }
    }

    static async refresh(bookId, locations, options) {
        await models.bookLocation.destroy({
            where: {
                bookId: bookId,
                location: { [models.Sequelize.Op.notIn]: locations },
            },
            transaction: this.getTransaction(options),
        });

        for (const location of locations) {
            await models.bookLocation.findOrCreate({
                where: { bookId: bookId, location },
                defaults: {
                    bookId: bookId,
                    location,
                    createdById: this.getCurrentBook(options).id,
                    updatedById: this.getCurrentBook(options).id,
                },
                transaction: this.getTransaction(options),
            });
        }
    }

    static async remove(bookId, locations, options) {
        await models.bookLocation.destroy({
            where: {
                bookId: bookId,
                location: { [models.Sequelize.Op.in]: locations },
            },
            transaction: this.getTransaction(options),
        });
    }
};
