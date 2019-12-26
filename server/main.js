const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const serveStatic = require('serve-static');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello')
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
})

app.post('/register', (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
})

app.use(serveStatic(__dirname + "/dist/"));
// Inserted this so that client-side routing works
app.use(history({
  verbose: true
}));
// Documentation for connect-history-api-fallback requires this again...
app.use(serveStatic(__dirname + "/dist/"));

let port = process.env.PORT || 4000;

app.listen(port, function(){
  console.log('Node js Express js Tutorial at port', port);
});










// const express = require('express');
// const path = require('path');
// const serveStatic = require('serve-static');
// const history = require('connect-history-api-fallback');
// const pool = require('./database.js');
// const timeout = require('connect-timeout');
// app = express();
// const passport = require('passport');
// const session = require('express-session');
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
//
// //using express session
// app.use(session({
//   //store: new (require('connect-pg-simple')(session))(),
//   secret: process.env.SESSION_SECRET || 'default_session_secret',
//   resave: false,
//   saveUninitialized: false,
// }));
//
// //initializing passport session
// app.use(passport.initialize());
// app.use(passport.session());
//
//
// // tell passport how to serialize the user
// passport.serializeUser((user, done) => {
//   //console.log('Inside serializeUser callback. User id is save to the session file store here')
//   done(null, user);
// });
//
// passport.deserializeUser((obj, done) => {
//   //console.log('Inside deserializeUser callback. User id is save to the session file store here')
//   done(null, obj);
// });
//
//
// //makes web urls protected by checking whether or not a user is logged in/have access
// const accessProtectionMiddleware = (req, res, next) => {
//   if (req.user) {
//     next();
//   }
//   else {
//     res.status(403).json({
//       message: 'Please login to be able to submit pieces of art!',
//     });
//   }
// }
//
// // function for errors on database connections
// function dbConnError(res, err) {
//   console.error('Error acquiring client', err, err.message, err.stack);
//   res.status(400);
//   res.send(err);
// }
//
// // function for query errors
// function queryError(res, err) {
//   console.log('Query error', err, err.message, err.stack);
//   res.status(400);
//   res.send(err);
// }
//
// function getQuerySuccess(res, resp) {
//   console.log("Query is successful.");
//   res.status(200);
//   res.json(resp.rows);
//   console.log(resp);
//   console.log(resp.rows);
// }
//
// //CITATION: https://stackoverflow.com/questions/40876599/express-js-force-https-ssl-redirect-error-too-many-redirects
// //HTTPS redirect middleware
// function ensureSecure(req, res, next) {
//   //Heroku stores the origin protocol in a header variable. The app itself is isolated within the dyno and all request objects have an HTTP protocol.
//   if (req.get('X-Forwarded-Proto')=='https' || req.hostname == 'localhost') {
//     //Serve Vue App by passing control to the next middleware
//     next();
//   } else if(req.get('X-Forwarded-Proto')!='https' && req.get('X-Forwarded-Port')!='443'){
//     //Redirect if not HTTP with original request URL
//     res.redirect('https://' + req.hostname + req.url);
//   }
// }
//
// // To resolve CORS issues
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//   next();
// });
// app.use(express.json());
//
// function haltOnTimedout (req, res, next) {
//   if (!req.timedout) next()
// }
//
//
// app.get('/submit', accessProtectionMiddleware);
//
//
// // Submit request art to be insterted into the database
// app.post('/submit', timeout('5s'), haltOnTimedout, async (req, res) => {
//   console.log("Submit req.param.body.params:", req.body.params)
//   // Set query parameters to properly escape single-quotes
//   let notes = null
//   let dimensions = null
//   let value = null
//   let title = req.body.params['title']
//   let artist = req.body.params['artist']
//   let year = req.body.params['year']
//   let type = req.body.params['type']
//   let owner = req.body.params['owner']
//   let source = req.body.params['source']
//   let restrictions = req.body.params['restrictions']
//   let condition = req.body.params['condition']
//   let date_surveyed = req.body.params['date_surveyed']
//   let geo_id = req.body.params['geo_id']
//   let surveyor_id = 1; //temporary until we implement user
//
//   // Optional field may be null
//   if (req.body.params['notes']) {
//     notes = req.body.params['notes']
//   }
//   if (req.body.params['dimensions']) {
//     dimensions = req.body.params['dimensions']
//   }
//   if (req.body.params['value']){
//     value = req.body.params['value']
//   }
//
//   let query = `INSERT INTO art(title, artist, year, type, dimensions, owner,\
//     source, value, restrictions, condition, notes, date_surveyed, surveyor_id,\
//     geo_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING art_id;`
//   let vals = [title, artist, year, type, dimensions, owner, source, value, restrictions, condition, notes, date_surveyed, surveyor_id, geo_id]
//   console.log("Query and vals are:", query, vals)
//
//   //connect to the db
//   pool.connect(function (err, client, done) {
//     if (err) {
//       dbConnError(res, error);
//     }
//     client.query(query, vals, //do the query
//       (err, resp) => {
//         if (err) {
//           queryError(res, err);
//           return;
//         }
//         if (req.timedout) return
//
//         res.status(200);
//         res.json(resp.rows[0].art_id);
//       });
//       client.release();
//   });
// });
//
// // Insert into the History table
// app.post('/submitHistory', timeout('5s'), haltOnTimedout, async (req, res) => {
//   let provider_id = req.body.params[0]
//   let art_id = req.body.params[1]
//
//   let query = 'INSERT INTO history(provider_id, art_id) VALUES ($1, $2)'
//   let vals = [provider_id, art_id]
//
//   //connect to the db
//   pool.connect(function (err, client, done) {
//     if (err) {
//       dbConnError(res, err);
//       return;
//     }
//     client.query(query, vals, //do the query
//       (err, resp) => {
//         if (err) {
//           queryError(res, err);
//           return;
//         }
//         if (req.timedout) return
//         // Successful insert to database.
//         res.status(200);
//         res.json("success");
//       });
//       client.release();
//   });
// });
//
// // Request query from the database
// app.get('/retrieve', timeout('5s'), haltOnTimedout, async (req, res) => {
//   console.log("Hitting retrieve");
//   let table = req.query['table'];
//   let locationBox = req.query['owner']
//   let conditionBox = req.query['condition']
//   let typeBox = req.query['type']
//   let years = req.query['years']
//   let fullQuery = "";
//
//   let locationCol = "owner";
//   let conditionCol = "condition";
//   let typeCol = "type";
//
//   let locationCond = "";
//   let conditionCond = "";
//   let typeCond = "";
//   let yearCond = "";
//
//   if(locationBox !== undefined && locationBox.length > 0){
//     locationBox.toString();
//     locations = locationBox.split(",");
//     let i;
//     for(i = 0; i < locations.length; i++){
//       if(i > 0){
//         locationCond = locationCond + " OR ";
//       }
//       locationCond = locationCond + locationCol + "=" + "'" + locations[i] + "'";
//     }
//   }
//   if(conditionBox !== undefined && conditionBox.length > 0){
//     conditionBox.toString();
//     conditions = conditionBox.split(",");
//     let i;
//     for(i = 0; i < conditions.length; i++){
//       if(i>0){
//         conditionCond = conditionCond + " OR ";
//       }
//       conditionCond = conditionCond + conditionCol + "=" + "'" + conditions[i] + "'";
//     }
//   }
//   if(typeBox !== undefined && typeBox.length > 0){
//     let i;
//     typeBox.toString();
//     types = typeBox.split(",");
//     for(i = 0; i < types.length; i++){
//       if(i>0){
//         typeCond = typeCond + " OR ";
//       }
//       typeCond = typeCond + typeCol + "=" + "'" + types[i] + "'";
//     }
//   }
//   if(years !== undefined && years.length > 0){
//     years.toString();
//     let vals = years.split(",");
//     yearCond = "year >= " + vals[0] + " AND year <= " + vals[1]
//   }
//
//   let whereCond = [locationCond, conditionCond, typeCond, yearCond].filter(Boolean).join(' AND ');
//
//   if(whereCond || whereCond.length != 0) {
//     fullQuery = `SELECT * FROM ${table} WHERE (${whereCond});`
//   }
//   else {
//     fullQuery = `SELECT * FROM ${table};`
//   }
//
//   console.log("Query processed: ", fullQuery);
//   //connect to the db
//   pool.connect(function (err, client, done) {
//     if (err) {
//       dbConnError(res, err);
//       return;
//     }
//     client.query(fullQuery, //do the query
//       (err, resp) => {
//         if (err) {
//           queryError(res, err);
//           return;
//         }
//         if (req.timedout) return
//
//         // Successful get request
//         getQuerySuccess(res, resp);
//       });
//       client.release();
//   });
// });
//
// function getIDQuery(res, req, table, col_val, val)
// {
//   //connect to the db
//   pool.connect(function (err, client, done) {
//     if (err) {
//       dbConnError(res, err);
//       return;
//     }
//     client.query(`SELECT * FROM ${table} WHERE ${col_val}=${val};`, //do the query
//       (err, resp) => {
//         if (err) {
//           queryError(res, err);
//           return;
//         }
//         if (req.timedout) return
//
//         // Successful get request
//         getQuerySuccess(res, resp);
//       });
//       client.release();
//   });
// }
//
// // Request query with specific id from the database
// app.get('/retrieve/:id', timeout('5s'), haltOnTimedout, async (req, res) => {
//   console.log("Hitting retrieve route with an :id");
//   let table = req.query['table'];
//   let id = req.params.id
//
//   getIDQuery(res, req, table, 'art_id', id);
// });
//
// // Request query with specific id from the database
// app.get('/getImages', timeout('5s'), haltOnTimedout, async (req, res) => {
//   console.log("getting images")
//   let table = req.query['table'];
//   let id = req.query['art_id'];
//
//   getIDQuery(res, req, table, 'art_id', id);
// });
//
// // Request query with specific id from the database
// app.get('/getCoords', timeout('5s'), haltOnTimedout, async (req, res) => {
//   let table = req.query['table'];
//   let id = req.query['geo_id']
//
//   getIDQuery(res, req, table, 'geo_id', id);
// });
//
// // Remove a specific Image from Image table
// app.delete('/deleteImage', timeout('5s'), haltOnTimedout, async (req, res) => {
//   console.log("deleting Image", req.body.params)
//   let aws_link = req.body.params;
//
//   //connect to the db
//   pool.connect(function (err, client, done) {
//     if (err) {
//       dbConnError(res, err);
//       return;
//     }
//     client.query(`DELETE FROM image WHERE aws_link='${aws_link}';`, //do the query
//       (err, resp) => {
//         if (err) {
//           queryError(res, err);
//           return;
//         }
//         if (req.timedout) return
//         // Successful get request
//         getQuerySuccess(res, resp);
//       });
//       client.release();
//   });
// });
//
// // Remove a specific Image from Image table
// app.patch('/updateGeo', timeout('5s'), haltOnTimedout, async (req, res) => {
//   console.log("updating Geo")
//   let lat = req.body.params[0];
//   let lng = req.body.params[1];
//   let geo_id = req.body.params[2]
//
//   //connect to the db
//   pool.connect(function (err, client, done) {
//     if (err) {
//       dbConnError(res, err);
//       return;
//     }
//     client.query(`UPDATE geolocation SET latitude = ${lat}, longitude = ${lng} WHERE geo_id=${geo_id};`, //do the query
//       (err, resp) => {
//         if (err) {
//           queryError(res, err);
//           return;
//         }
//         if (req.timedout) return
//
//         // Successful get request
//         getQuerySuccess(res, resp);
//       });
//       client.release();
//   });
// });
//
// app.all('*', ensureSecure);
// // App should use created /dist folder that holds Vue project.
// app.use(serveStatic(__dirname + "/dist/"));
// // Inserted this so that client-side routing works
// app.use(history({
//   verbose: true
// }));
// // Documentation for connect-history-api-fallback requires this again...
// app.use(serveStatic(__dirname + "/dist/"));
//
// let port = process.env.PORT || 5000;
// app.listen(port);
// console.log('Server started on port: '+ port)
