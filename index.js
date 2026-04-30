let form = document.querySelector("#form")
let input = document.querySelector('#number')

// buttons
let submitButton = document.querySelector("#submit");
submitButton.disabled = true

//displayers
let Values_2_display = document.querySelector("#list");

// array
let numbers = []

function render(){
        
    Values_2_display.innerHTML = "";

    numbers.forEach((item,index)=>{

        //HTML list elements
        //definitions

        let li = document.createElement("li");
        li.textContent = `Value: ${item} `;;

        let delete_button = document.createElement("button")
        delete_button.textContent = "Delete";

        let add_button = document.createElement("button")
        add_button.textContent = "+";

        let minus_button = document.createElement("button")
        minus_button.textContent = "-";

        //end of definitions

        delete_button.addEventListener("click",() =>{
            numbers.splice(index,1);
            render();
        });

        add_button.addEventListener("click",() =>{
            numbers[index]++
            render()
        })

        minus_button.addEventListener("click",() =>{
            if(numbers[index] > 0){
                numbers[index]--;
                render()
            }
        })

        if(numbers[index] === 0){
            minus_button.disabled = true;
        }

        li.appendChild(add_button)
        li.appendChild(minus_button)
        li.appendChild(delete_button);

        Values_2_display.appendChild(li);

    });

}

form.addEventListener("submit",(event)=>{

    event.preventDefault();

    let num = input.value.trim();

    if(num !== ""){

        numbers.push(num);

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