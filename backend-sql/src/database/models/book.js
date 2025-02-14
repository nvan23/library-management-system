const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const book = sequelize.define(
    'book',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      isbn: {
        type: DataTypes.STRING(13),
        allowNull: false,
        validate: {
          len: [13, 13],
          notEmpty: true,
        },
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },

      series: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },

      author: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },

      publishingCompany: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },


      numberOfCopies: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
        },
      },
      stock: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.VIRTUAL,
        get: function() {
          if (this.get('stock') > 0) {
            return 'available';
          }
          return 'unavailable';
        },
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    },
  );
  
  book.associate = (models) => {
    models.book.hasMany(models.bookCategory, {
      as: 'categories',
    });

    models.book.hasMany(models.bookTopic, {
      as: 'topics',
    });

    models.book.hasMany(models.bookType, {
      as: 'types',
    });

    models.book.hasMany(models.bookLocation, {
      as: 'locations',
    });

    models.book.hasMany(models.file, {
      as: 'images',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.book.getTableName(),
        belongsToColumn: 'images',
      },
    });

    models.book.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.book.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return book;
};
