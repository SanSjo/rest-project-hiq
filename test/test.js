const chai = require('chai');
const chaiHttp = require('chai-http')
const assert = require('assert');
const expect = require('expect.js')
const MockReq = require('mock-req');
const MockRes = require('mock-res');

const app = require('../app');

chai.should();

chai.use(chaiHttp);


describe("test get request", () => {
    it("test get request", (done) => {
        chai.request(app)
            .get("/greeting")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object')
                response.body.should.have.property("content");
                response.body.should.have.property('id');
                response.body.should.have.property("content").eql("Hello World");
                done()
            })
    })
    it("Should return Hello world when requesting /greeting route", () => {
        expect({content: "Hello World"}).to.eql({content: "Hello World"})
    });


})