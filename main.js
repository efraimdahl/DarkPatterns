
let lab1 = document.getElementById("label-1")
let lab2 = document.getElementById("label-2")
let lab3 = document.getElementById("label-3")
let lab4 = document.getElementById("label-4")

let lables = [lab1,lab2,lab3,lab4]
let lableNames = ["lab1","lab2","lab3","lab4"]
let lockedIn = ""

for(let i = 0;i<lables.length;i++){
    lables[i].addEventListener("click", ()=>{
        if(lables[i].hasAttribute("checked")){
            lables[i].removeAttribute("checked")
        }else{
            lables[i].setAttribute("checked","true")
        }
    })
}
function confirmSelection(){
    console.log("change page")
    if(!lab1.hasAttribute("checked")){
        alert("the striclye necessary cookies need to be enabled to continue to the site")
    }
    else{
        for(let i = 0;i<lables.length;i++){
            console.log(i)
            if(lables[i].hasAttribute("checked")){
                console.log(lableNames[i]+" "+" is checked")
                lockedIn += ("#"+lableNames[i])
            }
        }
        window.location.href = "index.html"+lockedIn+"#c";
        lockedIn = ""
    }
}
btn = document.getElementById("confirm");
if(btn!=null){
btn.addEventListener("click",confirmSelection)
}
