module.exports = function (sequelize, DataTypes) {
    const bookLocation = sequelize.define(
        'bookLocation',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            location: {
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

    bookLocation.associate = (models) => {
        models.bookLocation.belongsTo(models.book);

        models.bookLocation.belongsTo(models.book, {
            as: 'createdBy',
        });

        models.bookLocation.belongsTo(models.book, {
            as: 'updatedBy',
        });
    };

    return bookLocation;
};
