

function addRow() {

    var table = document.getElementById("table"),

        newrow = table.insertRow(table.length),

        cell1 = newrow.insertCell(0),
        cell2 = newrow.insertCell(1),
        cell3 = newrow.insertCell(2),

        inputValue = document.getElementById('inputValue').value;

        var edit = document.createElement("a");
        edit.innerHTML = "remove";

        var remove = document.createElement("a");
        remove.innerHTML = "edit";



    cell1.innerHTML = inputValue;
    cell2.appendChild(remove);
    cell3.appendChild(edit);

}


