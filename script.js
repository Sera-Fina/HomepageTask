let formButton = document.getElementById('formButton');

formButton.addEventListener('click', function (formButton) {
    formButton.preventDefault();

    let userName = document.getElementById('name');
    let userEmail = document.getElementById('email');
    let userSubjects = document.getElementById('subjects');
    let userPhone = document.getElementById('phoneNumber');
    let userNeeds = document.getElementById('servicesNeeded');
    let errLabel = document.getElementById('errLabel');

    if (userName.value !== '' & userEmail.value !== '' & userSubjects.value !== '' & userPhone.value !== '') {
        errLabel.classList.add('errLabel');
        userData = [userName.value, userEmail.value, userSubjects.value, userPhone.value, userNeeds.value];
        console.log(userData);     
    } else {
        errLabel.classList.remove('errLabel');   
        
    };
});
