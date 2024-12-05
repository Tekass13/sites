document.addEventListener('DOMContentLoaded', () => {
    function getAge(number)
    {
        return new Promise((resolve, reject) => {
            if(number >= 18)
            {
                resolve(`Autorisation accordée pour ${number}`);
            }
            else
            {
                reject("Autorisation refusée");
            }
        });
    }

    async function getAges()
    {
        let response1 = await getAge(42);
        console.log(response1);

        let response2 = await getAge(28);
        console.log(response2);

        let response3 = await getAge(37);
        console.log(response3);
    }

    getAges();
});
