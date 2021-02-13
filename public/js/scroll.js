var scrollCounter = true;
window.addEventListener("scroll", function () {
    if (document.body.scrollHeight > 100 && scrollCounter) {
        htmlBar();
        cssBar();
        JavaBar();
        ReactBar();
        xdBar();
        photoBar();
        scrollCounter = false;
    }
     
 });
var i1 = 0;
var i2 = 0;
var i3 = 0;
var i4 = 0;
var i5 = 0;
var i6 = 0;
 function htmlBar() {
   if (i1 == 0) {
     i1 = 1;
     var elem = document.getElementById("htmlBar");
     var width = 10;
     var id = setInterval(frame, 10);
     function frame() {
       if (width >= 85) {
         clearInterval(id);
         i1 = 0;
       } else {
         width++;
         elem.style.width = width + "%";
         elem.innerHTML = width  + "%";
       }
     }
   }
 }
 function cssBar() {
    if (i2 == 0) {
      i2 = 1;
      var elem = document.getElementById("cssBar");
      var width = 10;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 80) {
          clearInterval(id);
          i2 = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
        }
      }
    }
 }
 function JavaBar() {
    if (i3 == 0) {
      i3 = 1;
      var elem = document.getElementById("javaBar");
      var width = 10;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 70) {
          clearInterval(id);
          i3 = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
        }
      }
    }
 }
 function ReactBar() {
    if (i4 == 0) {
      i4 = 1;
      var elem = document.getElementById("reactBar");
      var width = 10;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 70) {
          clearInterval(id);
          i4 = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
        }
      }
    }
 }
 function xdBar() {
    if (i5 == 0) {
      i5 = 1;
      var elem = document.getElementById("xdBar");
      var width = 10;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 75) {
          clearInterval(id);
          i5 = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
        }
      }
    }
 }
 function photoBar() {
    if (i6 == 0) {
      i6 = 1;
      var elem = document.getElementById("photoBar");
      var width = 10;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 75) {
          clearInterval(id);
          i6 = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
        }
      }
    }
  }