var express = require('express');
var router = express.Router();
const db = require("../model/helper");

// //EMERGENCY
// /* GET LOGS  */
// router.get('/emergency', function(req, res, next) {
//   db("SELECT * FROM emergency;")
//   .then(results => {
//     res.send(results.data);
//   })
//   .catch(err => res.status(500).send(err));
  
// });

// // GET LOGS BY ID
// router.get("/emergency/:id", function(req, res, next) {
//   db(`SELECT * FROM emergency WHERE id=${req.params.id};`)
//     .then(results => {
//       res.send(results.data);
//     })
//     .catch(err => res.status(500).send(err));
// });

// // INSERT a new log
// router.post("/emergency", function(req, res, next) {
//   db(
//     `INSERT INTO emergency (feeling, because) VALUES ('${req.body.feeling}', '${req.body.because}')`
//   )
//     .then(results => {
//       res.send({ message: "ok" });
//     })
//     .catch(err => res.status(500).send(err));
// });

// // DELETE PARENT from the DB -- 
// router.delete("/parent/:id", function(req, res, next) {
//   db(`DELETE FROM parent WHERE id=${req.params.id};`)
//     .then(results => {
//       const payload = { message: "ok" };
//       res.send(payload);
//     })
//     .catch(err => res.status(500).send(err));
// });


// // GET parents BY ID
// router.get("/parent/:id", function(req, res, next) {
//   db(`SELECT * FROM parent WHERE id=${req.params.id};`)
//     .then(results => {
//       res.send(results.data);
//     })
//     .catch(err => res.status(500).send(err));
// });

// // DELETE a log from the DB -- 
// router.delete("/emergency/:id", function(req, res, next) {
//   db(`DELETE FROM emergency WHERE id=${req.params.id};`)
//     .then(results => {
//       const payload = { message: "ok" };
//       res.send(payload);
//     })
//     .catch(err => res.status(500).send(err));
// });

//
///////
////////////
///////////////////
///////////////////////////



// /* GET users KIDS listing. -- ok */
// router.get('/kid', function(req, res, next) {
//   db("SELECT * FROM kid;")
//   .then(results => {
//     res.send(results.data);
//   })
//   .catch(err => res.status(500).send(err));
  
// });

// // GET one KID -- ok
// router.get("/kid/:id", function(req, res, next) {
//   db(`SELECT * FROM kid WHERE id=${req.params.id};`)
//     .then(results => {
//       res.send(results.data);
//     })
//     .catch(err => res.status(500).send(err));
// });

// // GET PARENTS -- ok
// router.get("/parent", function(req, res, next) {
//   db("SELECT * FROM parent;")
//     .then(results => {
//       res.send(results.data);
//     })
//     .catch(err => res.status(500).send(err));
// });

// // GET one Parent -- ok
// router.get("/parent/:id", function(req, res, next) {
//   db(`SELECT * FROM parent WHERE id=${req.params.id};`)
//     .then(results => {
//       res.send(results.data);
//     })
//     .catch(err => res.status(500).send(err));
// });

// // GET Logs -- ok
// router.get("/log", function(req, res, next) {
//   db("SELECT * FROM log;")
//     .then(results => {
//       res.send(results.data);
//     })
//     .catch(err => res.status(500).send(err));
// });

// // GET one Log -- ok
// router.get("/log/:id", function(req, res, next) {
//   db(`SELECT * FROM log WHERE id=${req.params.id};`)
//     .then(results => {
//       res.send(results.data);
//     })
//     .catch(err => res.status(500).send(err));
// });

// INSERT NEW PARENT DATA -- ok
// router.post("/parent", function(req, res, next) {
//   db(`INSERT INTO parent (firstname, lastname, email, username) 
//       VALUES ('${req.body.firstname}','${req.body.lastname}', '${req.body.email}', '${req.body.username}')`
//    )
//   .then(results => {
//     res.send({ message: "ok" });
//   })
//   .catch(err => res.status(500).send(err)); 
// });

//REGISTER NEW PARENT MOOD_WOOD_MVP 
router.post("/parent", function(req, res, next) {
  db(`INSERT INTO parent (firstname, lastname, email, kidname, password) 
      VALUES ('${req.body.firstname}','${req.body.lastname}', '${req.body.email}', '${req.body.kidname}', '${req.body.password}')`
   )
  .then(results => {
    res.send({ message: "ok" });
  })
  .catch(err => res.status(500).send(err)); 
});

