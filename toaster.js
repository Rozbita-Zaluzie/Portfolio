function openToast() {
    var element = document.getElementById("toaster");

    // based on button dc or email
    try {
        navigator.clipboard.writeText("Rozbita_Zaluzie#2703");
    } catch (error) {}

    element.style.display = "block"
    element.classList.add('copiedToast');

    window.setTimeout(function() {
        element.style.display = "none"
        element.classList.remove('copiedToast');
    }, 6000);
    
    
}