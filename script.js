const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    var num1 = document.getElementById('valor1').value;
    var num2 = document.getElementById('valor2').value;
    var operacao = document.getElementById('operacao').value;
    var resultado = null;

    if(num1 == null || num1 == ''){
        alert('Digite o Primeiro Valor');

    } else{
        if(num2 == null || num2 == ''){
            alert('Digite o Segundo Valor');

        } else{
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            switch (operacao) {
                case '1': resultado = num1 + num2;
                break;
                case '2': resultado = num1 - num2;
                break;
                case '3': resultado = num1 * num2;
                break;
                case '4': resultado = num1 / num2;
                break;
            
                default:
                    alert('A operação selecionada é inválida');
                break;    
            }

            document.getElementById('resultado').innerText = resultado;
            document.getElementById('box').classList.add('show');  
        }   
    }
});
