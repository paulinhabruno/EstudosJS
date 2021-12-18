
window.onload = function() {
    let objTextNota = document.getElementById("nota");
    let objtDivResultado = document.getElementById("resultado");
    let objtBotao = document.getElementById("botao");
    
    objtBotao.onclick = function() {
       objFloNota = parseFloat(objTextNota.value);

        if (objFloNota >= 6.0) {
            objtDivResultado.innerHTML = "Aluno aprovado.";
            console.log("Aluno aprovado com nota " + objFloNota + ".");
        }
        else{

            if (objFloNota >= 4.0) {
                objtDivResultado.innerHTML = "Aluno em exame.";
                console.log("O aluno está com a nota " + objFloNota + " e deverá fazer o exame.")               
            } 
            else
           {
           objtDivResultado.innerHTML = "Aluno reprovado.";
           console.log("O aluno foi reprovado com nota " + objFloNota + ".")
           }

     }
   }

    let  objTxtSigla = document.getElementById("sigla");
    let objDivResultado2 = document.getElementById("resultado2");
    let objBotao2 = document.getElementById("botao2");

    objBotao2.onclick = function() {
        switch(objTxtSigla.value) {
            case "SP": objDivResultado2.innerHTML = "São Paulo.";
            break;
            case "RJ": objDivResultado2.innerHTML = "Rio de Janeiro.";
            break;
            case "MG": objDivResultado2.innerHTML = "Minas Gerais.";
            break;
            case "ES": objDivResultado2.innerHTML = "Espírito Santo.";
            break;
            default: objDivResultado2.innerHTML = "Não é um estado do Sudeste."; 
        }
    }
}
