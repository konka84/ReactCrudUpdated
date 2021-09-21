import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const initialState = {
    name: "",
    mail: "",
    todo: "",
  };
  
  let [datas, setDatas] = useState([]);
  const [act, setact] = useState(0);
  const [index, setindex] = useState("");
  const [info, setInfo] = useState(initialState);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const key = e.target.name;
    setInfo({ ...info, [key]: inputValue });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (act === 0) {
      datas.push(info);
    } else {
      datas[index] = info;
    }

    setact(0);
    setInfo(initialState);
  };

  const formRemove = (i) => {
    const formRemoveFilter = datas.filter((k, j) => i !== j);
    setDatas(formRemoveFilter);
  };

  const formEdit = (i) => {
    const tempData = datas[i];
    setInfo(tempData);
    setact(1);
    setindex(i);
    
  };

  return (
    <div>
      <form useRef="myForm" className="myForm" onSubmit={formSubmit}>
        <input
          required
          type="text"
          name="name"
          placeholder="Name"
          value={info.name}
          className="formField"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          name="mail"
          placeholder="E-mail"
          className="formField"
          value={info.mail}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          name="todo"
          placeholder="To-Do"
          className="formField"
          value={info.todo}
          onChange={handleChange}
        />
        <button type="submit" className="myButton">
          Submit{" "}
        </button>
      </form>
      <pre>
        {datas.map((data, i) => (
          <div key={data.id} className="myList">
            <div
              style={{
                display: "flex",
                flexFlow: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div class="user">
                <b> User{i + 1}</b>
                <br />
                Name:{data.name}
                <br />
                Email:<a href={"mailto:" + data.mail}> {data.mail}</a>
                <br />
                Task:{data.todo}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "flex-column",
                }}
              >
                <button onClick={() => formEdit(i)} className="myListButton">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>{" "}
                </button>
                <button onClick={() => formRemove(i)} className="myListButton">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </pre>
    </div>
  );
}
