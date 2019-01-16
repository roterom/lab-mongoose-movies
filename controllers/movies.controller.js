const Movie = require('../models/movie.model');
const Celebrity = require('../models/celebrity.model');

module.exports.list = (req, res, next) => {
  Movie.find()
    .populate('celebrity')
    .then((movies) => res.render('movies/index', {movies}))
    .catch(err => next(err))
}

module.exports.create = (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => res.render('movies/new', {celebrities}));
}

module.exports.doCreate = (req, res, next) => {
  const movie = new Movie(req.body);

  movie.save()
    .then((movie) => res.redirect('/movies' ));
}

module.exports.get = (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      Celebrity.findById(movie.celebrity)
        .then(celebrity => res.render('movies/show', {movie, celebrity}));
    })
}

module.exports.delete = (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(movie => res.redirect('/movies'));
}

module.exports.edit = (req, res, next) => {
  Promise.all([
    Celebrity.find(),
    Movie.findById(req.params.id).populate('celebrity')
  ])
  .then((results) => {
      const celebrities = results[0];
      const movie = results[1];
      res.render('movies/edit', {movie, celebrities});
  })
}

module.exports.doEdit = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      movie.set(req.body);

      movie.save()
        .then((movie) => res.redirect('/movies'));
    })
}