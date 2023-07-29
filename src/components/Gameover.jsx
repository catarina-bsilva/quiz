import './GameOver.css'
import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Welldone from '../img/welldone.svg'


const Gameover = () => {

  const [QuizState, Dispatch] = useContext(QuizContext)  
  return (
    <div id='GameOver'>
        <h2>Gameover</h2>
        <p>Pontuação: {QuizState.Score}</p>
        <p>Vocè acertou {QuizState.Score} de {QuizState.Questions.length} perguntas</p>
        <img src={Welldone} alt="Fim do Quiz" />
        <button onClick={() => Dispatch({type:"NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}

export default Gameover