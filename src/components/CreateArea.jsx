import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const[expand,updateExpand]=useState(false);
  const [newTitle, updateNewTitle] = useState("");
  const [newContent, updateNewContent] = useState("");
  function expandArea(){
    updateExpand(true);
  }

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
        {expand &&(<input
          name="title"
          placeholder="Title"
          onChange={addTitle}
          value={newTitle}
        />) }
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={ expand ? 3 :1}
          onChange={addContent}
          value={newContent}
          onClick= {expandArea}
        />
        <Zoom in={true}>
        
        <Fab   class="button_styling" onClick={ ( )=>{ const newValue = {title: newTitle ,
      content:  newContent };
    props.clickFunction(newValue); 
    updateNewTitle("");
    updateNewContent("");}          } type="button" > 
    <AddIcon />
    </Fab>
    </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
