var btn       = document.getElementById("btn");
var personagem = document.getElementById("personagem");
var bloco     = document.getElementById("bloco");
var counter   = 0;


function pular()
{
    if(personagem.classList == "animar")
    {
        return
    }

    personagem.classList.add("animar");

    setTimeout
    (
        function()
        {

            personagem.classList.remove("animar");

        },300
    );
}


function iniciar()
{
    function verificar() 
    {

        let personagemTop = parseInt(window.getComputedStyle(personagem).getPropertyValue("top"));
        let blockLeft    = parseInt(window.getComputedStyle(bloco).getPropertyValue("left"));

        if(blockLeft < 20 && blockLeft >- 20 && personagemTop >= 130)
        {
            morrer()
        }
        else
        {
            continuar()
        }

    }

    function morrer()
    {
        btn.style.display = "block";
        bloco.classList.remove("animado");
        clearInterval(core);
        //console.log("morto");

        var mp = document.getElementById('maiorpontuacao');

        if(mp.innerHTML < Math.floor(counter/100))
        {
            mp.innerHTML = Math.floor(counter/100);
        }

        alert("Fim de jogo. pontuação: " + Math.floor(counter/100));

        counter = 0;
    }

    function continuar()
    {
        counter++;
        document.getElementById("pontuacao").innerHTML = Math.floor(counter/100);
    }


    if(bloco.classList == "animado")
    {
        return
    }

    bloco.classList.add("animado");

    var core = setInterval(verificar, 10);
}