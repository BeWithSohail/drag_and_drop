const listItems = document.querySelectorAll(".list_item");
const leftBox = document.querySelector(".left_pannel");
const rightBox = document.querySelector(".right_pannel");
let selected = null; 

listItems.forEach((list) => {
    list.addEventListener("dragstart", function (e) {
        selected = e.target; // Set selected when the drag starts
        rightBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function (e) {
            e.preventDefault();
            if (selected) {
                rightBox.appendChild(selected);
                selected = null;
            }
        });
    });
});
