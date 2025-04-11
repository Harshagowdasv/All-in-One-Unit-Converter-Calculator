let amountinput=document.getElementById("INRinput");
    let usdamount=document.getElementById("USDinput");
    let ctype=document.getElementById("select2");

    const currencyrates={
        "usd":  { symbol: "$",   rate: 0.011541 },      // US Dollar
        "euro": { symbol: "€",   rate: 0.010454 },      // Euro
        "gbp":  { symbol: "£",   rate: 0.009036 },      // British Pound
        "aud":  { symbol: "A$",  rate: 0.019164 },      // Australian Dollar
        "cad":  { symbol: "C$",  rate: 0.016355 },      // Canadian Dollar
        "sgd":  { symbol: "S$",  rate: 0.015550 },      // Singapore Dollar
        "chf":  { symbol: "Fr.", rate: 0.009717 },      // Swiss Franc
        "myr":  { symbol: "RM",  rate: 0.051898 },      // Malaysian Ringgit
        "jpy":  { symbol: "¥",   rate: 1.672474 },      // Japanese Yen
        "cny":  { symbol: "¥",   rate: 0.086 }          // Chinese Yuan Renminbi (assumed)
    };


    document.getElementById("cnbtn").addEventListener("click",()=>{
        let inrinput=amountinput.value;
        let USDinput=usdamount.value;
        let atype=ctype.value;

        if(inrinput&&!USDinput){
            let currencyt=currencyrates[atype].rate;
            let currencys=currencyrates[atype].symbol;
            let currency=inrinput*currencyt;

            document.getElementById("result").innerHTML=`
            <p>${currency.toFixed(2)}${currencys}</p>`;
            amountinput.value="";
            

        }else if(USDinput && !inrinput){
            let rate=currencyrates[atype].rate;
            let rates=currencyrates[atype].symbol;
            let cur=USDinput/ 0.011541;
            let currency=rate*cur;

            document.getElementById("result").innerHTML=`
            <p>${currency.toFixed(2)}${rates}</p>`;
            usdamount.value="";
            

        }
        else{
            alert("invalid input!");
        }
    
    })