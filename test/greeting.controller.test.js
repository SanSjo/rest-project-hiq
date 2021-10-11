const request = require('supertest');
const greeting = require('../Models/greeting');
const greetingController = require("../Controller/greeting.controller");

const greetingObject = {content: "Hello"}

it("should return a greeting", async () => {
   expect("Hello").toMatch(/Hello/);
})

it("should return all greetings", async () => {
    request(greeting).get('/greetings')
    .expect(200)
    //.expect(getAllGreetings.getGreeting(content)).
})

//TO DO
it("should add a greeting", async () => {
    request(greeting).post('/greetings')
    .send({
        content: "Hello Tariq",
    })
    .expect(201);
})

it("should test PUT methid for /api/greetings/:_id", () => {
    const editGreeting = {content: "Hello hey"}
    request(greeting).put('api/greetings/:_id')
    .send(editGreeting)
    .expect(200);
})

it("should test DELETE method for api/greetings/:_id", () => {
    request(greeting).delete('api/greetings/:_id')
    .expect(200);
    
})

// it("should edit a greeting content", async () => {
//     await request(app).put('/greeting')
//     .send({
//         content: "Hello World put"
//     })
//     .expect(201);
// })




// const chai = require('chai');
// const chaiHttp = require('chai-http')
// const assert = require('assert');
// const expect = require('expect.js')
// const MockReq = require('mock-req');
// const MockRes = require('mock-res');

// const app = require('../app');

// chai.should();

// chai.use(chaiHttp);


// describe("test get request", () => {
//     it("test get request", (done) => {
//         chai.request(app)
//             .get("/greeting")
//             .end((err, response) => {
//                 response.should.have.status(200);
//                 response.body.should.be.a('array');
//                 response.body.should.have.property('id');
//                 response.body.should.have.property("content").eql("Hello World");
//                 done();
//             })
//     })
//     it("Should return Hello world when requesting /greeting route", () => {
//         expect({content: "Hello World"}).to.eql({content: "Hello World"})
//     });


// })





