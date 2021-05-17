import React from "react";
import Radio from "./Form/components/Radio";
import questions from "./Form/Questions";

import './App.css';

export default function App() {
  const [answers, setAnswers] = React.useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
  });

  const [slide, setSlide] = React.useState(0);
  const [result, setResult] = React.useState(null);

  function handleChange({ target }) {
    setAnswers({ ...answers, [target.id]: target.value });
  }

  function quizResult() {
    const correctAnswers = questions.filter(
      ({ id, answer }) => answers[id] === answer
    );
    setResult(`Você acertou ${correctAnswers.length} de ${questions.length}!`);
  }

  function nextQuestion() {
    if (slide < questions.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      quizResult();
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {questions.map((question, index) => (
        <Radio
          active={slide === index}
          key={question.id}
          value={answers[question.id]}
          onChange={handleChange}
          {...question}
        />
      ))}
      {result ? (
        <p style={{ fontFamily: 'Poppins' }}>{result}</p>
      ) : (
        <button onClick={nextQuestion}>Próxima</button>
      )}
    </form>
  );
}