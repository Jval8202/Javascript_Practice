// Simple to do list practice

let form = document.querySelector("#form")
let input = document.querySelector('#task')

// buttons
let submitButton = document.querySelector("#submit");
submitButton.disabled = true

//displayers
let Values_2_display = document.querySelector("#list");

// saved values + array definition
let tasks = JSON.parse(localStorage.getItem("text")) || [];

// Filters
let currentFilter = "all";

// ************************\ LOGIC PART \************************** //

function save(){
    localStorage.setItem("text", JSON.stringify(tasks));
}

function render(){
        
    Values_2_display.innerHTML = "";

    // definition 
    let filteredTasks = [];

    // filter condition so it can display different values. 
    if(currentFilter === "all"){
        filteredTasks = tasks;
    }else if(currentFilter === "active"){
        filteredTasks = tasks.filter(task => !task.done)
    }else if(currentFilter === "completed"){
        filteredTasks = tasks.filter(task => task.done);
    }

    filteredTasks.forEach((item,index)=>{

        //HTML list elements
        //definitions

        let li = document.createElement("li");
        li.textContent = `Task: ${item.tasks} `;;

        let delete_button = document.createElement("button")
        delete_button.textContent = "Delete";

        let done_button = document.createElement("button")
        done_button.textContent = "Done";

        //end of definitions

        delete_button.addEventListener("click",() => {
            tasks.splice(index,1);
            save();
            render();
        });

        done_button.addEventListener("click",() => {
            item.done = !item.done;
            save();
            render()
        })

        if(item.done){
            li.style.textDecoration = "line-through";
        } else {
            li.style.textDecoration = "none";
        }
        
        li.appendChild(done_button)
        li.appendChild(delete_button);

        Values_2_display.appendChild(li);

    });

}

form.addEventListener("submit",(event)=>{

    event.preventDefault();

    let Word = input.value.trim();
    
    if(Word !== ""){

        tasks.push({
        tasks: String(Word),
        done: false
        });

        input.value = "";
        save();
        render()
        
    }
});

document.querySelector("#all").addEventListener("click", () => {

    currentFilter = "all";

    render();

});

document.querySelector("#active").addEventListener("click", () => {

    currentFilter = "active";

    render();

});
document.querySelector("#completed").addEventListener("click", () => {

    currentFilter = "completed";

    render();

});

input.addEventListener("input", (chars) =>{
    if(chars.target.value !== ""){
        submitButton.disabled = false
    }
    else{
        submitButton.disabled = true
    }
})

render()