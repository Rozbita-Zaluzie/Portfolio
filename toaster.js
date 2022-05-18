function openToast(clicked_id) {
    var element = document.getElementById("toaster");
    var content = document.getElementById("toasterContent");
    
    // based on button dc or email
    try {
        if (clicked_id == "dc") {
            navigator.clipboard.writeText("Rozbita_Zaluzie#2703");
            content.innerHTML = "Rozbita_Zaluzie#2703"
        } else {
            navigator.clipboard.writeText("restik.nosek@gmail.com");
            content.innerHTML = "restik.nosek@gmail.com"
        }
    } catch (error) {}
   
    // start animation
    element.style.display = "block"
    element.classList.add('copiedToast');


    // end animation
    window.setTimeout(function() {
        element.style.display = "none"
        element.classList.remove('copiedToast');
    }, 6000);
    
    
}