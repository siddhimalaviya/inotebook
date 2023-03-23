import Tippy from '@tippyjs/react';
import React, { useState, useContext } from 'react';
import 'react-tippy/dist/tippy.css';
import 'tippy.js/dist/tippy.css';
import noteContext from './context/notes/noteContext';
import Swal from 'sweetalert2';


const NoteItem = (props) => {
    // let {title, description} = props
    const [showLess, setShowLess] = useState(true);

    const context = useContext(noteContext);
    let { deleteNote } = context;
    const { note, updateNote } = props;

    if (note.description.length < 5) {
        return <p>{note.description}</p>;
    }
    const length = 70;
    const deleteConfirm = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteNote(note._id);
                // props.showAlert("Deleted Successfully", "success")
                Swal.fire(
                    'Deleted!',
                    'Your Note has been deleted.',
                    'success')
            }
        })
    };

    return (
        <div className='col-md-4' >
            <div className="card my-2" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0', top: '-10px' }}>
                    <span className=" badge top-0 start-100 rounded-pill bg-warning" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}  >
                        {note.tag}
                    </span>
                </div>
                <div className="card-body">
                    <div className="d-flex  justify-content-between">
                        <h5 className="card-title"> {note.title}</h5>

                        <div>
                            <Tippy content="Delete">
                                <i id='delete' className="fa-solid fa-trash mx-2 my-2 text-danger" onClick={deleteConfirm}>
                                </i>
                            </Tippy>
                            <Tippy content="Edit">
                                <i className="fa-solid fa-pen-to-square mx-2 " style={{ color: props.mode === 'dark' ? '#03C988' : '#13005A' }} onClick={() => { updateNote(note) }}></i>
                            </Tippy>
                        </div>
                    </div>
                    <p className="card-text"> { showLess ?`${note.description.slice(0, length)}...`:note.description}
                    </p>
                        <a
                            style={{color: props.mode === 'dark' ? 'yellow' : 'blue', cursor: "pointer" }}
                            onClick={() => setShowLess(!showLess)}>
                            &nbsp;View {showLess ? "More" : "Less"}
                        </a>
                    {/* <a style={{ bacroukgndColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rel="noreferrer" target="_blank" >Read More</a> */}
                </div>
            </div>
        </div>
    )
}

export default NoteItem