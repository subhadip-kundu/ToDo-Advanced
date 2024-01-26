import React, { useState } from "react";
import "./Todo.css";
import TodoCards from "./TodoCards";

// Toastfy
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from "./Update";

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
    if (inputs.title === "" || inputs.body === "") {
      toast.error("Title & Body Is Required!");
    }
    else {
      setArray([...array, inputs]);
      setInputs({ title: "", body: "" });
      setShowBodyInput(false);
      toast.success("Your Task Is Added !");
      toast.warning("Your Task Is Not Save ! Please SignUp");
    }
  };

  const del = (id) => {
    const newArray = [...array];
    newArray.splice(id, 1);
    setArray(newArray);
  };

  const dis = (value) => {
    document.getElementById("todo-update").style.display = value;
  };


  return (
    <>
      <div className="todo w-100 ">
        <ToastContainer autoClose={2500} />
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
                  <TodoCards title={item.title} body={item.body} id={index} delid={del} display={dis} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="todo-update" id="todo-update">
        <div className="update-wrapper"><Update  display={dis} /></div>
      </div>
    </>
  );
}

export default Todo;
