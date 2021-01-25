import React, { FC, useContext } from 'react';
import Context from './Context';
import { onNumClick } from '../reducers/index';

const NumberButton: FC<{ n: number }> = ({ n }) => {
  const { dispatch } = useContext(Context);

  return <button onClick={() => dispatch(onNumClick(n))}>{n}</button>;
};

export default NumberButton;
