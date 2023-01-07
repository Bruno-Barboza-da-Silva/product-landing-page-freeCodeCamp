const ClientsModel = require("../models/ClientsModel");
const sequelize = require("../config/sequelize");
sequelize.sync();

const contactController = {
  index: async (request, response) => {
    await ClientsModel.create({
      name: request.body.name,
      email: request.body.email,
      product: request.body.product,
    });
  },
  show: async (request, response) => {
    const { id } = request.params;
    console.log(id);
    const json = await ClientsModel.findAll({
      where: {
        id,
      },
    });
    console.log(json)
    response.json(...json)
    
  },
};

module.exports = contactController;
