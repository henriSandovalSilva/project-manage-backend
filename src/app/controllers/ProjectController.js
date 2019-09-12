import Project from '../models/Project';
import ProjectMinutesWorked from '../models/ProjectMinutesWorked';
import User from '../models/User';

class ProjectController {
  async index(req, res) {
    const { userId, userLevel } = req;

    const options = {
      order: ['updated_at'],
      attributes: ['id', 'name'],
      include: [
        {
          model: ProjectMinutesWorked,
          as: 'minutesWorked',
          attributes: ['id', 'date', 'minutes_worked'],
          include: [
            {
              model: User,
              as: 'user',
              attributes: ['id', 'name', 'email'],
            },
          ],
        },
      ],
    };

    if (userLevel < 2) {
      options.where = { user_id: userId, canceled_at: null };
    }

    const projects = await Project.findAll(options);

    return res.json(projects);
  }
}

export default new ProjectController();
