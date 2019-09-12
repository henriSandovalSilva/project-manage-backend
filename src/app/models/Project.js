import Sequelize, { Model } from 'sequelize';

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.ProjectMinutesWorked, {
      foreignKey: 'project_id',
      as: 'minutesWorked',
    });
  }
}

export default Project;
