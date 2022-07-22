import React from 'react'
import TaskItem from './taskItem'

export default function TaskList() {
  return (
    <div>
        <TaskItem title={'Task 1'} creator={'Nam'} description={'This is a task. This is a task. This is a task. This is a task. This is a task. This is a task. '}/>
    </div>
  )
}
