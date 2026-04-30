let list = ["apple", "banana", "orange"];

list.forEach((item, index) => {

    let li = document.createElement("li");

    li.textContent = item;

    let delBtn = document.createElement("button");

    delBtn.textContent = "Delete";

    delBtn.addEventListener("click", () => {

        list.splice(index, 1); // remove from array

        li.remove(); // remove from screen

    });

});

console.log(list);