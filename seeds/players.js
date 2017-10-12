
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Players').del()
    .then(function () {
      // Inserts seed entries
      return knex('Players').insert([
        {id: 100, firstName: 'Aaron', surName: 'Macdonald', knickName: 'Azza', favHand:'6 7 suited',favHeadsUp: 'Wiremu', leastFavHeadsUp: 'Lucky Troy' },
        {id: 101, firstName: 'Bayley', surName: 'Legget', knickName: 'Bayles', favHand:'AA',favHeadsUp: 'Ashley', leastFavHeadsUp: 'Nick' },
        {id: 102, firstName: 'Nick', surName: 'Evans', knickName: 'Nig', favHand:'QQ',favHeadsUp: 'Kev', leastFavHeadsUp: 'Andrew'},
      ]);
    });
};
