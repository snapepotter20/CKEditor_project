import React, {useState} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './App.css';
// import ReactHtmlParser from 'react-html-parser';

function App() {
  const [addData,setVal]=useState("");
  const [addedData,showData]=useState(0);
  const handleChange= (e,editor)=>{
     const data = editor.getData();
     setVal(data);
  }
  return (
    <div className="App">
       <h2>
        <u>CKEditor5 with React.js</u>
       </h2>
       <div style={{width:'700px',display:'inline-block',testAlign:'left'}}>
        <div style={{width:'700px',display:'inline-block',textAlign:'right',marginBottom:'5px'}}>
          <button style={{backgroundColor:'black',color:'white'}} onClick={()=>showData(!addedData)}>{addedData?'Hide Data':'Show Data'}</button>
        </div>
       <CKEditor editor={ClassicEditor} data={addData} onChange={handleChange}/>
       <div>
         {addedData ? addData:''}
       </div>
      </div>
    </div>
  );
}

export default App;
