window.onload= function() {
console.log("Bienvenue sur le portfolio de Flora TOUPE!");
};
function validerFormilaire() {
const nom =
document.getElementById('nom').value.trim();
const email=document.getElementById('email').value.trim();
const message=document.getElementById('message').value.trim();
if (!nom // !email // !message) {
alert("Merci de remplir tous les champs !");
return false;
}
alert("Merci pour ton message, Flora TOUPE te répondra bientot ");
return true;
}