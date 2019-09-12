import { Model } from 'sequelize';

class UserProjects extends Model {
  static associate(models) {
    this.belongsTo(models.Project, { foreignKey: 'project_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default UserProjects;
