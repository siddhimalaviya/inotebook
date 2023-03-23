import React from 'react'
import NoteContext from './noteContext';
import { useState } from 'react';
// import { icon } from '@fortawesome/fontawesome-svg-core';
import Swal from 'sweetalert2';


const NoteState = (props) => {
    const host = "http://localhost:5000"
    const noteInitial = []
    const [notes, setNotes] = useState(noteInitial);
    // const [deleteComfirm, setDeleteConfirm] = useState(true);
    // const [deleteId, setDeleteId] = useState("");

    //Get a Note
    const getNotes = async() => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json()
        // console.log(json);
        setNotes(json)
    }
    
    //Add a Note
    const addNote = async(title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag})
        });
        const note = await response.json();
        setNotes(notes.concat(note))

    }


    //Delete a Note
    let deleteNote = async(id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = response.json();
        console.log("deleting with  this " + json);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    //Edit a Note
    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag})
        });
        const json =await response.json(); 
        console.log(json);
        let newNotes = JSON.parse(JSON.stringify(notes))

        //Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
            }

        }
        setNotes(newNotes);
    }

    const swalAlert = async (message, icon) =>{
        Swal.fire({
            position: 'center',
            title: message,
            icon: icon,
            showConfirmButton: false,
            timer: 1800
          })
          
    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes, swalAlert}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;