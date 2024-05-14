import { useState } from "react"

const Calculadora = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const calculaImc = () => {
        const calculo1 = altura * altura;
        const result = peso / calculo1;

    if(result >= 18.5 && result <= 24.9){
        return(
            <>
            <p><b>IMC: {result.toFixed(2)}</b></p>
            <p>Você está no peso ideal. Parabéns.</p>
            </>
            )
        } else if(result < 18.5){
        return(
            <>
            <p><b>IMC: {result.toFixed(2)}</b></p>
            <p> Você está abaixo do peso.</p>
            </>
            )
        } else if(result >= 25 && result <= 29.9){
        return(
            <>
            <p><b>IMC: {result.toFixed(2)}</b></p>
            <p>Você está levemente acima do peso.</p>
            </>
            )
        } else if(result >= 30 && result <= 34.9){
        return(
            <>
            <p><b>IMC: {result.toFixed(2)}</b></p>
            <p>Você está com obesidade grau I.</p>
            </>
            )
        } else if(result >= 35 && result <= 39.9){
        return(
            <>
            <p><b>Seu IMC: {result.toFixed(2)}</b></p>
            <p>Você está com obesidade grau II. (Obesidade severa.)</p>
            </>
            )
        } else if(result >= 40){
        return(
            <>
            <p><b>Seu IMC: {result.toFixed(2)}</b></p>
            <p> Você está com obesidade grau III. (Obesidade mórbida.)</p>
            </>
            )
        } 
    }

    return(
        <div className="container">
            <div className="conteudo">
                <h1 className="title">Calculadora de IMC</h1>
                <p className="placeholder">Digite sua altura (Metros):</p>
                <input type="number" onBlur={e => setAltura(e.target.value)} placeholder="Exemplo: 1.70" />
                <p className="placeholder">Digite seu peso (KGs):</p>
                <input type="number" onBlur={e => setPeso(e.target.value)} placeholder="Exemplo: 69.2" /> <br/>
                {peso !== 0 && altura !== 0 && (calculaImc())}
            </div>
        </div>
    )

}
export default Calculadora;