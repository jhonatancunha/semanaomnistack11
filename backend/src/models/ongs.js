module.exports = (sequelize, DataTypes) => {
  const Ongs = sequelize.define(
    'Ong',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      whatsapp: DataTypes.STRING,
      city: DataTypes.STRING,
      uf: DataTypes.STRING(2),
    },
    {}
  );
  return Ongs;
};
