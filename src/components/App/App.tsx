/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react'
import { useAppDispatch } from 'store'

import Board from 'components/Board/Board'
import Header from 'components/Header/Header'

import { initApp } from 'store/reducers/actions'

import './App.scss'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initApp())
  }, [dispatch])

  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div>
        <Board />
      </div>
    </div>
  )
}

export default App
