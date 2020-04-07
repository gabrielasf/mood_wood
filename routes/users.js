var express = require('express');
var router = express.Router();
const db = require("../model/helper");

//EMERGENCY
/* GET LOGS  */
router.get('/emergency', function(req, res, next) {
  db("SELECT * FROM emergency;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
  
});

// GET LOGS BY ID
router.get("/emergency/:id", function(req, res, next) {
  db(`SELECT * FROM emergency WHERE id=${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// INSERT a new log
router.post("/emergency", function(req, res, next) {
  db(
    `INSERT INTO emergency (feeling, because) VALUES ('${req.body.feeling}', '${req.body.because}')`
  )
    .then(results => {
      res.send({ message: "ok" });
    })
    .catch(err => res.status(500).send(err));
});

// DELETE PARENT from the DB -- 
router.delete("/parent/:id", function(req, res, next) {
  db(`DELETE FROM parent WHERE id=${req.params.id};`)
    .then(results => {
      const payload = { message: "ok" };
      res.send(payload);
    })
    .catch(err => res.status(500).send(err));
});


// GET parents BY ID
router.get("/parent/:id", function(req, res, next) {
  db(`SELECT * FROM parent WHERE id=${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//
///////
////////////
///////////////////
///////////////////////////



/* GET users KIDS listing. -- ok */
router.get('/kid', function(req, res, next) {
  db("SELECT * FROM kid;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
  
});

// GET one KID -- ok
router.get("/kid/:id", function(req, res, next) {
  db(`SELECT * FROM kid WHERE id=${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET PARENTS -- ok
router.get("/parent", function(req, res, next) {
  db("SELECT * FROM parent;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET one Parent -- ok
router.get("/parent/:id", function(req, res, next) {
  db(`SELECT * FROM parent WHERE id=${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET Logs -- ok
router.get("/log", function(req, res, next) {
  db("SELECT * FROM log;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET one Log -- ok
router.get("/log/:id", function(req, res, next) {
  db(`SELECT * FROM log WHERE id=${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// INSERT NEW PARENT DATA -- ok
router.post("/parent", function(req, res, next) {
  db(`INSERT INTO parent (firstname, lastname, email, username) 
      VALUES ('${req.body.firstname}','${req.body.lastname}', '${req.body.email}', '${req.body.username}')`
   )
  .then(results => {
    res.send({ message: "ok" });
  })
  .catch(err => res.status(500).send(err)); 
});

// INSERT a new kid ----- ok
router.post("/kid", function(req, res, next) {
  db(
    `INSERT INTO kid (firstname, parent_Id) VALUES ('${req.body.firstname}', '${req.body.parent_id}')`
  )
    .then(results => {
      res.send({ message: "ok" });
    })
    .catch(err => res.status(500).send(err));
});

// INSERT a new log ----- ok
router.post("/log", function(req, res, next) {
  db(
    `INSERT INTO log (kid_id, moodiconid, text, date) VALUES ('${req.body.kid_id}', '${req.body.moodiconid}', '${req.body.text}', '${req.body.date}')`
  )
    .then(results => {
      res.send({ message: "ok" });
    })
    .catch(err => res.status(500).send(err));
});


// INSERT a new moodIcon ----- check
router.post("/moodIcon", function(req, res, next) {
  db(
    `INSERT INTO moodIcon (image) VALUES (null)`
  )
    .then(results => {
      res.send({ message: "ok" });
    })
    .catch(err => res.status(500).send(err));
}); 



// DELETE a kid from the DB -- 
router.delete("/kid/:id", function(req, res, next) {
  db(`DELETE FROM kid WHERE id=${req.params.id};`)
    .then(results => {
      const payload = { message: "ok" };
      res.send(payload);
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

