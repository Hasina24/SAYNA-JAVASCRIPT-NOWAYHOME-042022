var datefin = new Date("05/05/2022 08:00:00").getTime();

function comptearebours() {
    let launchDate = new Date().getTime();
    let difference = datefin - launchDate;

    //Calcul de la différence  entre les deux dates.

    let days = Math.floor(difference / (1000 * 60 * 60 * 24))
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((difference % (1000 * 60)) / 1000)
    let countdown = document.getElementById('countdown');
    countdown.innerHTML
        //Arrêter le compteur à 0.
    if (difference < 0) {
        clearInterval(x);
        countdown.innerHTML = 'Time is out'
    }
}
var setin = setInterval(comptearebours, 1000);



//La page doit être accessible grâce aux boutons des réseaux sociaux(footer+page à propos.)