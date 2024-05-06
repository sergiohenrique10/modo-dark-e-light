document.addEventListener('DOMContentLoaded', function () {
    let trilho = document.getElementById('trilho');
    let body = document.body;
    let h1 = document.querySelector('h1');
    let indicador = document.querySelector('.indicador');
    let texto = document.querySelector('.texto')
    trilho.addEventListener('click', () => {
        trilho.classList.toggle('dark');
        body.classList.toggle('dark-mode');
        h1.classList.toggle('dark-mode');

        if (trilho.classList.contains('dark')) {
            indicador.style.left = "200px";
            indicador.style.backgroundColor = "#000000";
            body.style.backgroundColor = "#000"; // Cor de fundo no modo escuro
            h1.style.color = "#fff"; // Cor do texto no modo escuro
            h1.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Ícone para modo escuro
            texto.style.color = '#fff'
        } else {
            indicador.style.left = "0";
            indicador.style.backgroundColor = "#ffffff";
            body.style.backgroundColor = "#fff"; // Cor de fundo no modo claro
            h1.style.color = "#000"; // Cor do texto no modo claro
            h1.innerHTML = '<i class="fa-regular fa-sun"></i>'; // Ícone para modo claro
            texto.style.color = '#000'
        }
    });
});







