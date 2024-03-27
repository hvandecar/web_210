"use strict";


  const container = document.querySelector('.container');

  var div = document.createElement('div');
    div.setAttribute('class', 'extraButton');
    container.appendChild(div);

    let btn = document.createElement("button");
      btn.innerHTML = "Dark Theme";
      btn.type = "submit";
      btn.name = "darkBtn";
      btn.setAttribute('class', 'bgButton');
      btn.addEventListener("click", function myFunction() {
        var element = document.body;
          element.classList.toggle("dark-mode");
          btn.innerHTML = "Light Theme";
          document.querySelector("blockquote").style.color = '#fff';
          document.querySelectorAll("footer > a").style.color = '#fff';

        });

    let btn1 = document.createElement("button");
      btn1.innerHTML = "A";
      btn1.type = "submit";
      btn1.name = "Regular Text Size";
      btn1.setAttribute('class', 'littleButton');
      // $(document).ready(function (){
      //     $("#fontPlusBtn").click(function (){
      //         $(".textDiv, .textDiv > *").each( function(index){
      //             $(this).css( {
      //                 "font-size": function(index, value) {
      //                     return parseFloat(value) * 1.1;
      //                     }
      //                   });This is some JQuery I found to try out, my plan was to multiply the text size up
      //                 });
      //               });
      //             });
    let btn2 = document.createElement("button");
      btn2.innerHTML = "A";
      btn2.type = "submit";
      btn2.name = "Larger Text Size";
      btn2.setAttribute('class', 'littleButton');

    let btn3 = document.createElement("button");
      btn3.innerHTML = "A";
      btn3.type = "submit";
      btn3.name = "Largest Text Size";
      btn3.setAttribute('class', 'littleButton');


        div.appendChild(btn);
        div.appendChild(btn1);
        div.appendChild(btn2);
        div.appendChild(btn3);

  // tm.init();



  // init : function(){
  //
  //   btn.addEventListener('click', toggleMode, false);
  // }
  //
  // toggleMode : function(){
  //
  //   if (this.value === 'Dark Theme'){
  //     this.div.className = 'dark-mode';
  //     this.value = 'Light Theme';}
  //
  //   else {
  //     this.div.className = "undefined";
  //     this.value = 'Dark Theme';
  //   }

  // down here I was trying to make a loop so the text doesn't turn only to light mode when pressed, don't know why this wasn't working.
