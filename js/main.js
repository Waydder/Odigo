(function (){
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.scrollY > 100){
            header.classList.add('header_active');
        }
    };
}());
