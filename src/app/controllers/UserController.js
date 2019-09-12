import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    let user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassoword(oldPassword))) {
      return res.status(401).json({ error: 'Invalid password.' });
    }

    user = await user.update(req.body);

    return res.json(user);
  }
}

export default new UserController();
