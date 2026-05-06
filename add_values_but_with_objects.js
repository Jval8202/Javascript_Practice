let form = document.querySelector("#form")
let input = document.querySelector('#number')

// buttons
let submitButton = document.querySelector("#submit");
submitButton.disabled = true

//displayers
let Values_2_display = document.querySelector("#list");

// array
let counters = []

function render(){
        
    Values_2_display.innerHTML = "";

    counters.forEach((item,index)=>{

        //HTML list elements
        //definitions

        let li = document.createElement("li");
        li.textContent = `Value: ${item.value} `;;

        let delete_button = document.createElement("button")
        delete_button.textContent = "Delete";

        let add_button = document.createElement("button")
        add_button.textContent = "+";

        let minus_button = document.createElement("button")
        minus_button.textContent = "-";

        //end of definitions

        delete_button.addEventListener("click",() =>{
            counters.splice(index.value,1);
            render();
        });

        add_button.addEventListener("click",() =>{
            counters[index].value++
            render()
        })

        minus_button.addEventListener("click",() =>{
            if(counters[index].value > 0){
                counters[index].value--;
                render()
            }
        })

        if(counters[index].value === 0){
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

        counters.push({
            value: Number(num)
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