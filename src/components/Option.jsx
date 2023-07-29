import { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import './Option.css'

const Option = ({option, SelectedOption, answer}) => {
    const [QuizState, Dispatch] = useContext(QuizContext)

  return (
    <div className={`Option 
    ${QuizState.AnswerSelected && option===answer ? 'Correct' : ""}
    ${QuizState.AnswerSelected && option!==answer ? 'Wrong' : ""}
    `} 
    onClick={() => SelectedOption()}>
        <p>{option}</p>
    </div>
  )
}

export default Option