import { ReactElement, useEffect, useRef, useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";

interface props {
  children: React.ReactNode,
  panels: number,
}

const HorizontalScrollContainer = ({
  children,
  panels,
}: props): ReactElement => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollElementRef = useRef<HTMLDivElement | null>(null);

  const scrollPosition = useScrollPosition();

  const [horizontalOffset, setHorizontalOffset] = useState<number>(0);

  useEffect(() => {
    if (scrollContainerRef.current && scrollElementRef.current) {
      const scrollDist = scrollPosition.y - scrollContainerRef.current.clientTop;
      setHorizontalOffset(scrollDist);
    }
  }, [scrollPosition]);

  return (
    <div
      ref={scrollContainerRef}
      style={{
        width: '100%',
        height: `${100 * panels}vh`,
        backgroundColor: 'blue'
      }}
    >
      <div
        ref={scrollElementRef}
        style={{
          transform: `translate(-${horizontalOffset}px,0)`,
          width: `${100 * panels}vw`,
          height: '100vh',
          position: 'sticky',
          top: 0,
          backgroundColor: 'pink',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalScrollContainer;