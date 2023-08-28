import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.css'

function App() {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }}>
     <Parallax pages={2} style={{width: '100%', top: '0', left: '0'}}>
      <ParallaxLayer offset={0.25} speed={1} style={{
        backgroundImage: 'url("https://media.discordapp.net/attachments/1140589185221275770/1145665665257189376/books_layer_1-removebg-preview.png?width=1332&height=750")',
      }}></ParallaxLayer>

      <ParallaxLayer offset={0.3} speed={2} style={{
        backgroundImage: 'url("https://media.discordapp.net/attachments/1140589185221275770/1145665665659830334/books_layer_2-removebg-preview.png?width=1332&height=750")',
      }}></ParallaxLayer>

      <ParallaxLayer offset={0.5} speed={2}>
        <h1>
          Xaviours Blog
        </h1>
      </ParallaxLayer>

      <ParallaxLayer offset={0.35} speed={3} style={{
        backgroundImage: 'url("https://media.discordapp.net/attachments/1140589185221275770/1145665666100236388/books_layer_3-removebg-preview.png?width=1332&height=750")',
      }}></ParallaxLayer>
     </Parallax>
    </div>
  )
}

export default App
