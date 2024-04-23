import React from 'react';
import './index.scss';


const questions = [
  {
    title: 'Kraków to polskie',
    variants: ['miasto', 'miastą', 'miastę'],
    correct: 0,
  },
  {
    title: 'Ela ma ',
    variants: ['stary kot', ' starego kota', 'co ja wiem kurwa'],
    correct: 1,
  },
  {
    title: 'Andrzej jest z zawodu',
    variants: [
      'lekarzą',
      'lekarz',
      'lekarzem',
    ],
    correct: 2,
  },
  {
    
  }
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({step, question, obClickVar}) {
  const percent = Math.round((step / questions.length) *100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%`}} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index)=>(
          <li onClick={() => obClickVar(index)} key={text}>{text}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const obClickVar = (index) =>{
    setStep(step + 1);
    
    if(index === question.correct){
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      {
         step !== questions.length ? <Game step={step} question={question} obClickVar={obClickVar}/> : (
            <Result correct={correct}/>
         )
      }
    </div>
  );

}

export default App;