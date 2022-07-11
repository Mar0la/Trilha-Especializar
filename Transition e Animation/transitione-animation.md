## Transition e Animation

---
 ### Transition
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

---

### Animation
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
    ---
      - Exemplo:
        - ![exemplo](https://cdn.discordapp.com/attachments/996115127306829896/996175694902083634/GIF_11-07-2022_18-46-02.gif)
    ---
      - Codigo
        - ![codigo](https://media.discordapp.net/attachments/996115127306829896/996178772644593755/GIF_11-07-2022_19-18-22.gif)
    ---





