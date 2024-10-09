/*
const firebaseConfig = {
    apiKey: "AIzaSyBy7h8RIf1eWUPcqqt0Z5D6s-KY9FPltqI",
    authDomain: "tentoclock-ce1b1.firebaseapp.com",
    databaseURL: "https://tentoclock-ce1b1-default-rtdb.firebaseio.com",
    projectId: "tentoclock-ce1b1",
    storageBucket: "tentoclock-ce1b1.appspot.com",
    messagingSenderId: "979571765348",
    appId: "1:979571765348:web:f0f62f54cdaeba211fef71"
};
*/

const firebaseConfig = process.env.FIREBASE_CONFIG;

const app = firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = app.database();

function send_request() {
    alert(process.env.TEST);
    var address = document.getElementById("address").value
    var doorbell = document.getElementById("doorbell").value
    var email = document.getElementById("email").value
    var firstname = document.getElementById("firstname").value
    var floor = document.getElementById("floor").value
    var lastname = document.getElementById("lastname").value
    var phone = document.getElementById("phone").value
    var postcode = document.getElementById("postcode").value
    var regionArea = document.getElementById("regionArea").value
    
    if(address == "" || doorbell == "" || email == "" || firstname == "" || floor == "" || lastname == "" || phone == "" || postcode == "" || regionArea == ""){
        return;
    }

    database.ref('customerCards/' + lastname).set({
        email: email,
        firstname: firstname,
        lastname: lastname,
        regionArea: regionArea
    })

    database.ref('customers/' + lastname).set({
        address: address,
        doorbell: doorbell,
        email: email,
        firstname: firstname,
        floor: floor,
        lastname: lastname,
        phone: phone,
        postcode: postcode,
        regionArea: regionArea
    })


    alert("Submitted");

    
    //window.location.replace = "egguhsh.html";
    //check mail somehow

}