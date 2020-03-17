module.exports = function(sequelize, DataTypes) {
    var Schedule = sequelize.define("Schedule", {
      name: DataTypes.STRING,
      day: DataTypes.STRING,
      startTime: DataTypes.INTEGER,
      endTime: DataTypes.INTEGER
    });
    return Schedule;
  };