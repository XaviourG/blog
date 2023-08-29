import { ReactElement } from "react";
import Colors from "../../core/ColorPalette";

const LandingScrollPanel = (): ReactElement => {

  return (
    <div style={{
      height: '100vh',
      minWidth: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '50%',
        paddingLeft: '5rem',
      }}>
        <h1 style={{
          color: Colors.TEXT,
          fontWeight: 500,
          fontSize: '3.5rem',
          lineHeight: '3.75rem',
          margin: 0,
          padding: 0,
          borderBottom: `3px solid ${Colors.TEXT}`,
        }}>Welcome to<br/>Xaviour's Blog</h1>
        <p style={{
          color: Colors.TEXT,
          margin: 0,
          padding: '0.25rem',
        }}>I write silly stuff about tech, philosophy, and whatever else interrests me</p>
        <p style={{
          color: Colors.TEXT,
        }}>This site is needlessly overengineered... so enjoy the scroll.</p>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
      }}>
        ...
      </div>
    </div>
  );
};

export default LandingScrollPanel;