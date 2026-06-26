import { useState } from "react";
import "./Calculadora.css"

Function Calculado() {

    const [qtdBurguer, setQtdBurguer] = useState(0);
    const [qtdRefri, setQtdRefri] = useState(0);

    const precoBurguer = 25.00;
    const precoRefri = 8.00;

    const total = (qtdBurguer * precoBurguer) + (qtdRefri + precoRefri)
}