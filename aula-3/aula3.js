
    document.addEventListener('DOMContentLoaded', () => {
        
        // --- Exercício 1 --
        function contar(){
            let textobtnlistener = document.querySelector('#btn-listener');
            textobtnlistener.innerHTML = 'Fui clicado via Listener!';

        }
       
        document.querySelector('button').onclick = contar; // ou '#btn-listener'
        
        
        // --- Exercício 2 ---
        //seguindo exemplo da aula
        const submit = document.querySelector('#btn-add'); // selecionar o botão de adicionar
        const novoItem = document.querySelector('#input-item') //selecionar input
        submit.disabled = true; //por padrão deixa o botão inativo

        // ouvir quando soltamos uma tecla no input e não deixar add itens vazios
        novoItem.onkeyup = () => {
            if(novoItem.value.length > 0){
                submit.disabled = false;

            }else{
                submit.disabled = true;
            }

        }

        //ouvir o envio do formulário 
        document.querySelector('form').onsubmit = () => {
            const tarefa = novoItem.value; 
            const li = document.createElement('li'); // cria o li
            li.innerHTML = tarefa; // coloca a tarefa no li
            //tambem poderia ser direto li.innerHTML = novoItem.value;
            document.querySelector('#lista-itens').append(li); // adiciona o item na lista
            novoItem.value = ' '; // limpa input (e tira o placeholder)
            submit.disabled = true;
            return false; // previne a página de recarregar

        }
 
        // --- Exercício 3 ---
        // Dica: Crie a variável do tempo aqui fora, e o setInterval dentro do listener do botão
        let tempoEmSegundos = 0;
        let IntervalCronometro;
        let pausado = true;
        function cronometro(){
            tempoEmSegundos++;
            document.querySelector('#visor-cronometro').innerHTML = tempoEmSegundos;
        }

        document.querySelector('#btn-iniciar').onclick = () =>{
             IntervalCronometro = setInterval(cronometro,1000); // Roda a cada 1000 ms (1 segundo)

        }

        document.querySelector('#btn-pausar').onclick = () =>{   
                    clearInterval(IntervalCronometro);
        }
        document.querySelector('#btn-zerar').onclick = () => {
            //1- parar o cronometro
                clearInterval(IntervalCronometro);
            //2 - resetar a variavel
                tempoEmSegundos = 0;
            //3 - atualizar o valor na tela
                document.querySelector('#visor-cronometro').innerHTML = tempoEmSegundos;
        }

        
        // --- Exercício 4 ---
        // Seu código aqui (Lembre-se de checar o localStorage logo que a página carregar!)

        let menuTime = document.querySelector('#select-time');
        //checar local storage
        if (!localStorage.getItem('menuTime')) {
            localStorage.setItem('menuTime', 0);
        }else{
            //desafio
            let timeNoLocalStorage = localStorage.getItem('menuTime'); // pega o valor do localStorage
            document.querySelector('#time-selecionado').innerHTML = timeNoLocalStorage; //atualiza o texto da página para o valor do localStorage
        }


        menuTime.onchange = () => {
            let time = menuTime.value; //ou seja o value que menuTime tem qnd uma opção é selecionada
            document.querySelector('#time-selecionado').innerHTML = time; //substitui "Nenhum Selecionado" pelo que foi escolhido
            localStorage.setItem('menuTime', time); // atualiza o localStorage com a nova escolha 
        }

        
         
    });
