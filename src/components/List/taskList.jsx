import React from 'react'
import TaskItem from './taskItem'

export default function TaskList() {
  return (
    <div className='task-container'>
        <TaskItem title={'Task 1'} creator={'Nam'} description={'This is a task. This is a task. This is a task. This is a task. This is a task. This is a task. '}/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
    </div>
  )
}
