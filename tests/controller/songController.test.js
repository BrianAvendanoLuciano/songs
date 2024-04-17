const { expect, jest, test, describe, beforeEach } = require('@jest/globals');
const request = require('supertest');
const app = require('../../src/app');
const Song = require('../../src/models/song');
const { songFixture } = require('../fixtures/songFixture');

describe('SongController Endpoints', () => {
  beforeEach(() => {
    Song.find = jest.fn().mockResolvedValue(songFixture.getAll);
    Song.create = jest.fn().mockResolvedValue(songFixture.create);
    Song.findById = jest.fn().mockResolvedValue(songFixture.getAll[0]);
  });

    test('GET /api/songs should return a list of songs', async () => {
        const response = await request(app).get('/songs');

        expect(response.status).toBe(200);
        expect(response.body.data.length).toBeGreaterThan(0);
    });

    test('POST /api/songs should return the created song', async () => {
        const response = await request(app).post('/songs').send(songFixture.createPayload);

        expect(response.status).toBe(200);
        expect(response.body.data.title).toBe(songFixture.create.title);
        expect(response.body.data.artist).toBe(songFixture.create.artist);
        expect(response.body.data.createdAt).toBe(songFixture.create.createdAt);
    });

    test('GET /api/song/:id should return a song', async () => {
        const response = await request(app).get('/songs');

        expect(response.status).toBe(200);
        expect(response.body.data.length).toBeGreaterThan(0);
    });
});