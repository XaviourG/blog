import { ReactElement, useRef } from "react";

interface props {
  children: React.ReactNode,
  panels: number,
}

const HorizontalScrollContainer = ({
  children,
  panels,
}: props): ReactElement => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollHorizontal = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (scrollContainerRef.current) {
      console.log(`
        ScrollY: ${window.scrollY}
        height: ${scrollContainerRef.current.clientHeight}
        offset: ${}
      `)
      scrollContainerRef.current.clientHeight
    }
  };

  return (
    <div ref={scrollContainerRef} style={{
      width: '100%',
      height: `${100 * panels}vh`,
      backgroundColor: 'blue'
    }} onScroll={scrollHorizontal}>
      <div style={{
        width: `${100 * panels}vw`,
        height: '100vh',
        position: 'sticky',
        top: 0,
        backgroundColor: 'pink',
      }}>
        {children}
      </div>
    </div>
  );
};

export default HorizontalScrollContainer;