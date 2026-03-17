import { useState } from "react";
import "./calculadora.css";

export default function Calculadora() {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [resultado, setResultado] = useState("");

  function validarNumeros(num1, num2 = null) {
    if (num1 <= 0 || (num2 !== null && num2 <= 0)) {
      alert("Não são permitidos números 0 ou negativos!");
      return false;
    }
    return true;
  }

  function somar(e) {
    e.preventDefault();
    if (!validarNumeros(n1, n2)) return;
    setResultado(Number(n1) + Number(n2));
  }

  function subtrair(e) {
    e.preventDefault();
    if (!validarNumeros(n1, n2)) return;
    setResultado(Number(n1) - Number(n2));
  }

  function multiplicar(e) {
    e.preventDefault();
    if (!validarNumeros(n1, n2)) return;
    setResultado(Number(n1) * Number(n2));
  }

  function dividir(e) {
    e.preventDefault();
    if (!validarNumeros(n1, n2)) return;
    setResultado(Number(n1) / Number(n2));
  }

  function potencia(e) {
    e.preventDefault();
    if (!validarNumeros(n1, n2)) return;
    setResultado(Number(n1) ** Number(n2));
  }

  function raiz(e) {
    e.preventDefault();
    if (!validarNumeros(n1)) return;
    setResultado(Math.sqrt(Number(n1)));
  }

  function limpar(e) {
    e.preventDefault();
    setN1("");
    setN2("");
    setResultado("");
  }

  return (
    <div className="container">
      <h1>Calculadora</h1>

      <form>
        <input
          type="number"
          placeholder="Número 1"
          value={n1}
          onChange={(e) => setN1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Número 2"
          value={n2}
          onChange={(e) => setN2(e.target.value)}
        />

        <div className="botoes">
          <button onClick={somar}>+</button>
          <button onClick={subtrair}>-</button>
          <button onClick={multiplicar}>×</button>
          <button onClick={dividir}>÷</button>
          <button onClick={potencia}>^</button>
          <button onClick={raiz}>√</button>
          <button onClick={limpar} className="limpar">
            Limpar
          </button>
        </div>

        <h2>Resultado: {resultado}</h2>
      </form>
    </div>
  );
}