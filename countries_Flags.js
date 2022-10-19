var request = new XMLHttpRequest(); //create XHR object by using new keyword
request.open("GET","https://restcountries.com/v3.1/all",true); //3 parameters (http methods,api url,true or false (optional) - to handle errors)
request.send();  //sending the request to initiate the connection

request.onload = () =>{
    let countries = JSON.parse(request.response);
    for(let i in countries){
    console.log(`${countries[i].name.common} :`,countries[i].flags);
}
}
