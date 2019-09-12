module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'user_projects',
      [
        {
          user_id: 2,
          project_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          project_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          project_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('user_projects', null, {});
  },
};
