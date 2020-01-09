module.exports = function (sequelize, DataTypes) {
    const bookCategory = sequelize.define(
        'bookCategory',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
        },
        {
            timestamps: true,
            paranoid: true,
        },
    );

    bookCategory.associate = (models) => {
        models.bookCategory.belongsTo(models.book);

        models.bookCategory.belongsTo(models.book, {
            as: 'createdBy',
        });

        models.bookCategory.belongsTo(models.book, {
            as: 'updatedBy',
        });
    };

    return bookCategory;
};
