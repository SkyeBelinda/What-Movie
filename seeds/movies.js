
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('Movies').insert([
        {id: 100, movieName: 'Movie-1', otherName:"OtherName-1"},
        {id: 101, movieName: 'Movie-2', otherName:"OtherName-2"},
        {id: 102, movieName: 'Movie-3', otherName:"OtherName-3"},
      ]);
    });
};
