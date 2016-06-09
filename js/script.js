function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

var button = document.getElementById('dropdown-button');
button.onclick = bodyClick;
var content = document.getElementById('content-dropdown');
var wrapper = document.getElementById("wrapper-dropdown");
var menuDisplayed = false;
var bodyClick = function(event) {
		if(menuDisplayed === false && event.target.id == "dropdown-button") {   
			content.style.zindex = 3;
			content.style.paddingTop = "20px";
      content.style.height = "190px";
	  menuDisplayed = true;
      event.preventDefault();
    }
    else {
    	content.style.zindex = 1;
      content.style.height = "0px";
	  content.style.paddingTop = "0px";
      menuDisplayed = false;
      event.preventDefault();
    }
	};      
	

button.onclick = bodyClick;
wrapper.onclick = bodyClick;