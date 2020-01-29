import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const[expand,updateExpand]=useState(false);
  function expandArea(){
    updateExpand(true);
  }

  const [newTitle, updateNewTitle] = useState("");
  const [newContent, updateNewContent] = useState("");
  

  function addTitle(event) {
    
    updateNewTitle(event.target.value);
    
  }
  function addContent(event) {
    updateNewContent(event.target.value);
  }
 
  return (
    <div>
      <form class="create-note">
        {expand &&(
          <input
          name="title"
          placeholder="Title"
          onChange={addTitle}
          value={newTitle}
        />
        ) }
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={ expand ? 3 :1}
          onChange={addContent}
          value={newContent}
          onClick= {expandArea}
        />
        <Zoom in={expand}>
        
        <Fab    onClick={ ( )=>{ const newValue = {title: newTitle ,
      content:  newContent };
    props.clickFunction(newValue); 
    updateNewTitle("");
    updateNewContent("");}          }  > 
    <AddIcon />
    </Fab>
    </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
