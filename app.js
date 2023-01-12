const count = document.querySelector('.number');
const btns = document.querySelectorAll('.btn-add-to-cart');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(){
        let = prevProductsCount = +count.textContent;
        count.textContent = prevProductsCount + 1;
    })
}

// Change like state

let likeBtns = document.querySelectorAll('.like')
console.log(likeBtns);

likeBtns.forEach((btn) =>
btn.addEventListener('click', function (e){
    // if(btn.classList.contains('liked')){
    //     btn.classList.remove('liked')
    // }else(btn.classList.add('liked'))
    
    // 2 variation
    // btn.classList.toggle('liked');

    e.target.classList.toggle('liked')
    e.target.style.backgraund = 'red';
})
)

let moreDeteilsBtns = document.querySelectorAll('.btn-more-details');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.btn-close')

moreDeteilsBtns.forEach((item) =>
item.addEventListener('click', openModal));
closeBtn.addEventListener("click", closeModal);

function openModal(){
modal.classList.add("show");
modal.classList.remove('hide');
}

modal.addEventListener ('click', function(e){
    if (e.target === modal) {
        closeModal();
    }
})

function closeModal(){
    modal.classList.remove('show');
    modal.classList.add('hide');
}

// slider

$('.slider-block').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    })