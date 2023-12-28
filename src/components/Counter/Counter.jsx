import React from 'react';

import Controls from './Controls';
import css from './Counter.module.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 10,
  };

  //   constructor() {
  //     super();

  //   Публичное свойство
  //     this.state = {
  //       value: 0,
  //     };
  //   }

  //  Публичное свойство state (состояние компонента)
  state = {
    value: this.props.initialValue,
  };

  //   Публичное свойство класса

  //   Нельзя обновлять состояние по ссылке, для этого есть setState
  handleIncrement = event => {
    console.log('+');

    // event очистится и setTimeout ничего не получит, событие нужно записать в переменную
    // const { target } = event;
    // console.log(event);
    // setTimeout(() => {
    //   console.log(target);
    // }, 1000);

    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    console.log('-');
    // console.log(this);

    // this.setState({
    //   // Такой синтаксис подходит только если нужно записать новое значение не зависящее от предыдущего
    //   value: -1,
    // });

    // Если мы хотим обновить значение в зависимости от предыдущего,
    // нужно использовать функцию в которую передается актуальное состояние state (1 параметром)

    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className={css.counter}>
        <span className={css.counter__value}>{value}</span>
        {/* Нужно выполнить поднятие состояния */}
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
      //   Если рендер становится большим - начинай его бить
    );
  }
}

export default Counter;

// "Негласный" стандарт разметки класса:

// Статика
// Состояние
// Методы
// render(компонент)
