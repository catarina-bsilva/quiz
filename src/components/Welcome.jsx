import { useContext } from "react"
import { QuizContext } from "../context/quiz" //QuizContext porque é onde "usamos" o contexto


import './Welcome.css'
import Quiz from '../img/quiz.svg'

const Welcome = () => {

  //para activar o useReducer: array com QuizState que recebe os valores do estado e Dispatch que altera os valorez 
  const [QuizState, Dispatch] = useContext(QuizContext)


  return (
    <div id='Welcome'>
        <h2>Seja Bem-Vindo!</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => Dispatch({type:"CHANGE_STATE"})} //ao clicar no botão ativa a dispatch que recebe o tipo change state.
        >Iniciar</button>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  )
}

export default Welcome