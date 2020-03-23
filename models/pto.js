module.exports = function (sequelize, DataTypes) {
    var PTO = sequelize.define("pto", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            msg: 'Please enter your first name'
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            msg: 'Please enter your last name'
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        startTime: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        endTime: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        approved: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    });
    return PTO;
};