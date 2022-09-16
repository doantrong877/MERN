
import User from './user.js';
import Company from './company.js';
import express from "express";
import { faker } from '@faker-js/faker';
//const {faker} = require('@faker-js/faker')
const app = express();

const port = 8000;
app.use(express.json());
app.get("/", (req, res) => {
    res.send("hihi");
    console.log("hihi");

});

app.get("/api/users/new", (req, res) => {
    const newUser = new User(faker.random.numeric(), faker.name.firstName(), faker.name.lastName(), faker.phone.number(), faker.internet.email(), faker.internet.password());
    console.log("new user created");
    res.send(newUser);
    // return newUser;

})

app.get("/api/companies/new", (req, res) => {
    const address = {
        'street': faker.address.street(),
        'city': faker.address.city(),
        'state': faker.address.state(),
        'zipCode': faker.address.zipCode(),
        'country': faker.address.country()
    }
    const newCompany = new Company(faker.random.numeric(), faker.company.name(), address);
    console.log("new company created");
    res.send(newCompany);
    // return newCompany;
})
// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
