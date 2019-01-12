const Celebrity = require('../models/celebrity.model');

module.exports.list = (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => res.render('celebrities/list', { celebrity }))
    .catch(err => next(err))
}

// module.exports.create = (req, res, next) => {
//   res.render('users/create');
// }

// module.exports.doCreate = (req, res, next) => {
//   const user = new User(req.body);

//   user.save()
//     .then((user) => { res.redirect('/users' )});
// }

// module.exports.get = (req, res, next) => {
//   User.findById(req.params.id)
//     .then(user => res.render('users/detail', { user }));
// }

// module.exports.delete = (req, res, next) => {
//   User.findByIdAndDelete(req.params.id)
//     .then(user => res.redirect('/users'));
// }