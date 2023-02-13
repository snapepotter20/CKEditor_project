import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default function App() {
  return (
    <div className='App'>
      <h2>CKEditor 5 in React App</h2>
      <CKEditor
        editor={ ClassicEditor }
        data="<p>Hello from CKEditor 5!</p>"
        onReady={ ( editor ) => {
          console.log( "CKEditor5 React Component is ready to use!", editor );
        } }
        onChange={ ( event, editor ) => {
          const data = editor.getData();
          console.log( { event, editor, data } );
        } }
      />
    </div>
  );
}


