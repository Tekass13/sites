document.addEventListener('DOMContentLoaded', () => {
    function getAge(number)
    {
        return new Promise((resolve, reject) => {
        if(number >= 18)
        {
            resolve("Autorisation accordée.");
        }
        else
        {
            reject("Autorisation refusée");
        }
        });
    }

    getAge(42)
    .then(response => console.log(response))
    .catch(error => console.log(error));

    getAge(16)
    .then(response => console.log(response))
    .catch(error => console.log(error));
});
