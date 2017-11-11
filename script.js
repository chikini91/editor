"use strict";

 document.addEventListener("DOMContentLoaded", function() {

        function deleteRow(r) {
            var i = r.parentNode.parentNode.rowIndex;
            document.getElementById("table").deleteRow(i);
        }


    var buttonAddRow = document.getElementById("buttonAddRow");
    buttonAddRow.addEventListener("click", function () {

        var table = document.getElementById("table"),
            newrow = table.insertRow(table.length),
            cell1 = newrow.insertCell(0),
            cell2 = newrow.insertCell(1),
            cell3 = newrow.insertCell(2),
            inputValue = document.getElementById('inputValue').value;

        var tagAremove = document.createElement("a");
        tagAremove.innerHTML = "remove";

        tagAremove.addEventListener("click", function () {
            cell1.style.display = "none";
            cell2.style.display = "none";
            cell3.style.display = "none";
        });

        var tagAredit = document.createElement("a");
        tagAredit.innerHTML = "edit";


        cell1.innerHTML = inputValue;
        cell2.appendChild(tagAredit);
        cell3.appendChild(tagAremove);


        // reset value in input after adding value to table
        inputValue = document.getElementById('inputValue').value = '';


        function edit() {

            cell2.addEventListener("click", function () {

                document.getElementById('inputValue').value = cell1.innerHTML;

                buttonAddRow.addEventListener("click", function () {
                    cell1.innerHTML = document.getElementById('inputValue').value;
                    cell1.style.display = "none";
                    cell2.style.display = "none";
                    cell3.style.display = "none";

                    });
                })};
        edit();

        });

});