//const Jogador = require('./jogador.js');

window.onload = function () { 
    console.log(Jogador);
    var qtdJogador = document.querySelector("#numero");

        qtdJogador.addEventListener("keyup", () => { 
            var n = Number(qtdJogador.value);
            quantidadeJogador(n);            
        });

        function quantidadeJogador(x){            
            document.querySelector("#jogadores").innerText ="";
            var div = document.createElement("div");
            for(let i = 1 ; i <= x ; i++){
                var p = document.createElement("p");
                p.innerText = "jogador "+i;
                var input = document.createElement("input");
                input.classList.add("form-control");
                input.id = "jogador-"+1;

                div.appendChild(p);
                div.appendChild(input);
            }
            document.querySelector("#jogadores").appendChild(div);
            qtdJogador.innerText="";
        }
} 