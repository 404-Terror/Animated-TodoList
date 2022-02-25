import React from 'react'
import { useSelector } from 'react-redux'
import './Select.css'
import { useDispatch } from 'react-redux'
import { updatefilterStatus } from '../slices/TodoSlice'

const Selected = () => {
    const filterStatus = useSelector((state) => state.todo.filterStatus);
    const dispatch = useDispatch()
    const updatefilter = (e) => {
        dispatch(updatefilterStatus(e.target.value))
    }
    return (
        <select id="selected" value={filterStatus} onChange={updatefilter}>
            <option value="All">All</option>
            <option value="Incomplete">Incomplete</option>
            <option value="complete">Complete</option>
        </select>
    )
}

export default Selected
