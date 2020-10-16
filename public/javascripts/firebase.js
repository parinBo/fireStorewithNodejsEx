var firebaseConfig = {
    apiKey: "AIzaSyD0pmOFpY1iga1FPXVhJLPBx1U2bAhGcbI",
    authDomain: "my-awesome-ed3bc.firebaseapp.com",
    databaseURL: "https://my-awesome-ed3bc.firebaseio.com",
    projectId: "my-awesome-ed3bc",
    storageBucket: "my-awesome-ed3bc.appspot.com",
    messagingSenderId: "32965048341",
    appId: "1:32965048341:web:432c3462e254e6a642761c",
    measurementId: "G-2YN72KKECF"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const table = document.querySelector("#result")
var usersdb = db.collection("users")
usersdb.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        show(doc)
    });
});

let show = (doc) => {
    var row = table.insertRow(-1);
    var cel1 = row.insertCell(0);
    var cel2 = row.insertCell(1);
    var cel3 = row.insertCell(2);
    cel1.innerHTML = doc.data().username;
    cel2.innerHTML = doc.data().password
    var delbtn = document.createElement("button")
    delbtn.setAttribute("class", "btn btn-danger")
    delbtn.textContent = "Delete"
    delbtn.setAttribute("data-id", doc.id);
    delbtn.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id")
        usersdb.doc(id).delete();
    })
    cel3.appendChild(delbtn)
}

var btn = document.getElementById("click")
btn.onclick = () => {
    var findit = usersdb.where("username", "==", document.getElementById("id").value).get()
    findit.then(querySnapshot => {
        if (querySnapshot.empty) {
            console.log('No documents found.');
        }
    });
    // findit.then((query) => {
    //     console.log(query.QueryDocumentSnapshot.data())
    //     query.forEach(data => {
    //         console.log(data.getData())
    //     })
    // })
}