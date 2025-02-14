const models = require('../models');

module.exports = class AbstractRepository {
  static jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static async cleanDatabase() {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error(
        'Clean database only allowed for test!',
      );
    }

    await models.sequelize.sync({ force: true });
  }

  static getCurrentUser(options) {
    return (options && options.currentUser) || { id: null };
  }

  static getCurrentBook(options) {
    return (options && options.currentBook) || { id: null };
  }

  static getTransaction(options) {
    return (options && options.transaction) || undefined;
  }

  static async createTransaction() {
    return models.sequelize.transaction();
  }

  static async commitTransaction(transaction) {
    return transaction.commit();
  }

  static async rollbackTransaction(transaction) {
    return transaction.rollback();
  }
};
