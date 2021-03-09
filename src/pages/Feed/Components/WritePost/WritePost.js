import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faRedo, faSave } from '@fortawesome/free-solid-svg-icons'

export default function WritePost() {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const updateTextDescription = (state) => {
        setEditorState(state);
        //const data = convertToRaw(editorState.getCurrentContent());
    };
    return (
        <div className="card w-100 mt-4 h-auto shadow-sm">
            <div className="card-header text-start"><h1 className="h5 fw-bold m-0 my-1">Post Something</h1></div>
            <Editor
                editorState={editorState}
                toolbarClassName="fw-bold text-decoration-none"
                editorClassName="px-4 py-2 h-100"
                onEditorStateChange={updateTextDescription}
            />
            <div className="card-footer d-flex justify-content-between align-items-center py-3">
                <div>
                    <p className="m-0 text-muted text-italic">Last saved: 0 seconds ago</p>
                </div>
                <div>
                    <button className="btn btn-danger px-3"><FontAwesomeIcon icon={faRedo} /><span className="ms-2">Reset</span></button>
                    <button className="btn btn-warning px-3 mx-2"><FontAwesomeIcon icon={faSave} /><span className="ms-2">Draft</span></button>
                    <button className="btn btn-success px-3"><FontAwesomeIcon icon={faPen} /><span className="ms-2">Post</span></button>
                </div>
            </div>
        </div>
    )
}
