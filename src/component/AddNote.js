import React, { useContext, useState } from 'react';
import noteContext from './context/notes/noteContext';


const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;


  
  const [note, setNote] = useState({ title: "", description: "", tag: "" })
  const handleClick = (e) => {
    e.preventDefault();
 
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Note Added Successfully", "success")

  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <div >
      <div className="d-flex justify-content-end my-2">

      <button type="button"   className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <i className="fa-solid fa-plus"></i>
      </button>
      </div>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add a Note</h5>

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3 " >
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="title" name='title' onChange={onChange} value={note.title} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="description" name='description' onChange={onChange} value={note.description} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} value={note.tag} />
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNote