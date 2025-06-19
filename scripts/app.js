let fruit = {
    name: "Apple",
    color: "Red",
    taste: "Sweet"
}

let name1 = `Name:${fruit.name}`
let color =`Color:${fruit.color}`
let taste = `Taste:${fruit.taste}`
let fnamebyid = document.querySelector('.fruitname');
let fcolorbyid = document.querySelector('.fruitcolor');
let ftastebyid = document.querySelector('.fruittaste');

console.log(fnamebyid);
fnamebyid.innerHTML = name1;
fcolorbyid.innerHTML = color;
ftastebyid.innerHTML = taste;

let numberinput = document.querySelector("#numberInput");
numberinput.addEventListener("input",function(){
    if(numberinput.value<= -10  || numberinput.value >= 10)
    {
        alert("The number should be between -10 and 10");
    }
});
