import './App.css'
import Delete from './component/Delete'
import Resister from './component/Resister'
import Update from './component/Update'
import View from './component/View'

function App() {
  
  return (
   <div style={{border:'7px solid red',padding:'15px' ,backgroundColor:'lightyellow'}}>
    <h1 style={{color:'red'}}>CRUD FUNCTION APP</h1>
    <Resister/><br/>
    <Update/><br/>
    <Delete/><br/>
    <View/>
   </div>
  )
}
export default App
