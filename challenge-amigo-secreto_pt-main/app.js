//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];
let listaSorteio = [];

        function adicionarAmigo() {
            let input = document.getElementById('amigo');
            let amigo = input.value;

            if (amigo === '') {
                alert('Campo em branco, por favor, digite um nome.');
                return;
            }

            listaAmigos.push(amigo);
            input.value = '';
            atualizarLista();
        }

        function atualizarLista() {
            let ul = document.getElementById('listaAmigos');
            ul.innerHTML = '';

            listaAmigos.forEach(amigo => {
                let li = document.createElement('li');
                li.textContent = amigo;
                ul.appendChild(li);
            });

            listaSorteio = [...listaAmigos]; 
        }

        function sortearAmigo() {
            if (listaSorteio.length === 0) {
                alert("Todos os amigos foram sorteados.");
                reiniciarSorteio();
                return;
            }

            let sorteadoIndex = Math.floor(Math.random() * listaSorteio.length);
            let sorteado = listaSorteio.splice(sorteadoIndex, 1)[0];

            alert(`Amigo sorteado: ${sorteado}`);
        }

        function reiniciarSorteio() {
            listaAmigos.length = 0;
            listaSorteio.length = 0;
            document.getElementById('listaAmigos').innerHTML = '';
            document.getElementById('resultado').innerHTML = '';
            document.getElementById('amigo').value = '';
        }