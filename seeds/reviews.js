
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1, movie_id: 100, reviewer: 'Callan', writeup: 'Awsome Movie!', rating: '5/5'},
        {id: 2, movie_id: 101, reviewer: 'Rajal', writeup: 'Very emotional, a true outlook on what life in the hood can be like.', rating: '4.5/5'},
        {id: 3, movie_id: 102, reviewer: 'Aaron', writeup: 'I want to be a secret agent now!', rating: '4/5'},
        {id: 4, movie_id: 103, reviewer: 'Skye', writeup: 'Haven\'t seen it yet', rating: '0/5'}
      ])
    })
};
