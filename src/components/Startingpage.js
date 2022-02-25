import React from 'react'
import { motion } from 'framer-motion'
import './Startingpage.css'
import Button from '@mui/material/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'


const spanVariants = {
    visible1: {
        y: 0,
        x: '-100vw',
        opacity: 0,
        scaleY: 1,
    },
    visible2: {
        y: 0,
        x: '100vw',
        opacity: 0,
        scaleY: 1,
    },
    animate1: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
        }

    },
    animate2: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            delay: 0.3,
        }
    },
    hover: {
        y: [-1, -2, -2.8, 0.9, 0],
        scaleY: [1, 1.3, 0.8, 1.2, 1],
        color: "rgb(8,253,216)",
    },
    hover1: {
        y: [-1, -2, -2.8, 0.9, 0],
        scaleY: [1, 1.3, 0.8, 1.2, 1],
        color: "rgb(8,253,216)",

    }
}

const Startingpage = () => {

    const text1 = "Todo";
    const text2 = "List";

    return (

        <Container>
            <Row>
                <Col style={{ justifyContent: 'center' }}>
                    <div>
                        {text1.split("").map((Letter, id) => {
                            if (Letter === "T")
                                return (
                                    <span className="todo-todo" key={id}><motion.h1 initial={{ color: "yellowgreen", scale: 1.5, y: '-100vh', opacity: 0, fontFamily: "'Akaya Telivigala', cursive" }} animate={{ y: 0, opacity: 1, transition: { delay: 0.4, type: 'spring', stiffness: 250 } }}>T</motion.h1></span>
                                );
                            else
                                return (
                                    <span className="todo-todo" key={id}>
                                        <motion.h1 variants={spanVariants} initial="visible1" whileTap={{ rotate: '360deg', transition: { repeat: Infinity } }} animate="animate1" whileHover="hover">{Letter}</motion.h1>
                                    </span>);
                        })}
                    </div>
                    <div className="todo-letters">
                        {text2.split("").map((Letter, id) => (
                            <span className="todo-list" key={id}>
                                <motion.h1 variants={spanVariants} initial="visible2" whileTap={{ rotate: '360deg', transition: { repeat: Infinity } }} animate="animate2" whileHover="hover1">{Letter}</motion.h1>
                            </span>
                        ))}
                    </div>
                    <Link to="/todo" style={{ textDecoration: 'none' }}><Button
                        variant="outlined"
                        size="large"
                        sx={{
                            width: 335,
                            height: 60,
                            margin: '3%',
                            fontWeight: 'bold',
                            borderRadius: '0',
                            fontFamily: "'Open Sans', sans-serif",
                            boxShadow: 'inset 0 0 0 0.09px #1d1d1d',
                            border: '1px solid #08fdd8',
                            color: '#08fdd8',
                            transition: 'all 0.2s ease-in-out',
                            '&:hover': {
                                boxShadow: 'inset 24rem 0 0 0 #08fdd8',
                                transform: 'scale(1.2)',
                                color: 'black',

                            }
                        }}
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1, transition: {
                                delay: 1,
                                duration: 1.2,
                            }
                        }}>Get Started!!</Button>
                    </Link>
                </Col>
                <Col><motion.img className="im" src={require('D:/webd/todo-list/src/to-do-list.png')}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: 370, transition: { delay: 0.5, duration: 0.5 } }}
                    alt="to-do" /></Col>
            </Row>
        </Container>

    )
}

export default Startingpage;