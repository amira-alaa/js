document. querySelector('#add'). onclick =function(){
    if(document.querySelector('#write-task input').value.length==0){
          alert("write the task !!!");
    }
    else{
        document.querySelector('#list').innerHTML += `
            <div class="task" id="task"> 
            <button class="delete">
                 <i class="fas fa-times-square"></i>
            </button>
            <div><button class="check_but" > <input type="checkbox" name="right" id="check" ></button></div>
            <div><p id="taskname">
                ${document.querySelector('#write-task input').value}
            </p></div>  
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        var ele = document.getElementById("task");
        var ele1 = document.getElementById("check");
        var ele2 = document.getElementById("taskname");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
                ele.remove();
                ele1.remove();
                ele2.remove();
            }
        }
        document. querySelector('#clear'). onclick =function(){
            if(document.querySelector('.task').value==0){
                alert("empty !!!!!!!!");
            }
        else{
            var current_tasks = document.querySelectorAll(".task");
                for(var i=0; i<current_tasks.length; i++){
                    current_tasks[i].remove();
                }
            }
        }
        check_but.onclick=function (){
            var tog =document.getElementById("taskname");
            if(tog.style==="none"){
                tog.style="line-through";
            }
            else{
                tog.style="none";
            }
        };
    }
}
