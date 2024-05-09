import React, { useState } from "react";
import "./Todo.css";
import { addTodo, deleteTodo, removeTodo } from "../action";
import { useSelector, useDispatch } from "react-redux";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.toDoReducer.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="outer">
        <div className="center">
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Enter Item"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />

          <button className="btnAdd">
            <h6 onClick={() => dispatch(addTodo(inputData), setInputData(""))}>
              +
            </h6>
          </button>
          <ol>
            {list.map((ele) => {
              return (
                <li key={ele.id}>
                  <i
                    style={{ marginLeft: "10px", marginRight: "10px" }}
                    className="fa fa-trash icon"
                    aria-hidden="true"
                    onClick={() => dispatch(deleteTodo(ele.id))}
                  ></i>
                  <br />
                  <h4>{ele.data}</h4>
                </li>
              );
            }
            )}
            
            
          </ol>
          <button className="btnRemove" onClick={()=>dispatch(removeTodo())}>Remove All List</button>

        </div>
      </div>
    </>
  );
};

export default Todo;
