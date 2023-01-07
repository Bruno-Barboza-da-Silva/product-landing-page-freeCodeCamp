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
    }
}

module.exports = managerController; 
