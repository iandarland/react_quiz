const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/reactquiz', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const userSeed = [
{
  score: 0,
  name:"TEST1"
}
]

db.Score.deleteMany({})
  .then(() => db.Score.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });


//   const activitySeed = [
//     {
//         hostName: 'Fred Flintstone',
//         date: '2021-03-22',
//         location: 'Zilker Park',
//         description: 'Flying kites! BYOK!', 
//         actLat: 30.5664531,
//         actLng: -97.7688115
//     },
//     {
//       hostName: 'Barney Rubble',
//       date: '2021-05-16',
//       location: 'Bouldin Acres',
//       description: 'We here!', 
//       actLat: 30.2482149,
//       actLng: -97.76864479999
//   },
//   {
//     hostName: 'Judy Jetson',
//     date: '2021-06-16',
//     location: 'Greenbelt',
//     description: 'Lets go swimming', 
//     actLat: 30.2558811,
//     actLng: -97.7628877
//   },
//   {
//     hostName: 'Jane Jetson',
//     date: '2021-06-29',
//     location: 'Stubb',
//     description: 'Kids concert!', 
//     actLat: 30.2684972,
//     actLng: -97.73625829999
//   },
//   {
//     hostName: 'Betty Rubble',
//     date: '2021-07-16',
//     location: 'Town Lake',
//     description: 'Walk townlake', 
//     actLat: 30.2476846,
//     actLng: -97.7181049
// },
// {
//   hostName: 'Wilma Flintstone',
//   date: '2021-08-08',
//   location: 'Sour Duck',
//   description: 'Lets go out to eat', 
//   actLat: 30.280047,
//   actLng: -97.7215188
// }
// ]

// db.Activity.deleteMany({})
//   .then(() => db.Activity.collection.insertMany(activitySeed))
//   .then((data) => {
//     console.log(data.result.n + ' records inserted!');
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });