const express = require("express");
const faker = require("faker");
const app = express();
app.use( express.json());
app.use( express.urlencoded({extended: true}));

var _id = 0

class User {
  constructor() {
    this._id = _id++
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this._id = _id++
    this.name = faker.company.companyName();
    this.address = {
      street : faker.address.streetName(),
      city : faker.address.city(),
      state : faker.address.state(),
      zipCode : faker.address.zipCode(),
      country : faker.address.country(),
    }
  }
}


app.get("/api/users/new", (req, res) => {
    res.json( new User());
  });

  app.get("/api/company/new", (req, res) => {
    res.json( new Company());
  });

  app.get("/api/user/company", (req,res) =>{
    res.json({
      user : new User(),
      company: new Company()
    })
  })


console.log(new User());
console.log(new Company());

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
