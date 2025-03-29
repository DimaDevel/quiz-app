import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  onSkipAnswer,
  selectedAnswer,
  answerState,
}) {
  return (
    <div id="question">
      <QuestionTimer
        timeout={10000}
        onTimeout={onSkipAnswer}
      />
      <p>{questionText}</p>
      {/* When I move this logic in the separate component and add key property
            this component will rerender
         */}
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
