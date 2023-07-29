import './App.css'
import Question from './components/Question'
import Welcome from './components/Welcome'
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'
import Gameover from './components/Gameover'

function App() {

  const [QuizState, Dispatch] = useContext(QuizContext)

  useEffect(() => {
    //embaralha as perguntas quando abre a aplicação
    Dispatch({type:"REORDER_QUESTIONS"})
  },[])

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {QuizState.GameStage === "Start" && <Welcome/>}
      {QuizState.GameStage === "Playing" && <Question/> }
      {QuizState.GameStage === "End" && <Gameover/> }
      
    </div>
  )
}

export default App
