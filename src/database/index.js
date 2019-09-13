import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import User from '../app/models/User';
import Project from '../app/models/Project';
import ProjectMinutesWorked from '../app/models/ProjectMinutesWorked';
import UserProjects from '../app/models/UserProjects';

const models = [User, Project, ProjectMinutesWorked, UserProjects];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
