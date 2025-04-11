let selectedvalue="";
    let values=document.querySelectorAll(".num");
    values.forEach(values=>{
        values.addEventListener("click",()=>{
            selectedvalue +=values.value;
            let result=document.getElementById("result").innerHTML=`
            <p>${selectedvalue}</p>`;
        });
    });

    document.getElementById("ac").addEventListener("click",()=>{
        selectedvalue="";
        result.textContent="";

    });

    document.getElementById("del").addEventListener("click",()=>{
        selectedvalue=selectedvalue.slice(0,-1);
        result.textContent=selectedvalue;
    });

    document.getElementById("root").addEventListener("click",()=>{
        let result=Math.sqrt(selectedvalue);
        let root=document.getElementById("result").innerHTML=`
        <p>${result}</p>`;
    })

    document.getElementById("cnt").addEventListener("click", () => {
        let result = Number(selectedvalue).toFixed(2); // Ensure it's a number
        document.getElementById("result").innerHTML = `<p>${result}</p>`;
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            document.getElementById("ans").click();
        }
    });
    


    document.getElementById("ans").addEventListener("click",()=>{
        try {
            const results = eval(selectedvalue); // calculate result
            result.innerHTML = `<p>${results}</p>`;
            selectedvalue = results.toString(); // allow continued calculations
          } catch(e) {
            document.getElementById("result").innerHTML = `<p>Error!</p>`;
            selectedvalue = "";
          }
    });