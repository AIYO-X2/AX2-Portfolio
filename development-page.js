const text_description = document.querySelector('#text_description');

const PreviewPageBanner = document.createElement('p');
PreviewPageBanner.textContent = 'This project is in development. Content here is unfinished, often impermanent, and frequently iterated';

PreviewPageBanner.style.backgroundColor = 'orange';
PreviewPageBanner.style.bottom = '0px';
PreviewPageBanner.style.margin= '0';
PreviewPageBanner.style.position = 'fixed';
PreviewPageBanner.style.width = '100vw';
PreviewPageBanner.style.fontFamily = 'Nexa';
PreviewPageBanner.style.color = 'black';
PreviewPageBanner.style.paddingBottom = '2vh';
PreviewPageBanner.style.paddingTop = '2vh';
PreviewPageBanner.style.textAlign = 'center';
PreviewPageBanner.style.margin = 'auto';
PreviewPageBanner.style.zIndex = '3';

text_description.insertAdjacentElement('afterend', PreviewPageBanner);