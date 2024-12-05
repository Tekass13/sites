document.addEventListener("DOMContentLoaded", function(){
    let name = "Harry Bow";
});

localStorage.setItem("name", "Harry Bow");
sessionStorage.setItem("name", "Harry Bow");

let localName = localStorage.getItem("name");
let sessionName = sessionStorage.getItem("name");

console.log(localName,sessionName);