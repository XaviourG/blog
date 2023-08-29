import { ReactElement } from "react";
import Colors from "../../core/ColorPalette";

const ContentLibraryPanel = (): ReactElement => {

  return (
    <div style={{
      height: '100vh',
      minWidth: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflowX: 'auto',
    }}>
      <p style={{
        color: Colors.TEXT,
        fontSize: '2rem',
        fontWeight: 100,
        padding: '2rem',
      }}>
        CONTENT<br/>LIBRARY
      </p>
    </div>
  );
};

export default ContentLibraryPanel;