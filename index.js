// Simple to do list practice

let form = document.querySelector("#form")
let input = document.querySelector('#task')

// buttons
let submitButton = document.querySelector("#submit");
submitButton.disabled = true

//displayers
let Values_2_display = document.querySelector("#list");

// array
let text = []

// ************************\ LOGIC PART \************************** //

function render(){
        
    Values_2_display.innerHTML = "";

    text.forEach((item,index)=>{

        //HTML list elements
        //definitions

        let li = document.createElement("li");
        li.textContent = `Task: ${item.text} `;;

        let delete_button = document.createElement("button")
        delete_button.textContent = "Delete";

        let done_button = document.createElement("button")
        done_button.textContent = "Done";

        //end of definitions

        delete_button.addEventListener("click",() => {
            text.splice(index,1);
            render();
        });

        done_button.addEventListener("click",() => {
            item.done = !item.done;
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

        text.push({
        text: String(Word),
        done: false
        });

        input.value = "";
        render()
        
    }
});

input.addEventListener("input", (chars) =>{
    if(chars.target.value !== ""){
        submitButton.disabled = false
    }
    else{
        submitButton.disabled = true
    }
})