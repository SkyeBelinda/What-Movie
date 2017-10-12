exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('Movies').insert([
        {id: 100, movieName: 'Spider-man: Homecoming', plot: 'Story about PP'},
        {id: 101, movieName: 'Boyz n the Hood', plot: 'Three boys lead very different lives from the hood'},
        {id: 102, movieName: 'The last boy scout', plot: 'Willis as an ex-Secret Service agent who was a boy scout'},
        {id: 103, movieName: 'Wind river', plot: 'Cory Lambert is a wildlife officer who finds the body of an 18-year-old woman on an American Indian reservation in snowy Wyoming.'}
      ])
    })
}
