module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Administrador',
          email: 'admin@email.com.br',
          password_hash:
            '$2y$08$7Et6jcwxCRz/NCRsUKgYDuuXp0rf78zzRheLQnGfV7984/nDtLzMe',
          level: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Programador 1',
          email: 'programador1@email.com.br',
          password_hash:
            '$2y$08$7Et6jcwxCRz/NCRsUKgYDuuXp0rf78zzRheLQnGfV7984/nDtLzMe',
          level: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Programador 2',
          email: 'programador2@email.com.br',
          password_hash:
            '$2y$08$7Et6jcwxCRz/NCRsUKgYDuuXp0rf78zzRheLQnGfV7984/nDtLzMe',
          level: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
