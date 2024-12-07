const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
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
});

const showModal = document.querySelectorAll('.modal__btn');
const modalWindow = document.querySelector('.modal__window');
const closeModal = document.querySelector('.modal__close');

const showModalFunc = () => {
    showModal.forEach(button => {
        button.addEventListener('click', () => {
            modalWindow.classList.remove('none');
        });
    });

    closeModal.addEventListener('click', () => {
        modalWindow.classList.add('none');
    });

    document.addEventListener('click', (event) => {
        if (!modalWindow.contains(event.target) && !event.target.closest('.modal__btn')) {
            modalWindow.classList.add('none');
        }
    });
};

showModalFunc();


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
        nameError.textContent = ''
    }

    if (phone === '') {
        select.classList.add('error__border');
        phoneError.textContent = 'Invalid phone number';
        hasError = true;
    } else {
        select.classList.remove('error__border');
        phoneError.textContent = ''
    }

    const phonePattern = /^[0-9]{2,3}[ ]?[0-9]{3}[ ]?[0-9]{3,4}$/;
    if (!phone || !phonePattern.test(phone)) {
        phoneInput.classList.add('error__border');
        hasError = true;
    }

    return !hasError;
}

const submitButton = document.querySelector('.submit__btn');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateForm()) {
        modalWindow.classList.add('none')
    }
});
