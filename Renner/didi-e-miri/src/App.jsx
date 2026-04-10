import { useState } from 'react'
import './App.css'

export default function App() {

  const CLASSES = [
    { nome: "Roupas", emoji: "👚"},
    { nome: "Sapatos", emoji: "👟"},
    { nome: "Acessórios", emoji: "👓"},
    { nome: "Roupas Intima", emoji: "👙"},
  ];
  //Variaveis useStates
  const [nome, setNome] = useState(""); //texto
  const [hp, setHp] = useState(100); //número
  const [vivo, setVivo] = useState(true); //boolean
  const [classe, setClasse] = useState(CLASSES[0]); //objeto

  const receberDano = () => {
    const novoHp = Math.max(0, hp-1);
    setHp(novoHp);
    setVivo(novoHp > 0);
  }

  const curar = () => {
    setHp(5);
    setVivo(true);
  }

  const pct = hp/5;
  const corBarra = pct > 0.5 ? "#6eca31ff" : pct > 0.3 ? "#fdd701ff" : "#ff4a4aff";
  
  return (
    <>
      <main>
        <section>
          
          <h1>Renner</h1>
          <div className="thumb">
            {vivo ? classe.emoji : "❌"}
          </div>
          <input 
            type="text" 
            className='nome' 
            placeholder='Buscar'
            value={nome}
            onChange={(e) => setNome(e.target.value)}  
          />

          <div className="status">
            <p>Status</p>
            <p>Bem avaliado </p>
            <span>{vivo ? "VIVO" : "Mal avaliado"}</span>
            <span>{vivo ? "true" : "false"}</span>
          </div>

          <p id='pontosVida'>Feedback {hp}/5</p>
          <div className="barra" style={{background: corBarra}}>
          </div>

          <button 
            className='BTcura'
            onClick={receberDano}  
            disabled={!vivo}
          >Negativo</button>
          
          <button 
            className='BTcura'
            onClick={curar} 
          >Positivo</button>
          
          <div className="classes">
            <button onClick={() => setClasse(CLASSES[0])}> 👕Roupas</button>
            <button onClick={() => setClasse(CLASSES[1])}> 👟Sapatos</button>
            <button onClick={() => setClasse(CLASSES[2])}> 👓Acessórios</button>
            <button onClick={() => setClasse(CLASSES[3])}> 👙Roupa intima</button>
          </div>

        </section>
      </main>
    </>
  )
}

