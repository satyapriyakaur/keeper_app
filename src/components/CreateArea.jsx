import React, { useState } from "react";

function CreateArea(props) {
  const [newTitle, updateNewTitle] = useState("");
  const [newContent, updateNewContent] = useState("");

  function addTitle(event) {
    
    updateNewTitle(event.target.value);
    //console.log(event.target);
  }
  function addContent(event) {
    updateNewContent(event.target.value);
    //console.log(newContent);
  }
 
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={addTitle}
          value={newTitle}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={addContent}
          value={newContent}
        />
        <button onClick={ ( )=>{ const newValue = {title: newTitle ,
      content:  newContent };
    props.clickFunction(newValue); 
    updateNewTitle("");
    updateNewContent("");}          } type="button" >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
