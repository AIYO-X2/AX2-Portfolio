const back_button = document.querySelector("#back_button");

back_button.addEventListener("click", function(){
    history.back();
    window.setTimeout('window.location.replace("https://aiyoxariel.space/");', 350)
});