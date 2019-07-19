document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#pincodeModal").addEventListener('click', function(){
        let postalCode = document.querySelector('#pincodeText').value;

        let postalCodeValue = getPostalCodeValue(postalCode);

        if(postalCode !== '' && !isNaN(postalCode)) {
            document.querySelector('#postal-help').innerHTML = '';
            if(postalCodeValue !== 0) {
                document.querySelector('#pincode_present').classList.add('is-active');
                document.querySelector('#pincode_present #modal-title').innerHTML = 
                    'In Ihrer Nachbarschaft gibt es ca. '+ postalCodeValue + ' Douglas Loyalty Card Nutzer';
            } else {
                document.querySelector('#pincode_absent').classList.add('is-active');
            }
        } else {
            document.querySelector('#postal-help').innerHTML = 'Please enter only numbers';
        }
    });

    document.querySelector('#pincode_present .delete').addEventListener('click', function() {
        document.querySelector('#pincode_present').classList.remove('is-active');
    });

    document.querySelector('#pincode_absent .delete').addEventListener('click', function() {
        document.querySelector('#pincode_absent').classList.remove('is-active');
    });

    document.querySelector('#hero-button').addEventListener('click', function() {
        let formElem = document.querySelector('#registration');
        formElem.scrollIntoView({ block: 'end',  behavior: 'smooth' });
    });

    document.querySelector('#submit').addEventListener('click', function() {
        let name = document.querySelector('#name').value;
        let email = document.querySelector('#email').value;
        let phone = document.querySelector('#phone').value;
        let toc = document.querySelector('#toc').checked;
        let emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

        if(name === '') {
            document.querySelector('#name-help').classList.add('is-danger');
            document.querySelector('#name-help').innerHTML = 'Please enter a name';
        } else if(name !== '') {
            document.querySelector('#name-help').classList.remove('is-danger');
            document.querySelector('#name-help').innerHTML = '';
        } 
        
        if(email === '' || !emailPattern.test(email)) {
            document.querySelector('#email-help').classList.add('is-danger');
            document.querySelector('#email-help').innerHTML = 'Email is invalid';
        } else if(email !== '') {
            document.querySelector('#email-help').classList.remove('is-danger');
            document.querySelector('#email-help').innerHTML = '';
        } 
    
        if(phone === '' || isNaN(phone)) {
            document.querySelector('#phone-help').classList.add('is-danger');
            document.querySelector('#phone-help').innerHTML = 'Phone is invalid';
        } else if(phone !== '') {
            document.querySelector('#phone-help').classList.remove('is-danger');
            document.querySelector('#phone-help').innerHTML = '';
        } 

        if(toc === false) {
            document.querySelector('#toc-help').classList.add('is-danger');
            document.querySelector('#toc-help').innerHTML = 'Please tick the checkbox';
        } else if(email !== '') {
            document.querySelector('#toc-help').classList.remove('is-danger');
            document.querySelector('#toc-help').innerHTML = '';
        } 
    });
});

function getPostalCodeValue(code) {
    for(let i=0;i<codes.length;i++) {
        if(codes[i].pc === code) {
            return codes[i].value;
        }
    }

    return 0;
}
