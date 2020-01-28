import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import data from "./data";

function App() {
  const [list, setList] = useState(data);

  function addItem(newValue) {
    setList(prevValue => {
      return [...prevValue, newValue];
    });
    console.log(list);
  }

  function deleteItem(id) {
    setList(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea clickFunction={addItem} />
      {list.map( (ele,index) => (
        <Note id={index} title={ele.title} content={ele.content} clickDel={deleteItem}>
          {" "}
        </Note>
      ))}

      <Footer />
    </div>
  );
}

export default App;
