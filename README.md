# BOT BASE
- Esse bot é a base para todos que querem iniciar no projeto já com um sistema modular, usando a livraria do djs-commander. Usando esse BOT, você poderá configurar da melhor forma que você deseja.

### Possiveis bugs:
|                                   Erro                                      |              Correção                     
|                                  :---:                                      |                 :---:                       
| [ERRO]: O TOKEN está inválido! Vá nas configurações e mude o token          | Vá no diretório `./modules/configs/informations_to_bot.json` e mude o token.     
| throw new Error("Used disallowed intents")                                  | Vá no portal do discord developer e ative as intents.

### Instalação:
- Se você não conhece o mundo da programação e não possui nada no seu computador, primeiro recomendo que veja o vídeo [Criando Bot Discord #1 - Introdução [Javascript] Discord.js [PT-BR]](https://www.youtube.com/watch?v=KYnXhtyqQRQ&t) do canal Pedro Ricardo, pelo menos o primeiro vídeo que já te mostrará como configurar sua mesa de trabalho do melhor jeito possível. Se não quiser ver, saiba que você precisará de três coisas:
  
1. Um editor de código (Visual Studio Code ou Sublime text)
2. Instalar node.js (https://nodejs.org/en)
3. Instalar o BOT.
4. Colocar o BOT no grupo. (url_direct: discordapp.com/oauth2/authorize?=&client_id=###&scope=bot&permissions=8 | client_id é o id do seu BOT)
5. Colocar o token (diretório `./modules/configs/informations_to_bot.json` e alterando o "TOKEN")
6. Iniciar o BOT. (escrevendo `node .` no terminal do visual studio ou sublime text)
