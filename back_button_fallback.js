const back_button = document.querySelector("#back_button");

back_button.addEventListener("click", function(){
    console.log("Logged");
    history.back();
    window.setTimeout('window.location.replace("https://aiyoxariel.space/");', 500)
});