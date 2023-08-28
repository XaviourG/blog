import './App.css'
import HorizontalScrollContainer from './components/HorizontalScrollContainer'

function App() {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }}>
     <HorizontalScrollContainer panels={4}>
        <p>hello its me</p>
     </HorizontalScrollContainer>
    </div>
  )
}

export default App
