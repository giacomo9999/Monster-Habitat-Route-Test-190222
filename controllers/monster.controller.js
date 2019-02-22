const Monster = require("../models/monster.model");

exports.test = (req, res) => {
  res.send("Greetings from the Test controller.");
};

exports.monster_create = (req, res) => {
  let monster = new Monster({
    api_index: req.body.api_index,
    name: req.body.name,
    number_appearing: req.body.number_appearing,
    alignment: req.body.alignment,
    hit_dice: req.body.hit_dice,
    type: req.body.type,
    frequency: req.body.frequency,
    habitat: req.body.habitat
  });

  monster.save(err => {
    if (err) {
      return next(err);
    }
    res.send("Monster Created Successfully.");
  });
};

exports.monster_details = (req, res) => {
  Monster.findById(req.params.id, (err, monster) => {
    if (err) return next(err);
    res.send(monster);
  });
};

exports.monster_update = (req, res) => {
  Monster.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    (err, monster) => {
      if (err) return next(err);
      res.send("Monster updated.");
    }
  );
};
