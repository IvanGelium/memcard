import { useEffect } from 'react'

function ThemeBut({ theme, setTheme }) {
  function changeTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    
  }

  return (
    <div id="themeBut" onClick={() => changeTheme()}>
      {theme === 'dark' ? '🌙' : '☀️'}
    </div>
  )
}

export default ThemeBut
