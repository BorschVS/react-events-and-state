import css from 'components/App/App.module.css';
import Counter from 'components/Counter';
import Dropdown from 'components/Dropdown';
import ColorPicker from 'components/ColorPicker';
import ToDoList from 'components/ToDoList';
import colors from 'data/colors.json';

export const App = () => {
  return (
    <>
      <h1 className={css.title}>Component State</h1>
      <Counter initialValue={10} />;
      <Dropdown />
      <ColorPicker options={colors} />
      <ToDoList />
    </>
  );
};
