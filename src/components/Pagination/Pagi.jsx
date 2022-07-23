import React from 'react'
import Button from '../Button/Button'
import './style.scss'
export default function Pagi() {
  return (
    <div className='pagi-contain'>
        <Button name={'<'}/>
        <Button name={'1'}/>
        <Button name={'2'}/>
        <Button name={'3'}/>
        <Button name={'>'}/>
    </div>
  )
}
