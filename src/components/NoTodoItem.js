import React from 'react'
import './NoTodo.css'
import { motion } from 'framer-motion'
import noitem from '../noitem.png'


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
            <motion.img className="error" variants={boxVariable} initial="hidden" animate="final" src={noitem} alt="warning" />
            <motion.h1 className="no-items" variants={Variable}
                initial="hidden" animate="final">
                ❌ No Items Found</motion.h1>
        </div>
    )
}

export default NoTodoItem