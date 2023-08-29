import { ReactElement } from "react";
import HorizontalScrollContainer from "../components/HorizontalScrollContainer";
import LandingScrollPanel from "../components/scroll-panels/LandingScrollPanel";
import ParallaxQuotePanel from "../components/scroll-panels/ParallaxQuotePanel";
import Colors from "../core/ColorPalette";
import ContentLibraryPanel from "../components/scroll-panels/ContentLibraryPanel";

const HomePage = (): ReactElement => {

  return (
    <HorizontalScrollContainer>
      <div style={{
        height: '100vh',
        display: 'flex',
        flexWrap: 'nowrap',
        backgroundColor: Colors.BACKGROUND,
      }}>
        <LandingScrollPanel/>
        <ParallaxQuotePanel/>
        <ContentLibraryPanel/>
      </div>
    </HorizontalScrollContainer>
  );
};

export default HomePage;