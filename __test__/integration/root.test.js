const request = require("supertest")
const app = require("../../src/infra/api/server")

describe("[e2e] Test My app server", () => {
    it('should get healthcheck route', async () => {
        const res = await request(app)
        .get('/healthcheck')

        expect(res.statusCode).toBe(200)
    })
})