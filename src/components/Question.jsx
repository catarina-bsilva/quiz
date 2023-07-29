import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import './Question.css'
import Option from './Option'

const Question = () => {

const [QuizState, Dispatch] = useContext(QuizContext)
const CurrentQuestion = QuizState.Questions[QuizState.CurrentQuestion]

const OnSelectedOption = (option) => {
    Dispatch({
        type: "CHECK_ANSWER",
        payload: {answer: CurrentQuestion.answer, option} //envia dados para o reducer (context)
    })
}

  return (
    <div id='Question'>
        <p>Pergunta {QuizState.CurrentQuestion + 1} de {QuizState.Questions.length}</p>
        <h2>
            {CurrentQuestion.question //question do ficheiro das perguntas, relativa ao numero de index indicado em CurrentQuestion
            }  
        </h2> 
        <div id="OptionsContainer">
            {CurrentQuestion.options.map((option) => (
                <Option 
                    option={option} 
                    key={option} 
                    answer={CurrentQuestion.answer} 
                    SelectedOption={() => OnSelectedOption(option)} />
            ))}
        </div>
        {QuizState.AnswerSelected && (<button onClick={() => Dispatch({type:"CHANGE_QUESTION"})}>Continuar</button>)}
    </div>
  )
}

export default Question