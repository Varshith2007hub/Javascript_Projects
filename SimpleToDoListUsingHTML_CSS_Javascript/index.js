function check() {
    let value = document.getElementById("input").value.trim();
    
    if (value === "") {
        alert("Enter the input value");
        return;
    }

    let li = document.createElement("div"); 
    let button = document.createElement("button"); 
    li.textContent = value;
    button.textContent = "Remove";
    button.id="remove";
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.padding = "5px";
    li.style.border = "1px solid #ccc";
    li.style.margin = "5px 0";
    li.style.width = "300px";

    button.style.marginLeft = "10px";
    button.style.cursor = "pointer";

    button.onclick = function () {
        li.remove();
    };
    li.appendChild(button);
    document.getElementById("taskList").appendChild(li);
    document.getElementById("input").value = "";
}
