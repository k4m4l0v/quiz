import React from 'react';
import './question.css'

interface IQuestionProps {
  number: number;
  text: string;
}

export function Question({number, text}: IQuestionProps) {
  return (
    <div>
      <h1>Вопрос {number}/4</h1>
      <p>{text}</p>
    </div>
  )
}
