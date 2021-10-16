

window.onload = function () { 
    var jogador;

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
                input.id = "jogador-"+i;

                div.appendChild(p);
                div.appendChild(input);
            }
            document.querySelector("#jogadores").appendChild(div);
            getStart()
            qtdJogador.innerText="";
        }

        function getStart(){
            var jogadores = document.querySelector("#jogadores > div");
            if(jogadores.childElementCount > 2){
                var inputs = jogadores.childElementCount/2;
                console.log(inputs)
                if(inputs / 2 === 1){
                    for(let i = 0 ; i < inputs; i++){
                        console.log(jogadores.children[i].value)    
                    }
                }
            }else{
                console.log(jogadores.children[1].value)
            }
        }
} 

class Jogador {
    
    constructor(){
        console.log("OK")
    }
};