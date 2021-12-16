function checkEmptyString(str) {
    if(str){
    console.log(str.charAt(0));
    }else{
    console.log("This string is empty");
    }
    }
    // Example test, should return a
    checkEmptyString("apple");