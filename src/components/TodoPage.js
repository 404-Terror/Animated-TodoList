import React, { useState } from 'react'
import './TodoPage.css'
import Button from '@mui/material/Button'
import { AnimatePresence, motion } from 'framer-motion'
import Selected from './Select'
import Modal from './Modal'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import NoTodoItem from './NoTodoItem'

const parent = {
    hidden: {
        opacity: 0,
    },
    final: {
        opacity: 1,
        scale: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.3,
        }
    },
}

const TodoPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const todoList = useSelector((state) => state.todo.todoList);
    const filterStatus = useSelector((state) => state.todo.filterStatus);
    const sortedTodoList = [...todoList]
    sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time))
    const filteredTodoList = sortedTodoList.filter(item => {
        if (filterStatus === 'All') {
            return true;
        }
        return item.status === filterStatus;
    })
    return (
        <>
            <header><span className="T">T</span>odo List</header>
            <span className="todo-span"><Button sx={{ width: '120px', backgroundColor: '#573391', '&:hover': { backgroundColor: '#8A39E1' } }} variant="contained" onClick={() => setModalOpen(true)}>Add Task</Button><Selected />
                <Modal type="Add" modalOpen={modalOpen} setModalOpen={setModalOpen}></Modal></span>
            <motion.div variants={parent} initial="hidden" animate="final" className="todo-body">
                <AnimatePresence>{filteredTodoList && filteredTodoList.length > 0 ? filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />) : <NoTodoItem />}</AnimatePresence>
            </motion.div>
            <Toaster position='bottom-right'
                toastOptions={{
                    style: {
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        padding: '5px 10px'
                    },
                }
                } />
        </>
    );

}

export default TodoPage