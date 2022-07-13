![a](https://cdn.discordapp.com/attachments/595687430120669242/995440054669410314/Trilha_Especializar_1.png)

---

### Sobre o Repositório:

Fiz esse repositorio com a intenção de demonstrar/documentar o que estou aprendendo no momento, além de que isso me ajuda na fixação do conteudo e vai que fazer me ajuda a conseguir minha primeira vaga.

### Status de Desenvolvimento: Finalizado🔋

---

### Falando um pouco mais sobre repositório

#### ⬇️ Abaixo vou fazer uma lista sobre os conteudos abordados e comentar um pouco sobre meu aprendizado. ⬇️

---
  - Trabalhando com APIs:
    - Gostei muito desse modulo, porque gosto dessa parte do back-end "Integração de APIS" e correlativos. Sem muitas delongas vou citar um pouco do que foi aprendido sobre requisições e rotas.
      - Requisições
        Temos entre os principais tipos de métodos de requisição HTTP:
          - GET: Usado para pegar informações.
          - POST: Adicionar informações.
          - PUT: Atualizar informações.
          - DELETE: remover determinada informação.
          - Certa parte do estudo foi utilizado o axios, o que eu tenho a dizer sobre o axios seria algo como:
            - Adianto de vida, algo que não não vou deixar de usar a menos que realmente seja necessario kkkk.
              - Exemplo **sem axios**:
                - ![Sem axios](https://media.discordapp.net/attachments/996115127306829896/996789820703658024/noaxios.png?width=830&height=468)
              - Exemplo **com axios**:
                - ![Com axios](https://media.discordapp.net/attachments/996115127306829896/996789820401647696/axios.png?width=877&height=468)
--- 
  - Fundamentos do ReactJS
    - Sobre o react creio que não tenha muito o que falar, posso dizer que é um fmk que vou começar usar no meu desenvolvimento front-end, pois gostei muito da sua organização e sua melhor escalabilidade.
---
  - Fundamentos do Typescript
    - Gostei demais de usar o TypeScript, sem duvida nenhuma vou tirar um tempo para refatorar meu projetos de JS para TS, o que mais gostei foi a possibilidade de ir codando ja previnindo possiveis  erros e pelo que penso parece permite um maior desempenho/produtividade.
---
  - Github para Times
      - #### Comandos de branches
    - git branch
      - monstra a branch em que o usuario esta.
    - git checkout NOME DA BRANCH
      - usado para se mover entre as brenches.
    - git checkout -b "NOME"
      - usado para criar uma ramificação da branch main.
    - git merge NOME DA BRANCH
      - usado para dar merge nas brenches.
    - git push origin --delete NOME DA BRANCH
      - usado para apagar uma branch.
    - git branch -D "NOME DA BRANCH"
      - usado para apgar determiniado dado.
    - git push origin  NOME DA BRANCH
      - usado para upar arquivos para o repositório online.
    - git fetch
      - usado para baixar todas as atualizações do repositório online para o repositório local.
    - git fetch -p
      - usado para atualizar o local
    -git fetch -a 
      - usado para listar 
    - git pull
      - usado para baixar o conteudo do repositório e fazer alterações de imediato.
---
  - Transition e Animation
    - Transition
      - **transistion-property**
        - é a propriedade css que queremos aplicar a transição.
      - **transition-duration**
        - é o tempo de duração da transição.
      - **Transition timing functions**
        - ease: Início lento, rápido e final lento (este é o padrão)
        - linear: Mesma velocidade do início ao fim
        - easy-in: Início lento
        - easy-out: Final lento
        - easy-in-out: Início e fim lentos
        - cubic-bezier(n,n,n,n): Permite definir seus próprios valores em uma função cubic-bezier.
      - **transition-delay**
        - É uma propriedade CSS que permite atrasar o inicio de uma transição em uma escala de segundos.
    - Animation
      - animation-name 
        - é o nome da animação criada com @keyframes.
      - animation-duration 
        - é o tempo de duração da animação em uma escala de segundos.
      - @keyframe com FROM/TO
        - é onde se passa a animação, existe 2 parametros chamados: **from**,**to**.
          - Exemplo: 
            - ![exemplo:@keyframe](https://cdn.discordapp.com/attachments/996115127306829896/996115205434122290/print_keyframe.png)
      - @keyframe "com PORCENTAGEM"
        - mesma coisa do anterior so mudamos os parametros **from**/**to** para porcentagem.
          - Exemplo: 
            - ![exemplo:@keyframe](https://cdn.discordapp.com/attachments/996115127306829896/996115205186650202/print_keyframe.png)
      - animation-delay 
        - é uma propriedade CSS que permite atrasar o inicio de uma animação em uma escala de segundos
      - animation iteration count.
        - A propriedade animation-iteration-count defini quantas vezes a animação será repetida.
      - animation direction
        - A propriedade animation-direction define a direção que a animação vai funcionar, podendo ser: normal/reverse/alternate/alternate-reverse.
          - normal: começa pela primeira chave do @keyframes e vai ate a última, se o iteration count estiver setado, no momento de repetir, será também da primeira chave do @keyframes ate a ultima
          - reverse: começa pela última chave do @keyframes e vai ate a primeira, se o iteration count estiver setado, no momento de repetir, será também da última chave do @keyframes ate a primeira.
          - alternate: começa pela primeira chave do @keyframes e vai ate a última, se o iteration count estiver setado, no momento de repetir, será da última chave do @keyframes ate a primeira, e na próxima repetição volta a ser da primeira chave para a última e assim por diante alternando.
          - alternate-reverse.: começa pela última chave do @keyframes e vai ate a primeira, se o iteration count estiver setado, no momento de repetir, será da primeira chave do @keyframes ate a última, e na próxima repetição volta a ser da última chave para a primeira e assim por diante alternando.
      - animation timing function
        - ease - Início lento, rápido e final lento (este é o padrão)
        - linear - Mesma velocidade do início ao fim
        - easy-in - Início lento
        - easy-out - Final lento
        - easy-in-out - Início e fim lentos
          - Exemplo:
            - ![exemplo](https://cdn.discordapp.com/attachments/996115127306829896/996175694902083634/GIF_11-07-2022_18-46-02.gif)
          - Codigo
            - ![codigo](https://media.discordapp.net/attachments/996115127306829896/996178772644593755/GIF_11-07-2022_19-18-22.gif)
    
---

  - SQL Avançado
    - Bom  devo dizer que não achei um bicho de 7 cabeças, basta prestar atenção na hora do estudo, porém, tenho que praticar em projetos reais para sentir a real dificuldade, mais ate então esta sendo mais simples do que eu pensava.
    Como não conheço outros bancos de dados  desse gênero ainda não consigo fazer uma comparação entre eles, mas pretendo aprender.

---

  🚀🚀 Toda esse conhecimento foi possivel por causa da **Rocketseat**, tudo baseado no ultimo modulo do **Discover**, com ajuda de ótimos professores:**[🧑‍🚀@Jake Gracielly](https://app.rocketseat.com.br/me/jakeliny-gracielly), [🧑‍🚀@Mayk Brito](https://app.rocketseat.com.br/me/maykbrito), [🧑‍🚀@Rodrigo Gonçalves](https://app.rocketseat.com.br/me/rodrigogoncalves).** 🚀🚀[RocketSeat](https://www.rocketseat.com.br/)🚀🚀
  
---

⚠️⚠️Warning: É a primeira vez que tento fez que tento fazer algo desse gênero, então caso tenha algum erro, que provavelmente deve ter **me desculpem**. Estou sempre aberto a feedbacks ou coisas do tipo kkk, **meu intuito e focar no aprendizado tanto agora quanto quando estiver emprego.**⚠️⚠️