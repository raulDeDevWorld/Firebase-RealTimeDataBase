const firebaseConfig = {

  };
  // Initialize Firebase
  let app= firebase.initializeApp(firebaseConfig);
  let db = app.database().ref('user')
  let form = document.getElementById('form')
  let box = document.getElementById('box')

  form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let nombre = e.target[0].value
    let apellido = e.target[1].value
    let email = e.target[2].value
  
    writeUserData(nombre, apellido, email)
  /**/
  }) 
  
/*-----------------child_...*/
db.on('child_added', function(snapshot){
console.log(snapshot.val())  
    box.innerHTML += `<li>${snapshot.val().email}</li>`;
});

/*-----------------value
db.on('value', function(snapshot){
/*  let obj = snapshot.val()
  for (item in obj){
    console.log(obj[item].email)
  }*//*
snapshot.forEach(function(childSnapshot) {
//console.log(childSnapshot.val().email)
    box.innerHTML += `<li>${childSnapshot.val().email}</li>`;
//console.log(childSnapshot.val())
  });
});*/

//--------------set, push y update
//set sobrescribe

/*
function writeUserData(a, b, c) {
    db.ref('user/'+ c).set({
    nombre:a,
    email:b
  });
}

//push no sobrescribe
function writeUserData(a, b, c) {
    data = db.push()
    data.set({
    nombre:a,
    email:b
  });
}
*/
function writeUserData(a, b, c) {
    data = db.push()
    data.set({
    nombre:a,
    apellido:b,
    email:c
  });
}

//update actualiza datos
/*
function writeNewPost(a) {
  // A post entry.
  let postData = {
    nombre:a
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref('user').child().push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
} 
*/
