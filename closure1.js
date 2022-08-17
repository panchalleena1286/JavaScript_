function makFun(){
    const name = 'chrome';
    function displayName(){
        console.log(name);
    }
    return displayName;
}
const myFun = makFun();
myFun();