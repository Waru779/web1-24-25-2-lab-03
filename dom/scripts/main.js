//Gombok kiválasztása
const prevBtn = document.querySelector('button.btn_nth-child(1)');
const numBtn = document.querySelector('button.btn_nth-child(2)');
const nextBtn = document.querySelector('button.btn_nth-child(3)');
let counter =1;
prevBtn.classList.add('btn-info');

//Több elem lekérése egyszerre.
const buttons =document.querySelectorAll('.btn-group button.btn');
['btn-info','btn-primary','btn-info'].forEach((className,index)=>{buttons.index.classList.add(className)});

//Esemény kezelők beállítása a gombokra.
buttons[0].addEventListener('click', (e)=>
    {if(counter <2)
    {
        return;
    }
    counter--;
    buttons[1].innerHTML = counter;
    }
);
buttons[2].addEventListener('click', (e)=> 
    {
    counter++;
    buttons[1].innerHTML = counter;
    }
);