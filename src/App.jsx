import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import PCard from './comp/ProfileCard'
import './index.css'

const users = [
  {username:'PaoloBE',names:'Paolo Budiel',follow:true},
  {username:'rashevskyv',names:'xHR',follow:true},
  {username:'minudev',names:'Miguel Duran',follow:false},
  {username:'pheralb',names:'Pablo H',follow:true},
  {username:'PacoHdezs',names:'Paco Hdez',follow:false},
  {username:'TMChein',names:'Tomas Ch.',follow:false},
]

function App() {
  return (
    <>
    {users.map( user => {
      return <PCard names={user.names} username={user.username} initFollow={user.follow} key={user.username}/>
      })}
    </>      
  )
}

export default App
