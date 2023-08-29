import './App.css'
import HorizontalScrollContainer from './components/HorizontalScrollContainer'

function App() {

  return (
    <div style={{
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }}>
     <HorizontalScrollContainer>
        <div style={{width: '300vw', height: '100vh', display: 'flex'}}>
          <div style={{width: '75vw', height: '100vh', backgroundColor: 'green'}}></div>
          <div style={{width: '100vw', height: '100vh', backgroundColor: 'red'}}></div>
          <div style={{width: '125vw', height: '100vh', backgroundColor: 'purple'}}></div>
        </div>
     </HorizontalScrollContainer>
    </div>
  )
}

export default App
