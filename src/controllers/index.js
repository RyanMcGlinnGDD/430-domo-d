const notFound = (req, res) => {
  res.status(404).render('notFound', {
    page: req.url,
  });
};

// export the relevant public controller functions
module.exports = {
  notFound,
};

module.exports.Account = require('./Account.js');
module.exports.Domo = require('./Domo.js');

