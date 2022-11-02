/* Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
    ```
    Estas são as comidas favoritas de nomeDoUsuario
    - Comida1
    - Comida2
    - Comida3
    ```
    
Você deve usar apenas um `console.log()` para isso
 */
const nomeDoUsuario = prompt("Informe o seu nome.")
const ComidaFav1 = prompt("Digite o nome da sua comida favorita número 1")
const ComidaFav2 = prompt("Digite o nome da sua comida favorita número 2")
const ComidaFav3 = prompt("Digite o nome da sua comida favorita número 3")

console.log(`Estas são as comidas favoritas de ${nomeDoUsuario}: \n${ComidaFav1} \n${ComidaFav2} \n${ComidaFav3}`)