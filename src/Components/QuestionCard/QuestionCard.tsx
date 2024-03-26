import React from 'react';
import './questioncard.css';
import { Question } from './Question/Question';
import { AnswerList } from './AnswerList';

const questionList = {
  capitalOfMakedonia: 'Выберите столицу Македонии',
  matrixCode: 'Известный код из Матрицы на самом деле обозначает …',
  longLiveCountry: 'Назовите страну с самой высокой продолжительностью жизни',
  motherOfMakedonsky: 'Как звали маму Македонского?'
}

const answerList = {
  capitalOfMakedonia: {
    right: 'Скопье',
    wrong1: 'Сингапур',
    wrong2: 'Сеул',
    wrong3: 'Йокогама'
  },
  matrixCode: {
    right: 'Рецепт суши',
    wrong1: 'Адрес Киану Ривза',
    wrong2: 'Старая Китайская мудрость',
    wrong3: 'Любимые фильмы режиссёров'
  },
  longLiveCountry: {
    right: 'Китай',
    wrong1: 'Япония',
    wrong2: 'Индия',
    wrong3: 'Дагестан'
  },
  motherOfMakedonsky: {
    right: 'Олимпиада',
    wrong1: 'Аристодама',
    wrong2: 'Дамофила',
    wrong3: 'Клитагора'
  }
}

export function QuestionCard() {
  const [counter, setCounter] = React.useState(1);

  const handleCLick = () => {
    setCounter(counter === 4 ? 1 : counter + 1)
  }

  return (
    <section>
      <div className='question-list-container'>
        {counter === 1 
        ? <Question number={counter} text={questionList.capitalOfMakedonia} /> 
        : counter === 2 
        ? <Question number={counter} text={questionList.matrixCode} />
        : counter === 3
        ? <Question number={counter} text={questionList.longLiveCountry} />
        : counter === 4 
        ? <Question number={counter} text={questionList.motherOfMakedonsky} />
        : <div></div>}
      </div>
      <div className='answer-lis-container'>
      {counter === 1 
        ? <AnswerList onClick={handleCLick} answerList={answerList.capitalOfMakedonia} />
        : counter === 2 
        ? <AnswerList onClick={handleCLick} answerList={answerList.matrixCode} />
        : counter === 3
        ? <AnswerList onClick={handleCLick} answerList={answerList.longLiveCountry} />
        : counter === 4 
        ? <AnswerList onClick={handleCLick} answerList={answerList.motherOfMakedonsky} />
        : <div></div>}
      </div>
    </section>
  );
}
