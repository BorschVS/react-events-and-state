import { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIndex: 0,
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionIndex) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  setActiveIndex = index => {
    this.setState({
      activeOptionIndex: index,
    });
  };

  render() {
    // Вычисляемое свойство (пишется именно в render)
    const { activeOptionIndex } = this.state;
    const { options } = this.props;
    const { label, color } = options[activeOptionIndex];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p className="ColorPicker__color" style={{ color: color }}>
          Current Color: {label}
        </p>

        <div className="ColorPicker__container">
          {this.props.options.map(({ label, color }, index) => {
            return (
              <button
                type="button"
                key={label}
                className={this.makeOptionClassName(index)}
                onClick={() => this.setActiveIndex(index)}
                style={{
                  backgroundColor: color,
                }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
