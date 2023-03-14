const box=document.querySelectorAll(".box");
var image=document.querySelector(".image");
var image1=document.querySelector(".image1");
box.forEach((box)=>{
    box.addEventListener("dragover",ele=>{
        ele.preventDefault();
box.classList.add("hovered")
    })
    box.addEventListener("dragleave",()=>{
        box.classList.remove("hovered");
    })
    box.addEventListener("drop",()=>{
        box.appendChild(image)
    })
    box.addEventListener("drop",()=>{
        box.appendChild(image1)
    })
})