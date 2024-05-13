import './main.css'

const Calculadora = ({ peso, altura }) => {
    const calculaImc = peso / altura
    const result = calculaImc / altura

    console.log(result);

    if (result <= 18.5 ) {
        return (
            <p className='resultado'>{parseFloat(result).toFixed(2)}. Você está abaixo do peso.</p>
        )
    } else if (result >= 18.6 && result < 24.10) {
        return (
            <p className='resultado'>{parseFloat(result).toFixed(2)}. Você está no peso ideal. Parabéns.</p>
        )
    } else if (result >= 25.0 && result < 29.10 ) {
        return (
            <p className='resultado'>{parseFloat(result).toFixed(2)}. Você está levemente acima do peso.</p>
        )
    }  else if (result >= 30.0 && result < 34.10 ) {
        return (
            <p className='resultado'>{parseFloat(result).toFixed(2)}. Você está com obesidade grau I.</p>
        )
    }  else if (result >= 35.0 && result < 39.10 ) {
        return (
            <p className='resultado'>{parseFloat(result).toFixed(2)}. Você está com obesidade grau II. (Obesidade severa.)</p>
        )
    }  else if (result >= 40) {
        return (
            <p className='resultado'>{parseFloat(result).toFixed(2)}. Você está com obesidade grau III. (Obesidade mórbida.)</p>
        )
    }
}
export default Calculadora;