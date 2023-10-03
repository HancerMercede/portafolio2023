
import './App.css'
import { Header } from './components/Header'
import { ToolKitList } from './components/ToolKitList'
import { AboutMe } from './components/AboutMe'
import { ProjectList } from './components/ProjectList'


function App() {
  return (
  <>
  <Header name='Hancer Mercede'/>
   <ToolKitList/>
   <AboutMe/>
   <ProjectList/>
  </>
  )
}

export default App
