import React, { useState, useEffect } from 'react'
import './TodoItem.css'
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../slices/TodoSlice'
import { toast } from 'react-hot-toast'
import Modal from './Modal'

const TodoItem = ({ todo }) => {
    const [updateModal, setupdateModal] = useState(false);
    const [checked, setchecked] = useState(false)

    useEffect(() => {
        if (todo.status === 'Completed') setchecked(true)
        else setchecked(false)

    }, [todo.status])
    const dispatch = useDispatch()
    const handledelete = () => {
        dispatch(deleteTodo(todo.id))
        toast.success('Todo deleted successfully!!')
    }
    const handleupdate = () => {
        setupdateModal(true)
    }
    const handlechecked = (e) => {
        setchecked(e.target.checked)
        dispatch(updateTodo({
            ...todo,
            status: checked ? 'incomplete' : 'complete',
        }))
    }
    return (
        <>
            <div className="item">
                <div className="todoDetails">
                    <Checkbox color="success" size="large" checked={checked} onChange={handlechecked} />
                    <div className="texts">
                        <p className={todo.status === 'complete' ? '--completed' : 'incomplete'}>{todo.Title}</p>
                        <p className="time">{todo.time}</p>
                    </div>
                    <div className="todoActions">
                        <div className="icon"><DeleteIcon onClick={handledelete} onKeyDown={handledelete} /></div>
                        <div className="icon"><EditIcon onClick={handleupdate} onKeyDown={handleupdate} /></div>
                    </div>
                </div>
            </div>
            <Modal type="Update" todo={todo} modalOpen={updateModal} setModalOpen={setupdateModal} />
        </>
    )
}

export default TodoItem