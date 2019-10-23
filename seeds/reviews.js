
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1, movie_id: 100, reviewer: 'Callan', writeup: 'Awsome Movie!', rating: '5/5', url: 'https://avatars2.githubusercontent.com/u/29969836?v=4&s=400'},
        {id: 2, movie_id: 101, reviewer: 'Rajal', writeup: 'Very emotional, a true outlook on what life in the hood can be like.', rating: '4.5/5', url:'https://avatars1.githubusercontent.com/u/26450541?v=4&s=400'},
        { id: 3, movie_id: 102, reviewer: 'Aaron', writeup: 'I want to be a secret agent now!', rating: '4/5', url:"https://en.gravatar.com/userimage/120771448/00a75fcadc23931259ef619ed7b02a09.jpg?size=200"},
        {id: 4, movie_id: 103, reviewer: 'Skye', writeup: 'Haven\'t seen it yet', rating: '0/5', url: 'https://avatars3.githubusercontent.com/u/24470792?v=4&s=400'}
      ])
    })
};
