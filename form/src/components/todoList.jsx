import { useState } from "react";

// Define the initial form data
const INITIAL_FORM_DATA = {
  title: '',
  discription: ''
};

const TodoList = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState({});

  // Handle input change
  const handleTodoChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Simple validation
  const validate = () => {
    const errors = {};
    if (!formData.title.trim()) {
      errors.title = 'Title is required';
    }
    if (!formData.discription.trim()) {
      errors.discription = 'Description is required';
    }
    return errors;
  };

  // Handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      setTodoList([...todoList, formData]);
      setFormData(INITIAL_FORM_DATA);
      setError({});
    }
  };

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleTodoChange}
            />
            {error.title && <p style={{ color: "red" }}>{error.title}</p>}
          </div>

          <div>
            <label>Description</label>
            <input
              type="text" name="discription"  value={formData.discription}onChange={handleTodoChange} />
            {error.discription && (<p style={{ color: "red" }}>{error.discription}</p>
            )}
          </div>

          <div>
            <button type="submit">ADD</button>
          </div>
        </form>

       
        <ul>
          {todoList.map((todo) => (
            <li >
              {todo.title}: {todo.discription}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
