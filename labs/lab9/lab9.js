"use strict";

const tm = {

  deleteRows : document.getElementsByName('deleteRow'),

  hours : document.querySelectorAll('input[name ^= "hoursTask"]'),

  init : function() {

    this.centerDeleteRows();
    this.updatehours();

  },

  centerDeleteRows : function() {

    for (const box of this.deleteRows) {

      box.parentNode.classList.add('action');

    }
  },

  updatehours : function() {

    for (const input of this.hours) {

      const row = input.parentNode.parentNode;
      const firstVal = row.firstElementChild.textContent;

      if (firstVal === 'Non-Billable') {

        input.disabled = true;

        const details = row.getElementsByTagName('td')[4];

        if (details.textContent.length > 0) {
          details.appendChild(document.createTextNode('(Non-Billable)'));
        }

        else {
          details.appendChild(document.createTextNode('Non-Billable'));
        }

      }

      else {
      	input.parentNode.appendChild(document.createTextNode(' Hours'));
      }
    }
  }
}

tm.init();
