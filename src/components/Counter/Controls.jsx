import React from 'react';

import css from './Counter.module.css';

// Продолжение композиции компонентов - поднятие состояния
// От родителя к детям кидаются пропсы

// Негласный стандарт названия пропа события (метод) с приставкой "on" (onIncrement)
const Controls = ({ onIncrement, onDecrement }) => {
  return (
    // render сам найдет что изменилось
    <div className={css.counter__controls}>
      <button type="button" onClick={onIncrement} className={css.button}>
        +
      </button>
      <button type="button" onClick={onDecrement} className={css.button}>
        -
      </button>
    </div>
  );
};

// Компонент перерендеривается когда меняется его состояние или приходят новые пропы (например при изменении родителя)

export default Controls;
