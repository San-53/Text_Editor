import React from 'react'
import './header.css'
import logo from './logo.png'

const header = () => {
  return (
    <div className='header'>
      <h2 className='app_name'>
        <a href='https://github.com/San-53/Text_Editor.git' target="_blank">Rich_Text_Editor</a></h2>

      <span class="nav-links">
            <a href="https://github.com/San-53" target="_blank">
            <img className='git_logo' src={logo} alt=""/></a>
            <h4 className='git_username'>San_53</h4>
      </span>

    </div>
  )
}

export default header