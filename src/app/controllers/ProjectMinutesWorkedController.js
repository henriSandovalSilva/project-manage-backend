import ProjectMinutesWorked from '../models/ProjectMinutesWorked';

class ProjectMinutesWorkedController {
  async store(req, res) {
    const { project_id, date, minutes_worked } = req.body;

    const minutesWorked = await ProjectMinutesWorked.create({
      user_id: req.userId,
      project_id,
      date,
      minutes_worked,
    });

    return res.json(minutesWorked);
  }
}

export default new ProjectMinutesWorkedController();
