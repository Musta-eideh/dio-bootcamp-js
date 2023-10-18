const forms = document.querySelector('#forms');
const resultado = document.querySelector('#resultadoHeroi');

forms.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.querySelector('#nome');
    const xp = parseInt(forms.elements['xp'].value);

    function definirXp(nome, xp) {
        if (xp <= 1000) {
            resultado.innerHTML = `<p>O Herói de nome ${nome} está no nível de Ferro.</p>`;
        } else if (xp >= 1001 && xp <= 2000) {
            resultado.innerHTML = `<p>O Herói de nome ${nome} está no nível de Bronze.</p>`;
        } else if (xp >= 2001 && xp <= 5000) {
            resultado.innerHTML = `<p>O Herói de nome ${nome} está no nível de Prata.</p>`;
        } else if (xp >= 6001 && xp <= 7000) {
            resultado.innerHTML = `<p>O Herói de nome ${nome} está no nível de Ouro.</p>`;
        } else if (xp >= 7001 && xp <= 8000) {
            resultado.innerHTML = `<p>O Herói de nome ${nome} está no nível de Platina.</p>`;
        } else if (xp >= 8001 && xp <= 9000) {
            resultado.innerHTML = `<p>O Herói de nome ${nome} está no nível de Ascendente.</p>`;
        } else if (xp >= 9001 && xp <= 10000) {
            resultado.innerHTML = `<p>O Herói de nome ${nome} está no nível de Imortal.</p>`;
        } else if (xp >= 10001) {
            resultado.innerHTML = `<p>O Herói de nome ${nome} está no nível Radiante.</p>`;
        }
    }

    definirXp(nome.value, xp);

})