var express = require('express');
var router = express.Router();
const db = require("../model/helper");

//REGISTER NEW PARENT MOOD_WOOD_MVP //
router.post("/parent", function(req, res, next) {
  db(`INSERT INTO parent (firstname, lastname, email, kidname, password) 
      VALUES ('${req.body.firstname}','${req.body.lastname}', '${req.body.email}', '${req.body.kidname}', '${req.body.password}')`
   )
  .then(results => {
    res.send({ message: "ok" });
  })
  .catch(err => res.status(500).send(err)); 
});

// /* GET PARENT  */ //
router.get('/parent', function(req, res, next) {
  db("SELECT * FROM parent;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
  
});

// LOG IN PARENT BY EMAIL and PASSWORD //
router.get("/logparent/:email/:password", function(req, res, next) {
  db(`SELECT * FROM parent WHERE email='${req.params.email}' AND password='${req.params.password}';`)
    .then(results => {
    console.log(results);
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// INSERT a new log //
router.post("/log", function(req, res, next) {
  db(
    `INSERT INTO log (parent_Id, feeling, because) VALUES ('${req.body.parent_Id}', '${req.body.feeling}', '${req.body.because}');`
  )
    .then(results => {
      res.send({ message: "ok" });
    })
    .catch(err => res.status(500).send(err));
});

/* GET LOGS with PARENT ID  */ //
router.get("/idlog/:parent_Id", function(req, res, next) {
  db(`SELECT * FROM log WHERE parent_Id='${req.params.parent_Id}';`)
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});


// GET KIDNAME WITH PARENT ID //
router.get("/kidparent/:Id", function(req, res, next) {
  db(`SELECT kidName FROM parent WHERE Id='${req.params.Id}';`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// DELETE a log from the DB -- 
router.delete("/log/:id", function(req, res, next) {
  db(`DELETE FROM log WHERE id=${req.params.id};`)
    .then(results => {
      const payload = { message: "ok" };
      res.send(payload);
    })
    .catch(err => res.status(500).send(err));
});


module.exports = router;

