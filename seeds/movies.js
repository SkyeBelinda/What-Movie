exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 100, title: 'Spider-man: Homecoming', plot: 'Story about PP', url: 'http://is3.mzstatic.com/image/thumb/Video118/v4/4d/dd/d6/4dddd69b-c70c-3232-806f-4aa8ad7c3821/source/1200x630bb.jpg'},
        {id: 101, title: 'Boyz n the Hood', plot: 'Three boys lead very different lives from the hood', url: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Boyz_n_the_hood_poster.jpg'},
        {id: 102, title: 'The last boy scout', plot: 'Willis as an ex-Secret Service agent who was a boy scout', url: 'https://i.jeded.com/i/the-last-boy-scout.18701.jpg'},
        {id: 103, title: 'Wind river', plot: 'Cory Lambert is a wildlife officer who finds the body of an 18-year-old woman on an American Indian reservation in snowy Wyoming.', url: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Wind_River_%282017_film%29.png'}
      ])
    })
}
