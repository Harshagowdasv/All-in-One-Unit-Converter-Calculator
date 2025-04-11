let ltype=document.getElementById("s1");
let length=document.getElementById("length");
let ltypet=document.getElementById("s2");

let wtype=document.getElementById("s3");
let weight=document.getElementById("weight");
let wtypet=document.getElementById("s4");

let ttype=document.getElementById("s5");
let temperature=document.getElementById("temperature");
let ttypet=document.getElementById("s6");

const typevalues={
    "cm": { value:0.01,unit:"cm"},
    "m": { value:1,unit:"m"},
    "km": {value:1000,unit:"km"},
    "g": {value:1,unit:"g"},
    "kg": {value:1000,unit:"kg"},
    "lb": {value:454,unit:"pounds"},
    "Celsius": {value:1,unit:"°C"},
    "Farhrenheit": {value:33.8,unit:"°F"}

};

document.getElementById("lcbtn").addEventListener("click",()=>{
    let from=ltype.value;
    let to=ltypet.value;

    let type=typevalues[from].value;
    let type2=typevalues[to].value;
    let type2s=typevalues[to].unit;
    let input=parseFloat(length.value);

    if(!isNaN(input)){
        let result=(input*type)/type2;
        document.getElementById("rs1").innerHTML=`
        <p>${result}${type2s}</p>`;

    }
});

document.getElementById("wcbtn").addEventListener("click",()=>{
    let from=wtype.value;
    let to=wtypet.value;

    let type=typevalues[from].value;
    let type2=typevalues[to].value;
    let type2s=typevalues[to].unit;
    let input=parseFloat(weight.value);

    if(!isNaN(input)){
        let result=(input*type)/type2;
        document.getElementById("rs2").innerHTML=`
        <p>${result} ${type2s}</p>`;

    }
});

document.getElementById("tcbtn").addEventListener("click",()=>{
    let from=ttype.value;
    let to=ttypet.value;

    let type=typevalues[from].value;
    let type2=typevalues[to].value;
    let type2s=typevalues[to].unit;
    let input=parseFloat(temperature.value);
    let result;

    if(from==="Celsius" && to==="Farhrenheit"){
        result = (input * 9/5) + 32;
        document.getElementById("rs3").innerHTML=`
        <p>${result} ${type2s}</p>`;

    }else if(from==="Farhrenheit" && to==="Celsius"){
        result=(input-32)*5/9;
        document.getElementById("rs3").innerHTML=`
        <p>${result} ${type2s}</p>`;
    }
    else{
        result=input;
        document.getElementById("rs3").innerHTML=`
        <p>${result}</p>`;
    }
});


