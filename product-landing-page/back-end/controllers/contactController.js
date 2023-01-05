const ClientsModel = require("../models/ClientsModel")
const sequelize = require("../config/sequelize")
sequelize.sync()

const contactController = {
    index: async(request, response) => {
          await ClientsModel.create({
            name: request.body.name,
            email:  request.body.email,
            product: request.body.product
          });
    }
}

module.exports = contactController; 
