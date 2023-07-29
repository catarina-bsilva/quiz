import { createContext, useReducer } from "react";
import Questions from '../data/Questions'

const STAGES = ["Start", "Playing", "End"]


const InitialState ={
    GameStage: STAGES[0], //index 0de STAGES, ou seja "Start"
    Questions, //recebe as Questions importadas
    CurrentQuestion: 0, //a 1a pergunta é a de index 0
    Score: 0,
    AnswerSelected: false //como ao começar ainda nao está nada seleccionado, é false
}

const QuizReducer = (State, Action) => { //para alterar o estado. (estado inicial, acção feita para alterar o estado)

    //casos que podem alterar o estado inicial:
    switch(Action.type) {
        case "CHANGE_STATE":
            return {
                ...State, //recebe as propriedades iniciais de State
               GameStage: STAGES[1] //altera apenas Stage, mantendo o resto
            }
        
        case "REORDER_QUESTIONS":
            
            const ReorderedQuestions = Questions.sort(() => {
                return Math.random() - 0.5 //embaralha as perguntas
            })

            return {
                ...State,
                Questions: ReorderedQuestions
            }

        case "CHANGE_QUESTION":

            const NextQuestion = State.CurrentQuestion + 1
            let EndGame = false

            if(!Questions[NextQuestion]) {
                EndGame = true
            }

            return{
                ...State,
                CurrentQuestion: NextQuestion,
                GameStage: EndGame ? STAGES[2] : State.GameStage,
                AnswerSelected: false
            }

        case "NEW_GAME":
            return InitialState

        case "CHECK_ANSWER":
            if(State.AnswerSelected) return State

            const answer = Action.payload.answer
            const option = Action.payload.option
            let CorrectAnswer = 0

            if(answer === option) CorrectAnswer = 1
            console.log(CorrectAnswer)
            return {
                ...State,
                Score: State.Score + CorrectAnswer,
                AnswerSelected: option
            }

        default:
            return State
    }


}
export const QuizContext = createContext() //para inicializar o context

//provider, onde vamos usar este context:
export const QuizProvider = ({children}) => { //como envolve vários componentes, usamos children, para encapsular um componente dentro do outro

    //useReducer é usado para alterar os estados da aplicaçao p.e. estado inicial, quando entramos na aplicaçao
    //usa o useReducer que recebe o QuizReducer para alteração de estado e InitialState para padronizar os valores no jogo
    const Value = useReducer(QuizReducer, InitialState)

    return <QuizContext.Provider value={Value}>{children}</QuizContext.Provider>
}