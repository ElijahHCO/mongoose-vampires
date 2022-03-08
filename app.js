
/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose');
const seedData = require('./models/seed_vampires.js');
const Vampire = require('./models/vampire.js');


// Configuration
const mongoURI = 'mongodb://localhost:27017/' + 'vampires';
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on('open', () => {
    console.log('Connection made!');
});

/**********************************************************************
Write Your Code Below
**********************************************************************/
// Vampire.insertMany(seedData, (err, vampires) => {
//     if (err) { console.log(err) }
//     console.log("added provided vampire data", vampires)
//     mongoose.connection.close();
// });
// const myVampires = [
//   {
//     name: 'Fred',
//     title: 'Count',
//     eye_color: 'hazel',
//     dob: new Date(1886, 2, 13, 7, 47),
//     loves: ['hockey', 'capn crunch'],
//     location: 'Denver, CO',
//     gender: 'm',
//     victims: 2
//   },
//    {
//     name: 'George',
//     title: 'Duke',
//     eye_color: 'brown',
//     dob: new Date(1878, 1, 6, 3, 47),
//     loves: ['music', 'gaming'],
//     location: 'Seattle, WA',
//     gender: 'm',
//     victims: 4
//   },
//   {
//     name: 'Thomas',
//     title: 'King',
//     eye_color: 'brown',
//     dob: new Date(1868, 2, 14, 7, 47),
//     loves: ['golf', 'avocado toast'],
//     location: 'Mobile, AL',
//     gender: "f",
//   },
//   {
//     name: 'Thomas2',
//     title: 'Pope',
//     eye_color: 'blue',
//     dob: new Date(1917, 2, 13, 4, 47),
//     loves: ['basketball', 'peanut butter chex'],
//     location: 'Waco, Tx',
//     gender: "f",
//   }
// ]
// Vampire.create(myVampires, (error, Vampire) => {
//     if (error) {
//         console.log(error);
//     } else { // else show us the created tweet
//         console.log(Vampire);
//     }
//     // get control of terminal back
//     // else just use control c
//     db.close();
// });

// Find all the vampires that that are females
// have greater than 500 victims
// have fewer than or equal to 150 victims
// have a victim count is not equal to 210234
// have greater than 150 AND fewer than 500 victims
// Select by exists or does not exist
// Select all the vampires that:

// Vampire.find({victims: {$gte: 500}}, (err, Vampire)=>{
//    console.log(Vampire)
// })

// Vampire.find({victims: {$lte: 150}}, (err, Vampire)=>{
//   console.log(Vampire)
// })

Vampire.find({victims: {$ne: 210234}}, (err, Vampire)=>{
  console.log(Vampire)
})

// Vampire.find({victims: {$gt: 150, $ft:500}}, (err, Vampire)=>{
//     console.log(Vampire)
// })


