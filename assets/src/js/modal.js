; (function () {
    'use strict';

    alert(`Clique no botão abaixo dos cards\nContém funcionalidade extra && validação dos campos incluindo as checkboxes, feito com carinho ♥`);
    const buttonModal = document.getElementById('button-reserv');
    const buttonModalInside = document.getElementById('x');
    const guaranteeButton = document.querySelectorAll('[data-modal-guarantee]');
    const nameInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const celInput = document.getElementById('cel');
    const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');

    function validateFields() {
        return (
            nameInput.value &&
            emailInput.value &&
            celInput.value &&
            [...checkboxInputs].some((checkbox) => checkbox.checked)
        );
    };

    for (let i = 0; i < guaranteeButton.length; i++) {
        guaranteeButton[i].addEventListener('click', () => {
            let valueDataModalGuarantee = guaranteeButton[i].getAttribute("data-modal-guarantee");
            document.getElementById(valueDataModalGuarantee).classList.toggle("show-modal");
        });
    };

    function eventModalInside() {
        buttonModalInside.addEventListener('click', () => {
            alert(`Realizada a validação dos campos\nClique no botão "Reservar" e veja o que acontece`);
        });
    };
    eventModalInside();



    buttonModal.addEventListener('click', () => {
        if (validateFields()) {
            alert(`Ingresso reservado com sucesso!\nConfira seu e-mail.`);
        } else {
            alert('Por favor, preencha todos os campos obrigatórios e selecione pelo menos um dia da semana.');
        };
    });

})();