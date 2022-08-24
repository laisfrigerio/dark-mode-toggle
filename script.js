const themeDark = 'theme-dark'
const themeLight = 'theme-light'

function getTheme() {
  const theme = localStorage.getItem('theme')

  if (theme === 'null') {
    return themeDark
  }

  return theme
}

function setTheme(theme) {
  localStorage.setItem('theme', theme)
  document.documentElement.className = theme
}

function setSlider(theme) {
  const checked = theme === themeDark
    ? false : true
  document.getElementById('slider').checked = checked
}

function toggleTheme() {
  const theme = getTheme()

  if (theme === themeDark) {
    setTheme(themeLight)
    return
  }

  setTheme(themeDark)
}

window.onload = function () {
  const theme = getTheme()
  setTheme(theme)
  setSlider(theme)
}