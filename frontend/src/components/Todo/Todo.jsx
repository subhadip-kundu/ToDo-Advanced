import React, { useState } from "react";
import "./Todo.css";
import TodoCards from "./TodoCards";

function Todo() {
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const [array, setArray] = useState([]);
  const [showBodyInput, setShowBodyInput] = useState(false);

  const flag = () => {
    setShowBodyInput(true);
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submit = () => {
    setArray([...array, inputs]);
    setInputs({ title: "", body: "" });
    setShowBodyInput(false); // Hide the body input after submission
  };

  return (
    <div className="todo w-100 ">
      <div className="todo-main container d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column todo-inputs">
          <input
            onClick={flag}
            onChange={change}
            name="title"
            type="text"
            value={inputs.title}
            placeholder="TITLE"
            className="my-2 border-0  "
          />
          <textarea
            onChange={change}
            name="body"
            style={{ display: showBodyInput ? "block" : "none" }}
            type="text"
            value={inputs.body}
            placeholder="BODY"
            className="my-2 border-0  "
          />
        </div>
        <button id="add-btn" onClick={submit} className="btn btn-warning">
          Add
        </button>
      </div>
      <div className="todo-body">
        <div className="container-fluid mt-5 px-5">
          <div className="row">
            {array.map((item, index) => (
              <div key={index} className="col-lg-3 col-12 my-2">
                <TodoCards title={item.title} body={item.body} id={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
