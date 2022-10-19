var obj1 = {
    name : "Person 1",
    age  : 5,
};


var obj2 ={
    age  : 5,
    name : "Person 1",
};

const json1 = JSON.stringify(obj1); // JSON.stringify() is used to convert from object into JSON 
const json2 = JSON.stringify(obj2); // JSON.stringify() is used to convert from object into JSON 

if(Object.keys(json1).length === Object.keys(json2).length){
    for(key in json1){
        if(json1[key] == json2[key]){
            output = true;
    }else{
        output = false;
    }

    }
}else{
    output = false;
}

console.log(`The given two JSON are equal which is ${output}`);

