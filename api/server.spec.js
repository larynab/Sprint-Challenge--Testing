const request = require('supertest');

const server = require('./server.js');

describe('Routes', () => {
    describe('POST /games', () => {
        it('should post and return status 201', async ()=>{
            const body = {title: 'Pacman', genre: 'Arcade', releaseYear: 1980}
            const res = await request(server).post('/games').send(body);
            expect(res.status).toBe(201);
        })
    })
})