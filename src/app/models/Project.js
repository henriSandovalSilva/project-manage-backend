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

    this.hasMany(models.UserProjects, {
      foreignKey: 'project_id',
      as: 'userProject',
    });
  }
}

export default Project;
