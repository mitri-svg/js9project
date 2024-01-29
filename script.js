let suret;
suret = +prompt('Siz nece km/saat sureti ile surmusunuz?');
let netice;

if(suret > 120) {
    netice = ' 300 AZN cerime alinir';
} else if(suret > 100) {
    netice = ' 100 AZN cerime alinir';
} else if(suret > 80) {
    netice = ' 40 AZN cerime alinir';
} else if(suret > 60) {
    netice = ' 20 AZN cerime alinir';
} else{
    netice = ' cerime goturulmur ';
}

document.getElementById('suret').innerHTML = 'Siz ' + suret + ' km/saat sureti ile surduyuvuze gore sizden ' + netice + ' .'