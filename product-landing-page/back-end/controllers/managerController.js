const ClientsModel = require("../models/ClientsModel")
const sequelize = require("../config/sequelize")
sequelize.sync()

const managerController = {
    index: async(request, response) => {
          const clients = await ClientsModel.findAll({
            order: [
                ['updated_at', 'DESC'],
            ],
          }
          );
          console.log(clients)
          response.json(clients)
    },
    update: async(request, response) => {},
    delete: async(request, response) => {
      const { id } = request.params;
      console.log(id)
    
      await ClientsModel.destroy({
        where: {
          id
        },})
    },
}

module.exports = managerController; 

