import Project from '../models/Project';
import ProjectMinutesWorked from '../models/ProjectMinutesWorked';
import UserProjects from '../models/UserProjects';
import User from '../models/User';

class ProjectController {
  async index(req, res) {
    const { userId, userLevel } = req;

    let options = {
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
      options = {
        where: { '$userProject.user_id$': userId },
        order: ['updated_at'],
        attributes: ['id', 'name'],
        include: [
          {
            model: ProjectMinutesWorked,
            as: 'minutesWorked',
            attributes: ['id', 'date', 'minutes_worked'],
            where: { user_id: userId },
            required: false,
            include: [
              {
                model: User,
                as: 'user',
                attributes: ['id', 'name', 'email'],
              },
            ],
          },
          {
            model: UserProjects,
            as: 'userProject',
          },
        ],
      };
    }

    const projects = await Project.findAll(options);

    return res.json(projects);
  }
}

export default new ProjectController();
