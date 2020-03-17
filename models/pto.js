module.exports = function(sequelize, DataTypes) {
    var PTO = sequelize.define("PTO", {
      name: DataTypes.STRING,
      day: DataTypes.STRING,
      startTime: DataTypes.INTEGER,
      endTime: DataTypes.INTEGER
    });
    return PTO;
  };