"use strict";

 document.addEventListener("DOMContentLoaded", function() {

     var editedItem = null;

     var input = document.getElementById('inputValue');

     table.onclick = function (e) {

         var target = e.target;
         if (target.classList.contains('remove')) {

             target.parentNode.parentNode.style.display = 'none';

         } else if (target.classList.contains('edit')) {
             // debugger;


            input.value = target.parentNode.previousElementSibling.textContent;
            editedItem = target.parentNode.previousElementSibling.firstElementChild;
            console.log(target.parentNode.previousElementSibling)
         }
     }

    var goback = document.getElementsByClassName('goback')[0];
    goback.onclick = function () {
        input.value = '';
        editedItem = null;

    };


     var buttonAddRow = document.getElementById("buttonAddRow");
     buttonAddRow.addEventListener("click", function () {

         if(!input.value) return;

         if(editedItem) {
             editedItem.textContent = input.value;
            input.value = '';
            editedItem = null;
         } else {
         var table = document.getElementById("table"),

             newrow = table.insertRow(table.length),
             cell1 = newrow.insertCell(0),
             cell2 = newrow.insertCell(1),
             cell3 = newrow.insertCell(2),

             inputValue = input.value;


         var tagAremove = document.createElement("span");
         tagAremove.innerHTML = "remove";
         tagAremove.classList.add("remove");

         var tagAredit = document.createElement("span");
         tagAredit.innerHTML = "edit";
         tagAredit.classList.add("edit");


             var createdSpan = document.createElement("span");
             createdSpan.textContent = inputValue;

             cell1.appendChild(createdSpan);
         cell2.appendChild(tagAredit);
         cell3.appendChild(tagAremove);

         // reset value in input after adding value to table
         input.value = '';

         }


     });

 })