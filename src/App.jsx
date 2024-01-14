
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'

import { useState } from 'react'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [selectedTab, setSelectedTab] = useState('Home')

  return (
    <div className='app-container'>
      <Sidebar selectedTab = {selectedTab} />
      <div className='content'>
        <Header />
        {selectedTab == 'Home' ? (< PostList />) : (<CreatePost />)}
        <Footer />
      </div>
    </div>


  )
}

export default App
