import { getAll, remove } from './db.js';
const table = document.querySelector('table.table');

const generateTable = (tableRows = []) => {
    const keys = Object.keys(tableRows[0]);
    //Thead
    const Thead = document.createElement('thead');
    table.appendChild(Thead);
    const tr = document.createElement('tr');
    Thead.appendChild(tr);
    keys.forEach( key => {
        const th = document.createElement('th');
        tr.appendChild(th);
        th.innerText = key;

});
//Tbody
const Tbody= document.createElement('tbody');
table.appendChild(tbody);
tableRows.forEach(
    row=>{
         const tr = document.createElement('tr');
         tbody.appendChild(tr);
         keys.forEach(key=>{
            
            const td = document.createElement('td');
            td.appendChild(td);
            td.innerText = row[key];

         });
         const td = document.createElement('td');
         tr.appendChild(td);
         const btnGroup  = document.createElement('div');
         td.appendChild(btnGroup);
         btnGroup.classList.add('btn-group');

         const editBtn = document.createElement('button');
         btnGroup.appendChild(editBtn);
         editBtn.classList.add('btn','btn-info');
         editBtn.innerHTML = "<i class='fa fa-pencil'></i>";
         editBtn.addEventListener('click', () => {
            alert(JSON.stringify(row));
         });
         const deleteBtn = document.createElement('button');
         btnGroup.appendChild(deleteBtn);
         deleteBtn.classList.add('btn','btn-danger');
         deleteBtn.innerHTML = "<i class='fa fa-trash'></i>";
         deleteBtn.addEventListener('click', async() => {
            if (confirm('Biztos hogy törlöd az adatsort?')) {
                await remove(row.id);
                tr.parentElement.removeChild(tr);
            }
         });
    });
};

getAll().then( data => generateTable(data) );