const task=document.querySelector('.header input');
const btn=document.querySelector('.header button');
const ul=document.querySelector('section ul');

btn.addEventListener('click',()=>{
    if(task.value===''){
        alert('Empty task')
    }else{
        const li= document.createElement('li');
        li.innerText=task.value;
        const span=document.createElement('span');
        span.innerHTML='\u00d7';
        ul.append(li);
        li.append(span);
    }
    task.value='';
    saveData();
});
ul.addEventListener('click',(e)=>{
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem('data',ul.innerHTML);
}
function showTask(){
    ul.innerHTML=localStorage.getItem('data');
}
showTask();