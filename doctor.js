document.addEventListener('DOMContentLoaded', function () {
    // JavaScript code to handle active link
    var currentLocation = window.location.href;
    if (currentLocation.endsWith("doctor.html")) {
        document.getElementById("doctorsLink").classList.add("active");
    } else if (currentLocation.endsWith("index.html")) {
        document.getElementById("patientsLink").classList.add("active");
    }


    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', function () {
        const patientName = document.getElementById('patient-name').value;
        const patientGender = document.getElementById('patient-gender').value;
        const patientAge = document.getElementById('patient-age').value;
        const patientPhoneno = document.getElementById('patient-phoneno').value;
        const patientMailid = document.getElementById('patient-mailid').value;
        const patientAffectedside = document.getElementById('patient-affectedside').value;
        const patientCondition = document.getElementById('patient-condition').value;
        const patientSpeciality = document.getElementById('patient-speciality').value;
        console.log(patientAge, patientName);
        // Store data in local storage
        localStorage.setItem('patientName', patientName);
        localStorage.setItem('patientGender', patientGender);
        localStorage.setItem('patientAge', patientAge);
        localStorage.setItem('patientPhone', patientPhoneno);
        localStorage.setItem('patientMail', patientMailid);
        localStorage.setItem('patientAffe', patientAffectedside);
        localStorage.setItem('patientCond', patientCondition);
        localStorage.setItem('patientSpec', patientSpeciality);

        alert("Patient Information Updated");
    });

});
