var listaToday = [];

window.onload = function(){
    loadTodayTasks();
    var addBtn = document.getElementById("addTodayInputBtn");
    addBtn.onclick = function(){
        addTask();
    }
}


function loadTodayTasks(){
    todayTasks = document.getElementById("todayTasks");
    var append = `<ul style="list-style:none;">`;
    if(listaToday.length > 0){

        for(var i = 0; i< listaToday.length; i++){
            var task = listaToday[i]
            append += `<li><input data-id="${i}" onclick="removeTask(this)" type="checkbox"/>${task}</li>`
        }
        append += `</ul>`;
    }else{
        append = `<h3 class="noHayJoven">No hay nada por hacer, a dormir</h3>`
    }
        todayTasks.innerHTML = append;
}

function removeTask(e){
    console.log(e);
    var taskElement = e;
    var id = taskElement.getAttribute('data-id');
    listaToday.splice(id,1);
    loadTodayTasks();
}


function addTask(){
    var addInput = document.getElementById("addTodayInput");
    listaToday.push(addInput.value);
    addInput.value = '';
    loadTodayTasks();
}




