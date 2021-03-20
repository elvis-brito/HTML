let data = [{
    id: 1,
    title: "Estudar HTML"
},
{
    id: 2,
    title: "Estudar CSS",
},
{
    id: 3,
    title: "Estudar JavaScript"
},
{
    id: 4,
    title: "Estudar PHP"
}];

function addTask(){
    
    document.querySelector(".todo").innerHTML = "";

    data.forEach(task =>{
        let li = document.createElement("li");
    
        li.innerHTML = `
            <input type="checkbox" id="task-${task.id}"><label for="task-${task.id}">${task.title}</label>
            <button>x</button>
        `;
    
        li.querySelector("input").addEventListener("change", e => {
    
            if (e.target.checked){
                li.classList.add("complete");
            }else{
                li.classList.remove("complete");
            }
    
        });
        
        li.querySelector("button").addEventListener("click", e => {
            
        })
        
        document.querySelector(".todo").append(li);
    })
}

    document.querySelector("#newtask").addEventListener("keyup", e => {
        if(e.key == "Enter"){
            
            data.push({
                id: data.length+1,
                title: e.target.value
            })
            e.target.value = "";
            addTask();
        }
    })


addTask();