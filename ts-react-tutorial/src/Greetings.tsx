import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; // 특정함수를 props 로 받아오는 경우
};

const Greetings = ({ name, mark, optional, onClick }: GreetingsProps) => {
  const handleClick = () => onClick(name);
  return (
    <>
      <div onClick={handleClick}>
        hello, {name} {mark}
        {optional && { optional }}
      </div>
      <button onClick={handleClick}>클릭하기</button>
    </>
  );
};

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;
