// function isLoaded() {
//     console.info("DOM loaded");
//   }
  
//   if (document.readyState === "loading") {
    
//     console.log("Loading");
//     document.addEventListener("DOMContentLoaded", isLoaded());
//   } 
//   else {
//     isLoaded();
//   }


const preloader = document.querySelector('#preloader');

preloader.classList.add('show-preloader');

window.addEventListener('load', function () {
	setTimeout(function(){
    	preloader.classList.remove('show-preloader');
	}, 2000);
});