
let getuser = "https://maridoucet.sites.3wa.io/user-api/users";
let url = "https://maridoucet.sites.3wa.io/user-api/create-user";

async function register()
{
    let formData = new FormData();
    formData.append('username', "tek");
    formData.append('firstName', "tekass");
    formData.append('lastName', "palatete");
    formData.append('email', "jaienviedemettreunemailsuperlong@cestunemailbeaucouptroplong.oulala");
    let body = {
        method: 'POST',
        body: formData
    };
    
    let response = await fetch(url, body);
    let data = await response.json();

    console.log("response =", data);
}
// register();

fetch(getuser)
    .then(response => response.json())
    .then(data => console.log("getuser =", data))
    .catch(err => console.error(err));