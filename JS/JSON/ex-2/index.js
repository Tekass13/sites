function callStorage(name) {
    if (name !== null) {
       sessionStorage.setItem("name", name);
       let sessionName = sessionStorage.getItem("name");
       alert(sessionName);
    }
    else {
        alert(name);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    let name = prompt("Entrez un nom");
    callStorage(name);
});