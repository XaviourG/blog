import { ReactElement, useEffect, useRef, useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";

interface props {
  children: React.ReactNode,
}

const HorizontalScrollContainer = ({
  children,
}: props): ReactElement => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollElementRef = useRef<HTMLDivElement | null>(null);
  const scrollPosition = useScrollPosition();
  const [horizontalOffset, setHorizontalOffset] = useState<number>(0);

  useEffect(() => {
    if (scrollContainerRef.current && scrollElementRef.current) {
      let scrollDist = scrollPosition.y - scrollContainerRef.current.clientTop;
      if (scrollDist > (scrollElementRef.current.offsetWidth - window.innerWidth)) {
        scrollDist = scrollElementRef.current.offsetWidth - window.innerWidth;
      }
      setHorizontalOffset(scrollDist);
    }
  }, [scrollPosition]);

  const containerHeight = () => {
    if (scrollElementRef.current) {
      return scrollElementRef.current.offsetWidth;
    }
    return 0;
  }

  return (
    <div
      ref={scrollContainerRef}
      style={{
        maxWidth: '100vw',
        height: containerHeight(),
        overflowX: 'clip',
        whiteSpace: 'nowrap',
      }}
    >
      <div
        ref={scrollElementRef}
        style={{
          display: 'inline-block',
          transform: `translate(-${horizontalOffset}px,0)`,
          height: '100vh',
          position: 'sticky',
          top: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalScrollContainer;