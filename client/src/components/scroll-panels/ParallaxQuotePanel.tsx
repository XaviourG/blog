import { ReactElement } from "react";
import Colors from "../../core/ColorPalette";

const ParallaxQuotePanel = (): ReactElement => {

  return (
    <div style={{
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflowX: 'auto',
    }}>
      <p style={{
        color: Colors.TEXT,
        fontSize: '6rem',
        fontWeight: 700,
        padding: '2rem',
      }}>
        Reading is to the mind what exercise is to the body.
      </p>
    </div>
  );
};

export default ParallaxQuotePanel;