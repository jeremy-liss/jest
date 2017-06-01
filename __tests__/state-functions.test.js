import { toggleDone, addTodo } from '../app/state-functions'

test('toggleDone completes an incomplete todo', () => {
  const startState = {
    todos: [{ id: 1, done: false, name: 'Buy Milk' }]
  };

  const finState = toggleDone(startState, 1);

  expect(finState.todos).toEqual([
    { id: 1, done: true, name: 'Buy Milk' }
  ]);
});

test('addTodo adds a todo', () => {
  const startState = {
    todos: []
  };

  const todo = 'Walk the dog'

  const finState = addTodo(startState, todo)
  expect(finState.todos.length).toEqual(startState.todos.length+1)
})
