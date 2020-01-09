module.exports = function (sequelize, DataTypes) {
    const bookType = sequelize.define(
        'bookType',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            type: {
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

    bookType.associate = (models) => {
        models.bookType.belongsTo(models.book);

        models.bookType.belongsTo(models.book, {
            as: 'createdBy',
        });

        models.bookType.belongsTo(models.book, {
            as: 'updatedBy',
        });
    };

    return bookType;
};
