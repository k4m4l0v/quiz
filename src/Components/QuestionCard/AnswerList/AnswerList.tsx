import React from 'react';
import './answerlist.css';

type answerObj = {
  right: string;
  wrong1: string;
  wrong2: string;
  wrong3: string;
}

interface IAnswerListProps {
  onClick: () => void;
  answerList: answerObj;
}

export function AnswerList({onClick, answerList}: IAnswerListProps) {
  const random = () => {
    return Math.floor(Math.random() * (5 - 1) + 1);
  }

  const wrongClick = () => {
    alert('Неправильно!')
  }

  return (
    <ul>
      <li style={{order: random()}}><button onClick={onClick}>{answerList.right}</button></li>
      <li style={{order: random()}}><button onClick={wrongClick}>{answerList.wrong1}</button></li>
      <li style={{order: random()}}><button onClick={wrongClick}>{answerList.wrong2}</button></li>
      <li style={{order: random()}}><button onClick={wrongClick}>{answerList.wrong3}</button></li>
    </ul>
  );
}
