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
var usersdb = db.collection("users")
const form = document.querySelector("#addform")
document.getElementsByClassName("spinner")[0].hidden = true
form.addEventListener("submit", (e) => {
    e.preventDefault()
    var findit = usersdb.where("username", "==", document.getElementById("username").value).get()
    findit.then(querySnapshot => {
        if (!querySnapshot.empty) {
            alert("username is used!")
        } else {
            usersdb.add({
                username: form.username.value,
                password: form.password.value
            })
            form.hidden = true;
            document.getElementsByClassName("spinner")[0].hidden = false
            setTimeout(() => {
                window.location.href = "/";
            }, 400)
        }
    });
})