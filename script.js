"use strict";

document.addEventListener("DOMContentLoaded", function() {

    var inputValue = document.getElementById('inputValue').value;


    var buttonAddRow = document.getElementById("buttonAddRow");
     buttonAddRow.addEventListener("click", function () {

         var table = document.getElementById("table"),
             newrow = table.insertRow(table.length),
             cell1 = newrow.insertCell(0),
             cell2 = newrow.insertCell(1),
             cell3 = newrow.insertCell(2),

             inputValue = document.getElementById('inputValue').value;

         var tagAremove = document.createElement("span");
         tagAremove.innerHTML = "remove";

         var tagAredit = document.createElement("span");
         tagAredit.innerHTML = "edit";


         cell1.innerHTML = inputValue;
         cell2.appendChild(tagAredit);
         cell3.appendChild(tagAremove);

         // reset value in input after adding value to table
         inputValue = document.getElementById('inputValue').value = '';

         var rem = document.getElementsByClassName('remove');
         table.onclick = function (e) {

             var target = e.target;
             if (target.classList.contains('remove')) {

                 target.parentNode.parentNode.style.display = 'none';

             } else if (target.classList.contains('edit')) {


                 e.target.innerHTML = inputValue.value;

                 console.log(e.target.innerHTML)


             }
         }


     });
 })

