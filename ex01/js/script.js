window.addEventListener("DOMContentLoaded", function(){
    function showMsg(){
        alert("Hello World!!");
    }
    //showMsg();

    // funcao declarativa
    function somar(x,y){
        return x + y;
    }
    console.log(somar(10,20));

    // funcao literal
    const s = function somar(x,y){
        return x + y;
    }
    console.log(s(10,30));

    // funcao anonima
    const s2 = function (x,y){
        return x + y;
    }
    console.log(s2(10,40));

    // arrow function
    const s3 = (x,y) => x + y;
    console.log(s3(10,50));

    // exemplo com a primeira função
    const s4 = () => alert("Hello World!!");
    //s4();

    // Arrow function para exibir num alert o valor do parâmetro
    const s5 = texto => alert(texto);
    //s5("AAAA");
    //s5("BBB");

    
    const somaEhPar = (x, y) => alert((x + y) % 2 == 0);
    somaEhPar(30,5);


    //atividade

    var vet = [10,20,30,9];

    vet.forEach(elemento => console.log(elemento));

    // const imprimir = elemento => console.log(elemento);

    // vet.forEach(imprimir);

    // const imprimirVet = vet => {
    //     for(var i=0; i<vet.length; i++)
    //         imprimirVet(vet[i]);
    // }

    //const imprimir = elemento => console.log(elemento);

    //imprimir(vet);

    vet.forEach


    
    



})

