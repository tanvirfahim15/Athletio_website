var config = {
    apiKey: "AIzaSyBLVpWD-rPqM-u0KTzSBpEawCV5phiI9KE",
    authDomain: "athletio-83680.firebaseapp.com",
    databaseURL: "https://athletio-83680.firebaseio.com",
    projectId: "athletio-83680",
    storageBucket: "athletio-83680.appspot.com",
    messagingSenderId: "688464344610"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function (user) {

        if(!user){
            login();
        }
        else{
            app.user=user;
            app();
        }
    }
);

function login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
        prompt: 'select_account'
    });
    firebase.auth().signInWithRedirect(provider);
}


function logout() {
    firebase.auth().signOut().then(function() {
        window.location.replace("./index.html");
    }).catch(function(error) {
        // An error happened.
    });
}