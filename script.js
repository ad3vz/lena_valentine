function yesClicked() {
    document.querySelector('.text').textContent = "Yay! 💕";
    document.querySelector('.buttons').style.display = 'none';

    const container = document.createElement('div');
    container.className = 'polaroid-container';
    document.body.appendChild(container);


    showPolaroid('Bild1.JPG','Sind wir nicht hübsch?', container);
    showPolaroid('Bild2.JPG','Zwei Chayas', container);
    showPolaroid('Bild3.JPG','Wie süß du bist!', container);
    showPolaroid('Bild4.JPG','Das war einfach crazy!!!', container);
}

const no = document.getElementById('no');
const text = document.querySelector('.text');

no.addEventListener('click', () => {
    if (text) text.textContent = 'Try Again!';
    no.disabled = true;
    no.style.display = 'none';
});

function showPolaroid(src, captionText, container){
    const polaroid = document.createElement('div');
    polaroid.className = 'polaroid';

    const img = document.createElement('img');
    img.src = src;
    img.alt = captionText || 'Polaroid';
    polaroid.appendChild(img);

    const caption = document.createElement('div');
    caption.className = 'caption';
    caption.textContent = captionText || '';
    polaroid.appendChild(caption);

    container.appendChild(polaroid);
}