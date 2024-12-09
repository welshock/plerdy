const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-nextt',
        prevEl: '.swiper-button-prevv',
    },
    grabCursor: true,
    slidesPerView: 3.3,
    spaceBetween: 17,
    breakpoints: {
        1000: {
            slidesPerView: 3.3,
        },
        768: {
            slidesPerView: 2.3,
        },
        484: {
            slidesPerView: 2,
        },
        280: {
            slidesPerView: 1.2,
        },
        100: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

// Модальне вікно
const showModalButtons = document.querySelectorAll('.modal__btn');
const modalWindow = document.querySelector('.modal__window');
const closeModalButton = document.querySelector('.modal__close');
const form = document.querySelector('.modal__form');

showModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modalWindow.classList.remove('none');
    });
});

const closeModalFunc = () => {
    modalWindow.classList.add('none');
    form.reset();
};

// Обробник закриття по кнопці
closeModalButton.addEventListener('click', closeModalFunc);

document.addEventListener('click', (event) => {
    if (!modalWindow.contains(event.target) && !event.target.closest('.modal__btn')) {
        closeModalFunc();
    }
});

function validateForm() {
    let hasError = false;

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const select = document.getElementById('select');
    const nameError = document.getElementById('name-error');
    const phoneError = document.getElementById('phone-error');
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name === '') {
        nameInput.classList.add('error__border');
        nameError.textContent = 'Invalid name';
        hasError = true;
    } else {
        nameInput.classList.remove('error__border');
        nameError.textContent = '';
    }

    if (phone === '') {
        select.classList.add('error__border');
        phoneError.textContent = 'Invalid phone number';
        hasError = true;
    } else {
        select.classList.remove('error__border');
        phoneError.textContent = '';
    }

    const phonePattern = /^[0-9]{2,3}[ ]?[0-9]{3}[ ]?[0-9]{3,4}$/;
    if (!phone || !phonePattern.test(phone)) {
        phoneInput.classList.add('error__border');
        phoneError.textContent = 'Invalid phone number format';
        hasError = true;
    } else {
        phoneInput.classList.remove('error__border');
    }

    return !hasError;
}

const submitButton = document.querySelector('.submit__btn');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateForm()) {
        closeModalFunc();
    }
});

// burger menu 
const burgerMenu = document.querySelector('.burger__menu')
const burgerBtn = document.querySelector('.burger__btn')
const navOptions = document.querySelector('.burger__options')
const signBtn = document.querySelector('.burger__reg_sing')
const regBtn =document.querySelector('.burger__reg_btn')

burgerBtn.addEventListener('click', ()=> {
    navOptions.classList.toggle('none')
    signBtn.classList.toggle('none')
    regBtn.classList.toggle('none')
})
burgerBtn.addEventListener('click', ()=> {
    burgerBtn.classList.toggle('active')
})