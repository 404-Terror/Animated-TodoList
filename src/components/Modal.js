import React, { useState, useEffect } from 'react'
import './Modal.css'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../slices/TodoSlice'
import { v4 as uuid } from 'uuid'
import toast from 'react-hot-toast'

const Modal = ({ type, modalOpen, setModalOpen, todo }) => {
    const [Title, setTitle] = useState('');
    const [status, setstatus] = useState('Incomplete');
    useEffect(() => {
        if (type === 'Update' && todo) {
            setTitle(todo.Title);
            setstatus(todo.status);
        }
        else {
            setTitle('');
            setstatus('Incomplete');
        }
    }, [type, todo, setModalOpen])
    const dispatch = useDispatch();
    const handlesubmit = (e) => {
        e.preventDefault();
        if (Title === '') {
            toast.error("Title shouldn't be empty!!", { duration: 2000 })
            return;
        }
        if (Title && status) {
            if (type === 'Add') {
                dispatch(addTodo({
                    id: uuid(),
                    Title,
                    status,
                    time: new Date().toLocaleString(),
                }))
                setTitle('')
                toast.success('Task Added Successfully!!');
            }
            else if (type === 'Update') {
                if (todo.Title !== Title || todo.status !== status) {
                    dispatch(updateTodo({
                        ...todo,
                        Title,
                        status,
                    }))

                    toast.success('Task Updated Successfully!!');
                }
                else { toast.error("No changes Made!!", { duration: 2000 }) }
            }
            setModalOpen(false);
        }

    }
    return (
        <>
            {modalOpen && (
                <div className="wrapper">
                    <div className="modalwrapper">
                        <div className="closeButton"
                            onClick={() => setModalOpen(false)}
                            onKeyDown={() => setModalOpen(false)}
                            tabIndex={0}
                            role="button"
                        ><CloseOutlinedIcon />
                        </div>
                        <form className="form" onSubmit={handlesubmit}>
                            <h1 className="formTitle">{type === 'Add' ? 'Add' : "Update"} Task</h1>
                            <label htmlFor="title">Title
                                <input value={Title} onChange={(e) => setTitle(e.target.value)} type="text" id="title" placeholder='Add Task' />
                            </label>
                            <label htmlFor="status">
                                Status
                                <select value={status} onChange={(e) => setstatus(e.target.value)} name="status" id="status">
                                    <option value="incomplete">Incomplete</option>
                                    <option value="complete">Complete</option>
                                </select>
                            </label>
                            <div className="buttonContainer">
                                <Button type="submit" variant="contained">{type === 'Add' ? 'Add' : 'Update'} Task</Button>
                                <Button
                                    onClick={() => setModalOpen(false)}
                                    onKeyDown={() => setModalOpen(false)}
                                    color="error" size="medium" type="button" variant="outlined">Cancel</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );

}

export default Modal