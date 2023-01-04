const ClientsModel = require("../models/ClientsModel").clients
const sequelize = require('sequelize')

const contactController = {
    index: async(request, response) => {
        const client = {
            name: request.body.name, 
            email: request.body.email,
            product: request.body.product
          };
          console.log(request.body)
          console.log("post!")

          /* create in sequelize
          await ClientsModel.create({client});

          */
    }
}

module.exports = contactController;


// ...

// sequelize.sync().then(() => {
//    console.log('Book table created successfully!');

//    Book.create({
//        title: "Clean Code",
//        author: "Robert Cecil Martin",
//        release_date: "2021-12-14",
//        subject: 3
//    }).then(res => {
//        console.log(res)
//    }).catch((error) => {
//        console.error('Failed to create a new record : ', error);
//    });

// }).catch((error) => {
//    console.error('Unable to create table : ', error);
// });