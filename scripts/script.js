

function maj_theme(){
    if (localStorage.getItem("theme") == null){
        localStorage.setItem("theme", "clair");
        console.log("variable créée");
    }
    else{
        var valeur_theme = localStorage.getItem("theme");
        if (valeur_theme == "sombre"){
            document.getElementById("body").setAttribute("class", "theme_sombre_sans_transition");
            document.getElementById("footer").setAttribute("class", "theme_sombre_footer_sans_transition");
            document.getElementById("checkbox-mode").checked = true;
            
        }
        else if (valeur_theme == "clair"){
            document.getElementById("body").setAttribute("class", "theme_clair_sans_transition");
            document.getElementById("footer").setAttribute("class", "theme_clair_footer_sans_transition");
            document.getElementById("checkbox-mode").checked = false;

        }
    }
}

function selection_theme(){
    var theme = document.getElementById("checkbox-mode").checked;
    
    if (theme == true){
        console.log("Thème foncé");
        document.getElementById("body").setAttribute("class", "theme_sombre");
        document.getElementById("footer").setAttribute("class", "theme_sombre_footer");
        localStorage.setItem("theme", "sombre");
    }
    else{
        console.log("thème clair");
        document.getElementById("body").setAttribute("class", "theme_clair");
        document.getElementById("footer").setAttribute("class", "theme_clair_footer");
        localStorage.setItem("theme", "clair");
    }
}


function age(){
    // Récupérer la date de naissance
    var date_de_naissance = new Date('2003-11-01');

    // Calculer la différence entre la date actuelle et la date de naissance
    var difference_ms = Date.now() - date_de_naissance.getTime();
    var age_dt = new Date(difference_ms);

    // Calculer l'âge en années, en mois et en jours
    var age_annees = Math.abs(age_dt.getUTCFullYear() - 1970);
    var age_mois = age_dt.getMonth();
    var age_jours = age_dt.getUTCDate() - 1;

    // Calculer les heures, les minutes et les secondes
    var age_heures = age_dt.getUTCHours();
    var age_minutes = age_dt.getUTCMinutes();
    var age_secondes = age_dt.getUTCSeconds();

    // Afficher l'âge, le nombre de mois, le nombre de jours, les heures, les minutes et les secondes dans l'élément p
    document.getElementById('age').textContent = age_annees + " ans, " + age_mois + " mois, " + age_jours + " jours, " + age_heures + " heures, " + age_minutes + " minutes et " + age_secondes + " secondes";
}


/*https://waytolearnx.com/2019/09/verifier-la-validite-dun-email-avec-javascript.html*/
function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    var email = document.getElementById("email").value;

    if (!checkEmail(email)) {
        return false;
    }
    else{
        return true;
    }
}



function envoie_email(){

    var parametres = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    if (parametres.name === "" || parametres.email === "" || parametres.message === "" ){
        alert("Veuillez remplir tous les champs.");
    }
    else{
        if (!validate()){
            alert("Veuillez entrer une email valide!");
        }
        else{
            console.log("email valide donc on continue l'envoie");
            const serviceID = "service_c3xcm03";
            const templateID = "template_4hu6e9y";
        
            console.log(parametres, serviceID, templateID);
        
            
            emailjs.send(serviceID, templateID, parametres).then(
                res => {
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("message").value = "";
                    console.log(res);
                    alert("Votre message a bien été envoyé!");
                }
            )
            .catch(err => console.log(err));    
        }
    }
}

