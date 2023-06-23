///ambito lexico???


function greetingUserName(){
    let userName = "jpedraza"; //function SCOPE;
    console.log(`Hi, ${userName}`);    
}


greetingUserName();
console.log(userName);


function greetingUserNameJM(userName){
    console.log(`Hi, ${userName}`);
}

greetingUserNameJM('jpedraza');
console.log(userName);


function greetingUserNameVarJM(userName){
    var userNameVar = userName;
    console.log(`Hi, Var ${userNameVar }`);
}

greetingUserNameVarJM("Jpedraza");
console.log(userNameVar);