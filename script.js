let addBtn=document.querySelector(".addBtn");
let input=document.querySelector("input");
let notes=document.querySelector(".notes")


addBtn.addEventListener("click",()=>{
    if(input.value==""){
        alert("Enter some note")
    }else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        notes.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML= "&#10006";
        li.appendChild(span);
        savedata()    
    }
    input.value="";
    
})


notes.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata()
    }
}, false);

function savedata(){
    localStorage.setItem("data",notes.innerHTML)
}

function showtask(){
    notes.innerHTML=localStorage.getItem("data");
}
showtask()
