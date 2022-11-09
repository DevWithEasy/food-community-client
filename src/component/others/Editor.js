import { Editor } from "@tinymce/tinymce-react";
import React from 'react';

const EditorView = ({setValue,label,placeholder}) => {
    return (
        <div className="bg-gray-200 rounded">
            <label htmlFor="" className="block pl-1 py-1 text-sm">{label} :</label>
            <Editor apiKey={process.env.REACT_APP_TINYMCE} init={{ height: 250,menubar : false,placeholder : placeholder}} onChange={(e)=>setValue( e.target.getContent())}/>
      </div>
    );
};

export default EditorView;