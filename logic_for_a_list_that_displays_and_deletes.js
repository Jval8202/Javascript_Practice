// input values
let form = document.querySelector("#form");
let input = document.querySelector("#item");

//displayers
let Values_2_display = document.querySelector("#list");
//end of displayers

// buttons
let submitButton = document.querySelector("#btn");
submitButton.disabled = true

//arrays
let list = []

//timer
let timer;

//functions
function render(){

    Values_2_display.innerHTML = "";

    list.forEach((item,index)=>{

        //HTML list elements
        let li = document.createElement("li");

        li.textContent = item;

        let delete_button = document.createElement("button")
        delete_button.textContent = "Delete";

        delete_button.addEventListener("click",()=>{

            list.splice(index,1);

            render();

        });

        li.appendChild(delete_button);

        Values_2_display.appendChild(li);

    });

}

input.addEventListener("input", (chars) =>{
    if(chars.target.value !== ""){
        submitButton.disabled = false
    }
    else{
        submitButton.disabled = true
    }
})

form.addEventListener("submit",(event)=>{

    event.preventDefault();

    let word = input.value.trim();

    if(word !== ""){

        list.push(word);

        input.value = "";

        render()
    }

});

form.addEventListener("submit",(event)=>{

    event.preventDefault();

    let word = input.value.trim();

    if(word !== ""){

        list.push(word);

        input.value = "";

        render()
    }

});

