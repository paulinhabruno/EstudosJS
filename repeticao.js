window.onload = function()
{
    let objDivSaida = document.getElementById("saida");

    let i=1;
    while(i <=15) {
        objDivSaida.innerHTML += i+"<br>";
        i++;
    }
}