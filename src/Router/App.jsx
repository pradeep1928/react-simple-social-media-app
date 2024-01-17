
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'


import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

import { useState } from 'react'
import PostListProvider from '../store/post-list-store'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [selectedTab, setSelectedTab] = useState('Home')

  return (
    <PostListProvider>
      <div className='app-container'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className='content'>
          <Header />
          < Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  )
}

export default App
