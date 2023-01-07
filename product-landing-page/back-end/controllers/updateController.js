const ClientsModel = require("../models/ClientsModel");
const sequelize = require("../config/sequelize");
sequelize.sync();

const updateController = {
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
  update: async (request, response) => {
    const { id } = request.params;
    console.log(id);

 
    await ClientsModel.update({
      name: request.body.name,
      email: request.body.email,
      product: request.body.product,
    },
    {
      where: {id}
    });


    // const json = await ClientsModel.findAll({
    //   where: {
    //     id,
    //   },
    // });
    // console.log(json)
    // response.json(...json) 
  },
};

module.exports = updateController;
