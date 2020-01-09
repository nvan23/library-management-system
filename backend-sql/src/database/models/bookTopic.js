module.exports = function (sequelize, DataTypes) {
    const bookTopic = sequelize.define(
        'bookTopic',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            topic: {
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

    bookTopic.associate = (models) => {
        models.bookTopic.belongsTo(models.book);

        models.bookTopic.belongsTo(models.book, {
            as: 'createdBy',
        });

        models.bookTopic.belongsTo(models.book, {
            as: 'updatedBy',
        });
    };

    return bookTopic;
};
