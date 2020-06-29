let formButton = document.getElementById('formButton');

formButton.addEventListener('click', function (formButton) {
    formButton.preventDefault();

    let userName = document.getElementById('name');
    let userEmail = document.getElementById('email');
    let userSubjects = document.getElementById('subjects');
    let userPhone = document.getElementById('phoneNumber');
    let userNeeds = document.getElementById('servicesNeeded');
    let errLabel = document.getElementById('errLabel');

    if (userName.value !== '' & userEmail.value !== '' & userSubjects.value !== '' & userPhone.value !== '' & userNeeds.value !== '') {
        errLabel.classList.add('errLabel');
        userName.style.background = 'white';
        userEmail.style.background = 'white';
        userSubjects.style.background = 'white';
        userPhone.style.background = 'white';
        userNeeds.style.background = 'white';
        userData = [userName.value, userEmail.value, userSubjects.value, userPhone.value, userNeeds.value];
        console.log(userData);
    } else {
        errLabel.classList.remove('errLabel');
        userName.style.background = 'rgb(255, 77, 77, 0.2)';
        userEmail.style.background = 'rgb(255, 77, 77, 0.2)';
        userSubjects.style.background = 'rgb(255, 77, 77, 0.2)';
        userPhone.style.background = 'rgb(255, 77, 77, 0.2)';
        userNeeds.style.background = 'rgb(255, 77, 77, 0.2)';
    };
});
