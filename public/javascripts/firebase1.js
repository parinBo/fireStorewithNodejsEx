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
var usersdb = db.collection("users")
const form = document.querySelector("#addform")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    usersdb.add({
        username: form.username.value,
        password: form.password.value
    })
    var spinner = document.createElement("div")
    spinner.setAttribute("class", "spinner-border")
    spinner.setAttribute("style", "width: 3rem; height: 3rem;");
    document.getElementById("submit").disabled = true;
    $("#submit").hide()
    document.getElementById("spinner").appendChild(spinner)


})