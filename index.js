document.addEventListener('DOMContentLoaded', function () {

    // JavaScript code to handle active link
    var currentLocation = window.location.href;
    if (currentLocation.endsWith("doctor.html")) {
        document.getElementById("doctorsLink").classList.add("active");
    } else if (currentLocation.endsWith("index.html")) {
        document.getElementById("patientsLink").classList.add("active");
    }

    // Retrieve data from local storage
    const storedPatientName = localStorage.getItem('patientName');
    const storedPatientAge = localStorage.getItem('patientAge');
    const storedPatientaGender = localStorage.getItem('patientGender');
    const storedPatientPhone = localStorage.getItem('patientPhone');
    const storedPatientMail = localStorage.getItem('patientMail');
    const storedPatientaAffside = localStorage.getItem('patientAffe');
    const storedPatientCondi = localStorage.getItem('patientCond');
    const storedPatientSpeci = localStorage.getItem('patientSpec');
    console.log(storedPatientAge, storedPatientName);
    // Get the elements to update in index.html
    const pnP1 = document.getElementById('pn-p1');
    const pnP2 = document.getElementById('pn-p2');
    const phno = document.getElementById('phone');
    const email = document.getElementById('mail');
    const affsi = document.getElementById('affectedside');
    const cond = document.getElementById('condition');
    const spec = document.getElementById('speciality');
    console.log(pnP1, pnP2, phno, email, affsi, cond, spec);
    // Update the text content of the elements
    if (pnP1 && pnP2 && phno && email && affsi && cond && spec &&
        storedPatientName && storedPatientAge && storedPatientPhone && storedPatientMail &&
        storedPatientCondi && storedPatientaAffside && storedPatientSpeci) {
        pnP1.textContent = `${storedPatientName}, ${storedPatientaGender}/${storedPatientAge}`;
        pnP2.textContent = 'Patient ID: 87 2020072153457';
        phno.textContent = `${storedPatientPhone}`;
        email.textContent = `${storedPatientMail}`;
        affsi.textContent = `${storedPatientaAffside}`;
        cond.textContent = `${storedPatientCondi}`;
        spec.textContent = `${storedPatientSpeci}`;
    }

});
