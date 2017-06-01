import Todo from '../app/todo';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Todo component renders the todo correctly', () => {
  it('renders correctly', () => {
    const todo = { id: 1, done: false, name: 'Buy Milk' };
    const rendered = renderer.create(
      <Todo todo={todo} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

// test('Todo calls doneChange when todo is clicked', () => {
//   const todo = { id: 1, done: false, name: 'Buy Milk' };
//   const doneChange = jest.fn();
//   const wrapper = mount(
//     <Todo todo={todo} doneChange={doneChange} />
//   );
//   const p = wrapper.find('.toggle-todo');
//   p.simulate('click');
//   expect(doneChange).toBeCalledWith(1)
// });
