import React, { useContext, useEffect, useRef, useState } from 'react'
// import AddNote from './AddNote';
import NoteItem from './NoteItem';
import noteContext from './context/notes/noteContext';
import { useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'react-tippy/dist/tippy.css';
// import Spinner from './Spinner';


const Notes = (props) => {
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
    const [isEdit, setIsEdit] = useState(false)
    // const [loading, setLoading] = useState(true)

    const ref = useRef(null);
    const refClose = useRef(null);

    const context = useContext(noteContext);
    const navigate = useNavigate();
    const { notes, getNotes, editNote, addNote, swalAlert } = context;

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        } else {
            navigate('/login');
        }
        // eslint-disable-next-line     
    }, [])

    const updateNote = (currentNote) => {
        ref.current.click();
        console.log(currentNote)
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
        setIsEdit(true);
        // setLoading(true)
    }

    const createNote = () => {
        ref.current.click();
        setNote({ id: "", etitle: "", edescription: "", etag: "" })
        setIsEdit(false)

    }

    {/********************************************************** ADD OR UPDATE NOTE FUNCTION*************************************************************/}

    const handleSave = (e) => {
        if (isEdit) {

            console.log("updating the note....");
            editNote(note.id, note.etitle, note.edescription, note.etag)
            swalAlert("Note Updated Successfully", "success");
        } else {
            addNote(note.etitle, note.edescription, note.etag);
            // createNote();
            swalAlert("Note Added Successfully", "success")
        }
        refClose.current.click();
        // addNote(note.title, note.description, note.tag);

    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            {/* <AddNote showAlert={props.showAlert} /> */}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/********************************************************** ADD OR UPDATE NOTE *************************************************************/}
            {/**********************************************************  <!-- Modal --> ****************************************************************/}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#737171 ' : 'WHITE' }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{isEdit ? "Update note" : "Add note"} </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} onChange={onChange} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#737171 ' : 'WHITE' }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} minLength={5} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#737171 ' : 'WHITE' }} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} minLength={5} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#737171 ' : 'WHITE' }} required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'black' : 'white' }}>Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} onClick={handleSave} type="button" className="btn btn-primary">{isEdit ? "Update note" : "Add note"}</button>
                        </div>
                    </div>
                </div>
            </div>
            {/***************************************************************** YOUR NOTE ***************************************************************/}
            <div className='row'>
                <div className='d-flex justify-content-between my-5' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h1 > Your Note</h1>
                    <Tippy placement='bottom' content="Add Note">
                        <button type="button" className="btn btn-warning " style={{
                            borderRadius: "8px", height: '40px',
                            width: '40px'
                        }} onClick={createNote} >
                            <i className="fa-solid fa-plus" style={{ verticalAlign: "middle" }}></i>
                        </button>
                    </Tippy>

                </div>


                <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

                    {notes.length === 0 && "No Notes to display"}
                    {/* {loading && <Spinner/>}       */}
                </div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} mode={props.mode}  title={note.title.slice(0, 20)} description={note.description.slice(0, 10)} updateNote={updateNote} note={note} />
                })}

            </div>
        </>
    )
}

export default Notes