const db = require('../data/dbConfig.js');
const Gamelogs = require('./gamelogsModel');

describe('gamelogs model', () => {
  describe('insert()', () => {
    afterEach(async () => {
      await db('gamelogs').truncate();
    });

    it('should insert the provided gamelogs into the db', async () => {
      await Gamelogs.insert({ homeScore: 4, awayScore: 0, innings: 9 });
      await Gamelogs.insert({ homeScore: 1, awayScore: 2, innings: 10 });

      const gamelogs = await db('gamelogs');
      expect(gamelogs).toHaveLength(2);
    });

    it('should insert the provided gamelog into the db', async () => {
      let gamelog = await Gamelogs.insert({ homeScore: 4, awayScore: 0, innings: 9 });
      expect(gamelog.homeScore).toBe(4);

      gamelog = await Gamelogs.insert({ homeScore: 1, awayScore: 2, innings: 10 });
      expect(gamelog.awayScore).toBe(2);
    });
  });
});
