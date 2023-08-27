const text_description = document.querySelector('#text_description');

const PreviewPageBanner = document.createElement('p');
PreviewPageBanner.textContent = 'This page is in preview. Please do not share it until it is publicly published';

PreviewPageBanner.style.backgroundColor = 'red';
PreviewPageBanner.style.bottom = '0px';
PreviewPageBanner.style.margin= '0';
PreviewPageBanner.style.position = 'fixed';
PreviewPageBanner.style.width = '100vw';
PreviewPageBanner.style.fontFamily = 'Futura';
PreviewPageBanner.style.color = 'white';
PreviewPageBanner.style.padding = '2vh';
PreviewPageBanner.style.textAlign = 'center';
PreviewPageBanner.style.zIndex = '2';

PreviewPageBanner.id = "PreviewPageBanner";
text_description.insertAdjacentElement('afterend', PreviewPageBanner);