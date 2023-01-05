const ClientsModel = require("../models/ClientsModel")
const sequelize = require("../config/sequelize")
sequelize.sync()

const sendController = {
    index: async(request, response) => {
          const client = await ClientsModel.findAll(
            {
                limit: 1,
                order: [ [ 'createdAt', 'DESC' ]]
              }
          );
          console.log(client)
          response.json(client)
    }
}

module.exports = sendController; 
