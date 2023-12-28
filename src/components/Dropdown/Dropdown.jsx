import { Component } from 'react';
import css from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => {
      return { visible: !prevState.visible };
    });
  };

  // show = () => {
  //   this.setState({
  //     visible: true,
  //   });
  // };

  // hide = () => {
  //   this.setState({ visible: false });
  // };

  render() {
    const { visible } = this.state;
    return (
      <div className={css.Dropdown}>
        <button
          type="button"
          className={css.Dropdown__toggle}
          onClick={this.toggle}
          //   onMouseOver={} // react hover
        >
          {visible ? '▲' : '▼'}
        </button>

        {visible && <div className={css.Dropdown__menu}>Menu</div>}
      </div>
    );
  }
}

export default Dropdown;
