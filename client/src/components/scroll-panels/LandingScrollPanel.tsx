import { ReactElement } from "react";
import Colors from "../../core/ColorPalette";
import ScrollingCardList from "../content-card/ScrollingCardList";

const LandingScrollPanel = (): ReactElement => {

  return (
    <div style={{
      height: '100vh',
      minWidth: '100vw',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '50%',
        paddingLeft: '4rem',
        paddingTop: '20vh',
        overflowX: 'auto',
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
          whiteSpace: 'normal',
          width: '100%',
          color: Colors.TEXT,
          margin: 0,
          padding: '0.25rem',
        }}>I write silly stuff about tech, philosophy, and whatever else interrests me. This site is somewhat overengineered, so enjoy that...</p>
      </div>

      <div style={{
        width: '50%',
        height: '100%',
      }}>
        <ScrollingCardList
          cards={[
            {title: 'fake content', publishDate: new Date()},
            {title: 'faker content', publishDate: new Date()},
            {title: 'fakest content', publishDate: new Date()},
            {title: 'fakee content', publishDate: new Date()},
            {title: 'feak content', publishDate: new Date()},
          ]}
        />
      </div>
    </div>
  );
};

export default LandingScrollPanel;