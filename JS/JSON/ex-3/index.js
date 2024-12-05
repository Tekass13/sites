
let data = {
    firstName : "Harry",
    lastName : "Bow",
    motto : "C'est beau la vie !"
};

let str = "{\&quot;firstName\&quot;:\&quot;Colonel\&quot;,\&quot;lastName\&quot;:\&quot;Sanders\&quot;,\&quot;motto\&quot;:\&quot;Il est bon mon poulet\&quot;}";

document.addEventListener("DOMContentLoaded", function(){
    let dataString = JSON.stringify(data);
    console.log(dataString);

    let cleanedStr = str.replace(/&quot;/g, '"');
    let obj = JSON.parse(cleanedStr);

    console.log(obj);
});
