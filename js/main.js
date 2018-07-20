const socialRepFB = document.body.querySelectorAll('.social-link-fb');
const socialRepG = document.body.querySelectorAll('.social-link-g');
const socialRepTW = document.body.querySelectorAll('.social-link-tw');
const socialRepVK = document.body.querySelectorAll('.social-link-vk');
const socialRepY = document.body.querySelectorAll('.social-link-y');


for (let i = 0; i < socialRepFB.length; i++) {
let socialRepsFB = document.createElement('span');

socialRepsFB.innerHTML = '16';

socialRepFB[i].appendChild(socialRepsFB);
}

for (let i = 0; i < socialRepG.length; i++) {
let socialRepsG = document.createElement('span');

socialRepsG.innerHTML = '7';

socialRepG[i].appendChild(socialRepsG);
}

for (let i = 0; i < socialRepTW.length; i++) {
let socialRepsTW = document.createElement('span');
socialRepsTW.className = 'socialRep';
socialRepsTW.innerHTML = '15';
socialRepTW[i].appendChild(socialRepsTW);
}

for (let i = 0; i < socialRepTW.length; i++) {
let socialRepsVK = document.createElement('span');

socialRepsVK.innerHTML = '16';

socialRepVK[i].appendChild(socialRepsVK);
}

for (let i = 0; i < socialRepY.length; i++) {
let socialRepsY = document.createElement('span');

socialRepsY.innerHTML = '1';

socialRepY[i].appendChild(socialRepsY);
}













