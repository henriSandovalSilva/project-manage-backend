import { Model } from 'sequelize';

class UserProjects extends Model {
  static init(sequelize) {
    super.init(
      {},
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

export default UserProjects;
