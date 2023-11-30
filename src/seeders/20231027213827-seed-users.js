const { password } = require("pg/lib/defaults");

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('User', [

    {
      nombre: 'Rescatemos juntoss',
      nombre_usuario: 'rescatemosjunto',
      contrasena: 'flo123',
      mail: 'rescatar@gmail.com',
      tipo: 'fundación',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    
  ]),
  down: (queryInterface) => queryInterface.bulkDelate('User', null, {}),
    
};
