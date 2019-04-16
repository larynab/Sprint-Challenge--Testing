const request = require("supertest");
const db = require('../data/dbConfig.js')
const server = require("./server.js");

describe("Routes", () => {
  describe("POST /games", () => {
    it("should post and return status 201", async () => {
      const body = { title: "Pacman", genre: "Arcade", releaseYear: 1980 };
      const res = await request(server)
        .post("/games")
        .send(body);
      expect(res.status).toBe(201);
    });
    it("should return post failure status 422", async () => {
      const body = { title: "Quack", releaseYear: 2000 };
      const res = await request(server)
        .post("/games")
        .send(body);
      expect(res.status).toBe(422);
    });
    it("should return success message", async () => {
      const body = { title: "Quack", genre: "swim", releaseYear: 2000 };
      const res = await request(server)
        .post("/games")
        .send(body);
      expect(res.body).toEqual({
        message: "game added"
      });
    });
  });

  describe("GET /games", () => {
    //COMMENT THIS ON AND OFF FOR TESTING
    // beforeEach(async () => {
    //   await db("games").truncate();
    // });
    it("should return status 200 on get request", async () => {
      const res = await request(server).get("/games");
      expect(res.status).toBe(200);
    });
    it("should return array on request", async () => {
        const games = await db('games');
        expect(games).toHaveLength(6);
    });
    it("should return empty array on request", async () => {
        const games = await db('games');
        expect(games).toHaveLength(0);
    });
  });
});
