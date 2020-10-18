var firebaseConfig = {
    apiKey: "AIzaSyDQiIe2lO-woUfXfas6nYc_WFZrPAdX6vw",
    authDomain: "fund-662cf.firebaseapp.com",
    databaseURL: "https://fund-662cf.firebaseio.com",
    projectId: "fund-662cf",
    storageBucket: "fund-662cf.appspot.com",
    messagingSenderId: "159155807852",
    appId: "1:159155807852:web:0a6c1ab9c235814c401a49",
    measurementId: "G-E4RHCLCLVX"
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
        setTimeout(() => {
            window.location.href = "/";
        }, 400)
    })
    cel3.appendChild(delbtn)
}

// var btn = document.getElementById("click")
// btn.onclick = () => {
//     var findit = usersdb.where("username", "==", document.getElementById("id").value).get()
//     findit.then(querySnapshot => {
//         if (querySnapshot.empty) {
//             console.log('No documents found.');
//         }
//     });
// findit.then((query) => {
//     console.log(query.QueryDocumentSnapshot.data())
//     query.forEach(data => {
//         console.log(data.getData())
//     })
// })
// }