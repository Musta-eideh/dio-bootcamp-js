const forms = document.querySelector('#forms');
const resultadoRanking = document.querySelector('#resultadoRanking');

forms.addEventListener('submit', function envioDeForms(e) {
    e.preventDefault();

    const victory = parseInt(forms.elements['vitoria'].value);
    const lost = parseInt(forms.elements['derrota'].value);

    let matches = victory + lost;

    function scoreAccount(victory, lost) {
        if(victory <= 10){
            resultadoRanking.innerHTML = `<p>O herói participou de ${matches} partidas e está no nível Ferro.</p>`;
        } else if (victory <= 11 && victory >= 20){
            resultadoRanking.innerHTML = `<p>O herói participou de ${matches} partidas e está no nível Bronze.</p>`;
        } else if (victory <= 21 && victory >= 50){
            resultadoRanking.innerHTML = `<p>O herói participou de ${matches} partidas e está no nível Prata.</p>`;
        } else if (victory <= 51 && victory >= 80){
            resultadoRanking.innerHTML = `<p>O herói participou de ${matches} partidas e está no nível Ouro.</p>`;
        } else if (victory <= 81 && victory >= 90){
            resultadoRanking.innerHTML = `<p>O herói participou de ${matches} partidas e está no nível Diamante.</p>`;
        } else if (victory <= 91 && victory >= 100){
            resultadoRanking.innerHTML = `<p>O herói participou de ${matches} partidas e está no nível Lendário.</p>`;
        } else if (victory >= 101){
            resultadoRanking.innerHTML = `<p>O herói participou de ${matches} partidas e está no nível Imortal.</p>`;
        } else if(victory === lost){
            resultadoRanking.innerHTML = `<p>O herói participou de ${matches} partidas e conseguiu impate.</p>`;
        } else if (victory < lost){
            resultadoRanking.innerHTML = `<p>O herói está desclassificado.</p>`;
        } else {
            resultadoRanking.innerHTML = `<p>Não foi possível fazer o cálculo da operação, tente novamente.</p>`
        }
    }

    scoreAccount(victory, lost);

})