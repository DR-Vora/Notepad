let title=document.getElementById("title")
let note=document.getElementById("note")
let btn=document.getElementById('btn')
let rightdiv=document.getElementById("rightdiv")

btn.addEventListener('click',(e)=>{
e.preventDefault()
console.log(title.value)
console.log(note.value);
rightdiv.innerHTML+=`<div>
<h2>${title.value}</h2>
<p>${note.value}</p>
<i class='bx bxs-edit bx-flashing bx-sm' ></i>
<i class='bx bx-trash bx-tada bx-sm' ></i>
</div>`;
title.value='';
note.value='';
let dbtns = document.getElementsByClassName('bx-trash')
for(let i=0; i<dbtns.length; i++) {
    dbtns[i].addEventListener('click',() =>{
        dbtns[i].parentElement.style.display="none";
    })
}
let ebtns=document.getElementsByClassName('bxs-edit')
for(let i=0; i<ebtns.length; i++) {
    ebtns[i].addEventListener('click',() =>{
        title.value=ebtns[i].parentElement.childNodes[1].innerText;
    note.value=ebtns[i].parentElement.childNodes[3].innerText;
    ebtns[i].parentElement.style.display="none";
    })
}
})
