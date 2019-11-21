import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAjPFEFFPv5ei4dWjP9Sej1zJ8dc3uljOU",
    authDomain: "expensify-f6342.firebaseapp.com",
    databaseURL: "https://expensify-f6342.firebaseio.com",
    projectId: "expensify-f6342",
    storageBucket: "expensify-f6342.appspot.com",
    messagingSenderId: "278011497463",
    appId: "1:278011497463:web:09d965941c2d1d66ecfcf2"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createatedAt: 9761234977864
// });

// // database.ref('notes').push({
// //     title: 'Course topic !',
// //     body: 'This new topic'
// // })

// // const firebaseNotes = {
// //     notes: {
// //         masoq: {
// //              title: 'First note!',
// //              body: 'This is my note'
// //         },
// //         masoqq: {
// //              title: 'First note!',
// //              body: 'This is my note'
// //         }
// //     }
// // };

// // const notes = [{
// //     id: '12',
// //     title: 'First note!',
// //     body: 'This is my note'
// // }, {
// //     id: '761ase',
// //     title: 'Another note',
// //     body: 'This is my note'
// // }]

// // database.ref('notes').set(notes);
// // database.ref('notes/12');

// // ---------------------------------

// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // });

// // setTimeout(() => {
// //     database.ref('age').set(28);
// // }, 3500);

// // database.ref()
// // .once('value')
// // .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// // }).catch((e) => {
// //     console.log('Error fetching data',e);
// // });

// // database.ref().set({
// //     name: 'Nichollas',
// //     age: 21,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software developer',
// //         company: 'Alias'
// //     },
// //     isSingle: false,
// //     location: {
// //         city: 'Curitiba',
// //         country: 'PR'
// //     }
// // }).then(() => {
// //     console.log('Data is saved');
// // }).catch(() => {
// //     console.log('This faildes', e);
// // });


// // UPDATE*
// // database.ref().update({
// //     name: 'Nichollas',
// //     age: 99,
// //     stressLevel: 9,
// //     'location/city': 'Curitiba'
// // });

// // database.ref('age').set(99);
// // database.ref('location/city').set('Praia');

// // SET FROM DATABASE

// // database.ref('atributes').set({
// //     height: 80,
// //     weight: 100,
// // }).then(() => {
// //     console.log('Secont set call Worked');
// // }).catch(() => {
// //     console.log('Things didnt for the second error', e);
// // });

// //database.ref('isSingle').set(null);

// // REMOVE FROM DATABASE

// // database.ref('isSingle')
// //     .remove()
// //     .then(() => {
// //         console.log('Data was removed');
// //     }).catch(() => {
// //         console.log('Did not remove data', e);
// // });