/* GET MOOD */
router.get('/mood', function(req, res, next) {
  db("SELECT * FROM mood;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
  
});

// /* GET PARENT  */
router.get('/parent', function(req, res, next) {
  db("SELECT * FROM parent;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
  
});

// DELETE PARENT 
router.delete("/parent/:email", function(req, res, next) {
  db(`DELETE FROM parent WHERE email='${req.params.email}';`)
    .then(results => {
      const payload = { message: "ok" };
      res.send(payload);
    })
    .catch(err => res.status(500).send(err));
});

// LOG IN PARENT BY EMAIL and PASSWORD
router.get("/logparent/:email/:password", function(req, res, next) {
  db(`SELECT * FROM parent WHERE email='${req.params.email}' AND password='${req.params.password}';`)
    .then(results => {
    console.log(results);
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// SELECT IFNULL( (SELECT field1 FROM table WHERE id = 123 LIMIT 1) ,'not found');

// // INSERT a new kid ----- ok
// router.post("/kid", function(req, res, next) {
//   db(
//     `INSERT INTO kid (firstname, parent_Id) VALUES ('${req.body.firstname}', '${req.body.parent_id}')`
//   )
//     .then(results => {
//       res.send({ message: "ok" });
//     })
//     .catch(err => res.status(500).send(err));
// });

// // INSERT a new log ----- ok
// router.post("/log", function(req, res, next) {
//   db(
//     `INSERT INTO log (kid_id, moodiconid, text, date) VALUES ('${req.body.kid_id}', '${req.body.moodiconid}', '${req.body.text}', '${req.body.date}')`
//   )
//     .then(results => {
//       res.send({ message: "ok" });
//     })
//     .catch(err => res.status(500).send(err));
// });


// // INSERT a new moodIcon ----- check
// router.post("/moodIcon", function(req, res, next) {
//   db(
//     `INSERT INTO moodIcon (image) VALUES (null)`
//   )
//     .then(results => {
//       res.send({ message: "ok" });
//     })
//     .catch(err => res.status(500).send(err));
// }); 





// /*
// //REGISTRATION AND LOG IN

// //INSERT a new USER into the DB
// router.post("/users", async (req, res, next) => {
//   try{
//   const salt = await bcrypt.genSalt()
//   const hashedPassword = await bcrypt.hash (req.body.password, 10)
  
//   db(`INSERT INTO users (fullname, email, password, username) 
//       VALUES ('${req.body.fullname}', '${req.body.email}', '${hashedPassword}', '${req.body.username}');`
//   )
  
//   res.status(201).send()
  
// }catch {
//     res.status(500).send()
//   }
// });

// // GET users
// router.get("/users", function(req, res, next) {
//   db("SELECT * FROM users;")
//     .then(results => {
//       res.send(results.data);
//     })
//     .catch(err => res.status(500).send(err));
// });

// // DELETE USER from the DB -- 
// router.delete("/users/:id", function(req, res, next) {
//   db(`DELETE FROM users WHERE id=${req.params.id};`)
//     .then(results => {
//       const payload = { message: "ok" };
//       res.send(payload);
//     })
//     .catch(err => res.status(500).send(err));
// });




/*
//USER LOG IN --- bcrypt.compare(req.body.password, user.password)

router.post("/login", function(req, res, next) {
  
  db(
    `SELECT id FROM users WHERE username = "${req.body.username}" AND password = "${req.body.password}"`
  ).then(results => {
    if (results.data.length) {
      const token = jwt.sign(
        {user_id : results.data[0].id},
        "anythingWEcanPassHere"
      ); res.send({message: "Log in successfull", token });
    } else 
      res.status(400).send({ message: "Login NOT successful" });
    
  });
});

//THE PROTECTED AREA
router.get("/profile", userLoggedIn, (req, res) => {
  db(`SELECT * FROM users WHERE id=${req.user_id}`).then(
    results => {
    res.send({ 
    msg: "Here is the Private info of USER logged in", 
    data: results.data
  });
 });
}); */



module.exports = router;

