const text_description = document.querySelector('#text_description');

const ExposeDescriptionButton = document.createElement('p');
ExposeDescriptionButton.textContent = 'Expose Description';
ExposeDescriptionButton.id = "ExposeDescriptionButton";
text_description.children[1].insertAdjacentElement('afterend', ExposeDescriptionButton);
document.querySelector("#project_description").id = "project_description_collapsed";

const project_description_collapsed = document.querySelector("#project_description_collapsed")

ExposeDescriptionButton.addEventListener("click", function(){
    project_description_collapsed.id = "project_description";
    ExposeDescriptionButton.style.display = "none";
});