const { password } = require("pg/lib/defaults");

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('User', [

    {
      nombre: 'Rescatemos juntoss',
      nombre_usuario: 'rescatemosjuntoss',
      contrasena: 'flo123',
      mail: 'rescatemoss@gmail.com',
      tipo: 'fundación',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    
  ]),
  down: (queryInterface) => queryInterface.bulkDelate('User', null, {}),
    
};
