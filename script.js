function changeBg(){
    const images =[
        'url("Images/artis-kancs-55KdFMcKDr0-unsplash.jpg")',
        'url("Images/benjamin-bindewald-TdaC_x13XAI-unsplash.jpg")',
        'url("Images/frans-ruiter-62xqQdCBULk-unsplash.jpg")',
        'url("Images/hennie-stander-QYnStnPRc8I-unsplash.jpg")',
        'url("Images/jonas-koel-nnxWQZTmoxQ-unsplash.jpg")',
        'url("Images/lomig-HHpRh6rNQMo-unsplash.jpg")',
        'url("Images/miguel-angel-diaz-magister-9wW5UUpari0-unsplash.jpg")',



    ]
    const section = document.querySelector('section');
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.backgroundImage = bg;
}
setInterval(changeBg, 1500)