const AbstractRepository = require('./abstractRepository');
const models = require('../models');
const SequelizeFilter = require('../utils/sequelizeFilter');

module.exports = class BookTopicRepository extends AbstractRepository {
    static async findAll({ filter, orderBy }) {
        let sequelizeFilter = new SequelizeFilter(
            models.Sequelize,
        );

        if (filter) {
            if (filter.topic) {
                sequelizeFilter.appendEqual('topic', filter.topic);
            }
        }

        return models.bookTopic.findAll({
            where: sequelizeFilter.getWhere(),
            attributes: ['topic'],
            group: 'topic',
            order: orderBy
                ? [orderBy.split('_')]
                : [['topic', 'ASC']],
        });
    }

    static async findAllWithBooks({ filter, orderBy }) {
        const rows = await this.findAll({ filter, orderBy });
        return Promise.all(
            rows.map(async (row) => {
                row.books = await this.findAllBooksByTopic(row.topic);
                return row;
            }),
        );
    }

    static async findAllBooksByTopic(topic, options) {
        return models.book.findAll(
            {
                include: [
                    {
                        model: models.bookTopic,
                        as: 'topics',
                        where: { topic },
                    },
                ],
            },
            { transaction: this.getTransaction(options) },
        );
    }
    static async findAllByBook(bookId, options) {
        const bookTopics = await models.bookTopic.findAll(
            {
                where: {
                    bookId,
                },
                raw: true,
            },
            { transaction: this.getTransaction(options) },
        );

        return bookTopics.map((bookTopic) => bookTopic.topic);
    }


    static async add(bookId, topics, options) {
        for (const topic of topics) {
            await models.bookTopic.findOrCreate({
                where: { bookId: bookId, topic },
                defaults: {
                    bookId: bookId,
                    topic,
                    createdById: this.getCurrentBook(options).id,
                    updatedById: this.getCurrentBook(options).id,
                },
                transaction: this.getTransaction(options),
            });
        }
    }

    static async refresh(bookId, topics, options) {
        await models.bookTopic.destroy({
            where: {
                bookId: bookId,
                topic: { [models.Sequelize.Op.notIn]: topics },
            },
            transaction: this.getTransaction(options),
        });

        for (const topic of topics) {
            await models.bookTopic.findOrCreate({
                where: { bookId: bookId, topic },
                defaults: {
                    bookId: bookId,
                    topic,
                    createdById: this.getCurrentBook(options).id,
                    updatedById: this.getCurrentBook(options).id,
                },
                transaction: this.getTransaction(options),
            });
        }
    }

    static async remove(bookId, topics, options) {
        await models.bookTopic.destroy({
            where: {
                bookId: bookId,
                topic: { [models.Sequelize.Op.in]: topics },
            },
            transaction: this.getTransaction(options),
        });
    }
};
