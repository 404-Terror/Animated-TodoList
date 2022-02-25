import React from 'react'
import './NoTodo.css'
import { motion } from 'framer-motion'

const imageVariable = {
    hidden: {
        y: 200,
        zIndex: 2,
        opacity: 0
    },
    final: {
        opacity: 1,
        x: 0,
        y: 100,
        zIndex: 2,
        transition: {
            delay: 0.8,
        }
    }
}
const boxVariable = {
    hidden: {
        x: 0,
        y: '-100vh',
        opacity: 0,
    },
    final: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.3,
        }
    }
}
const Variable = {
    hidden: {
        opacity: 0,
    },
    final: {
        scale: [1, 1.2, 0.8, 1],
        opacity: 1,
        transition: {
            delay: 0.7,
            duration: 1,
        }
    }
}
const NoTodoItem = () => {
    return (
        <div className="images">
            <motion.img className="error" variants={imageVariable} initial="hidden" animate="final" src={require('D:/webd/todo-list/src/warning.png')} alt="warning" />
            <motion.img className="box" variants={boxVariable} initial="hidden" animate="final" src={require('D:/webd/todo-list/src/open-box.png')} alt="open-box" />
            <motion.h1 className="no-items" variants={Variable}
                initial="hidden" animate="final">
                ❌ No Items Found</motion.h1>
        </div>
    )
}

export default NoTodoItem