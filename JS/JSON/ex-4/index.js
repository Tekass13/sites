let user = {
    firstName: "Harry",
    lastName: "Bow",
    motto: "C'est beau la vie !"
};

let storageUser = sessionStorage.getItem('user');
let userString = JSON.stringify(user);
document.addEventListener("DOMContentLoaded", function() {
    if (!storageUser) {
        sessionStorage.setItem('user', userString);
    } else {
        let userObject = JSON.parse(storageUser);
        console.log(userObject);
    }
});
