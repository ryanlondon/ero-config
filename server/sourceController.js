const model = require('./model');
const Source = model.Source;

const sourceController = {};

sourceController.getAllSources = (next) => {
  Source.find({}, next);
};

sourceController.addSource = (req, res, next) => {
  const newSource = new Source({ 
    name: req.body.name,
  });
  newSource.save((err, newSource) => {
    if (err) return console.error('Error saving source:', err);
    res.locals.source = newSource;
    next();
  }); 
};

sourceController.deleteSource = (req, res, next) => {
  Source.find({ name: req.param('name') })
    .remove((err) => {
      if (err) console.error('Error removing source:', err);
      next();
    });
};


module.exports = sourceController;