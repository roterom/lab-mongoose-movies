const Celebrity = require('../models/celebrity.model');

module.exports.list = (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => res.render('celebrities/list', { celebrity }))
    .catch(err => next(err))
}

module.exports.create = (req, res, next) => {
  res.render('celebrities/new');
}

module.exports.doCreate = (req, res, next) => {
  const celebrity = new Celebrity(req.body);

  celebrity.save()
    .then((celebrity) => { res.redirect('/celebrities' )});
}

module.exports.get = (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => res.render('celebrities/show', { celebrity }));
}

// module.exports.delete = (req, res, next) => {
//   User.findByIdAndDelete(req.params.id)
//     .then(user => res.redirect('/users'));
// }