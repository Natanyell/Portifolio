/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContents) => {
            tabContents.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active')
        });

        tab.classList.add('tab__active')
    });
});

/*=============== CONTACT FORM =============== */
const contactForm = document.getElementById("contact-form"),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
    e.preventDefault();

    //verifica se o campo possui valor
    if (contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value === '') {
        // show message 
        errorMessage.textContent = 'Escreva todos os campos de entrada'
    } else {
        //serviceID - templateID - #form - publickey
        emailjs.sendForm('service_modlqtk', 'template_rzyolyt', '#contact-form', 'O7qSaAdpgvxhozSVn').then(() => {
            errorMessage.classList.add('color-first');
            errorMessage.textContent = 'Mensagem enviada ✔️';

            //remove message after 5 seconds
            setTimeout(() => {
                errorMessage.textContent = '';
            }, 5000);
        },
            (error) => {
                alert('Ops! ALGO DEU ERRADO...', error);
            }
        );

        // clear input  fields
        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail)
