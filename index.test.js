const request = require("supertest");
const app = require('./server');
const { exportAllDeclaration } = require("@babel/types");
const { expect } = require("@jest/globals");


describe('Test My app server', () => {
    it('should get main route', async ()=> {
        const res = await request(app).get('/')
        
        expect(res.body).toHaveProperty('key')
    })

    it('should get status 200', async () => {
        const res = await request(app).get('/')

        expect(res.statusCode).toEqual(200)
    })
})