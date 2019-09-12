module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'projects',
      [
        {
          name: 'Projeto Cliente A',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Projeto Cliente B',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('projects', null, {});
  },
};
