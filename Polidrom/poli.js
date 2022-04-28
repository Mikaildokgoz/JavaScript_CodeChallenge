let polidromnumber = document.querySelector("#polidrom");
let perfectnumber = document.querySelector("#perfect");

let perfectarea = document.querySelector("#areaperfect");

let polidromarea = document.querySelector("#areapolidrom");


let polidromButton = document.querySelector(".buttonPolidrom");
let perfectButton = document.querySelector(".buttonPerfect");



polidromButton.addEventListener("click",()=>{
    result=""
    if(polidromnumber.value < 0){
        // alert(false)
        polidromarea.value = "False"
        
    }
    for(var i=polidromnumber.value.length-1;i>=0;i--){
        result += polidromnumber.value[i]
    }
    if(polidromnumber.value==result){
        // alert(false)
        polidromarea.value = "True"
    }
    else{
        polidromarea.value = "False"
    }
});



perfectButton.addEventListener("click",()=>{
    let resultperfect = []
    for (let i = 1; i <= Number(perfectnumber.value); i++) {
        if (Number(perfectnumber.value) % i == 0){
            resultperfect.push(i.toString())
        }};
        console.log(resultperfect);
    let resultEnd = 0
    for (let x = 0; x < resultperfect.length-1; x++){
        resultEnd += Number(resultperfect[x]);
    }
    console.log(resultEnd);
    if (resultEnd == Number(perfectnumber.value)) {
        perfectarea.value = "True"
    }
    else{
        perfectarea.value = "False"
    }});
    