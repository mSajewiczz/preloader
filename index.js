function isLoaded() {
    console.info("DOM loaded");
  }
  
  if (document.readyState === "loading") {

    console.log("Loading");
    document.addEventListener("DOMContentLoaded", isLoaded());
    
  } else {
    isLoaded();
  }