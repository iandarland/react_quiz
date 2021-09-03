const db = require("../models")

module.exports = {
    create: function(req, res) {
        db.Score
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findAll: function(req, res) {
          db.Score
            .find(req.query)
            .sort({score:-1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));      
      }
}