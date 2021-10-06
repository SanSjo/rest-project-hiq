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


const request = require('supertest');
const app = require('../app');

it("should get an array of greetings", async () => {
    request(app).get('/greetings')
    .expect(200)
})

it("should get a greeting", async () => {
    request(app).get('/greetings')
    .expect(200)

})

it("should add greeting content", async () => {
    await request(app).post('/greetings')
    .send({
        content: "Hello World"
    })
    .expect(201);
})

// it("should edit a greeting content", async () => {
//     await request(app).put('/greeting')
//     .send({
//         content: "Hello World put"
//     })
//     .expect(201);
// })

