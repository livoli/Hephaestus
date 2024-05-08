const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} ) 


window.addEventListener("load", () =>{
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    const message = document.createElement("div");
    message.textContent = "Patience is key...";
    message.style.fontSize = "20px";
    message.style.textAlign = "center";
    message.style.lineHeight = loader.offsetHeight + "px";
    loader.appendChild(message);
})

let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');

listVideo.forEach(video =>{
    video.onclick = () =>{
        listVideo.forEach(vid => vid.classList.remove('active'))
        video.classList.add('active');
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[.7].innerHTML;
            title.innerHTML = text;
        };
    };
});