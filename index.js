const cal = require("./my-code.js");
const request = require("request-promise");
console.log("Hello World!!!. I am learning");

// Trying to learn implicit retrun
const getData = async function(){
    const json_url = "https://next.json-generator.com/api/json/get/EkRWUPd_q";
    const json = await request({
        url : json_url,
        json : true
    })
    /*return json.map( person => ({
        age : person.age,
        mail : person.email,
        firstName : person.name.first,
        lastName : person.name.last
    }));*/
    return json.map(person => ({
            age : person.age,
            mail : person.email,
            firstName : person.name.first,
            lastName : person.name.last
    }));
};
(async function(){
    try{
        const people = await getData();
        console.log(people);
    } catch(exception){
        console.log("Error Occured" + exception);
    }
})()