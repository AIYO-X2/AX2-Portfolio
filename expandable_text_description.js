const expand_description_text = document.querySelector("#expand_description_text")
const project_description_collapsed = document.querySelector("#project_description_collapsed")

expand_description_text.addEventListener("click", function(){
    project_description_collapsed.id = "project_description";
    expand_description_text.style.display = "none";
});