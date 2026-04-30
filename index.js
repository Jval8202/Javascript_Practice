// input values
let form = document.querySelector("#form");
let input = document.querySelector("#item");

//displayers
let Values_2_display = document.querySelector("#list");
//end of displayers
// buttons
let submitButton = document.querySelector("#btn");
submitButton.disabled = true

let DisplayButton = document.querySelector("#display");
DisplayButton.disabled = true

let delete_button = document.createElement("button")
delete_button.textContent = "Delete";
//end of buttons

//HTML list elements
let li = document.createElement("li");

//arrays
let list = []

//timer
let timer;

input.addEventListener("input", (chars) =>{
    if(chars.target.value !== ""){
        submitButton.disabled = false
    }
    else{
        submitButton.disabled = true
    }
})

form.addEventListener("submit", (event) => {

    event.preventDefault(); // stops reload
    let word = input.value
    
    if(word.trim() !== ""){
        list.push(word.trim());
    }

    input.value = "";

    submitButton.disabled = true;
    if(list.length > 0){
        DisplayButton.disabled = false
    }
    else{
        DisplayButton.disabled = true
    }
}); 

DisplayButton.addEventListener("click", () => {

    // Show list
    Values_2_display.style.display = "block";
    // Clear old list
    Values_2_display.innerHTML = "";

    // Loop through stored items
    list.forEach((item, index) =>{

        // Create NEW li
        let li = document.createElement("li");
        li.textContent = item;
        // Create NEW delete button
        let delete_button =
        document.createElement("button");
        delete_button.textContent = "Delete";

        // Delete behavior
        delete_button.addEventListener("click", () => {

            // Remove from array
            list.splice(index, 1);
            // Remove from screen
            li.remove();

        });

        // Attach button to li
        li.appendChild(delete_button);
        // Add li to list
        Values_2_display.appendChild(li);

    });

});


