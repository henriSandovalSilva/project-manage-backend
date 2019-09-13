import Sequelize, { Model } from 'sequelize';

class ProjectMinutesWorked extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        minutes_worked: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Project, { foreignKey: 'project_id', as: 'project' });
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default ProjectMinutesWorked;
