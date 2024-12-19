import React, { useEffect, useRef } from "react";
import "./AnimatedCursor.css";

const AnimatedCursor: React.FC = () => {
    const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const coords = useRef({ x: 0, y: 0 });

    useEffect(() => {
        circlesRef.current.forEach(function (circle, index) {
            circle.x = 0;
            circle.y = 0;
            // circle.style.backgroundColor = "black";
        });
        // Track mouse movement
        window.addEventListener("mousemove", (e) => {
        coords.current.x = e.clientX;
        coords.current.y = e.clientY;
        });

        const animateCircles = () => {
        let x = coords.current.x;
        let y = coords.current.y;

        // Move the main cursor element (first child)
        if (cursorRef.current?.firstChild instanceof HTMLDivElement) {
            const mainCircle = cursorRef.current.firstChild;
            mainCircle.style.left = `${x}px`;
            mainCircle.style.top = `${y}px`;
        }


        // Move the main cursor element
        if (cursorRef.current) 
        {
            cursorRef.current.style.left = `${x}px`;
            cursorRef.current.style.top = `${y}px`;
        }

        circlesRef.current.forEach((circle, index) => {
            if (circle) {
            // Delay factor for trailing effect
            const delay = ((index + 1)) * 0.1;

            // Smooth transition using interpolation
            circle.x = circle.x || x;
            circle.y = circle.y || y;

            circle.x += (x - circle.x) * delay;
            circle.y += (y - circle.y) * delay;

            circle.style.left = `${circle.x - 12}px`;
            circle.style.top = `${circle.y - 12}px`;

            // Scaling for depth effect
            const scale = (circlesRef.current.length - index) / circlesRef.current.length;
            circle.style.transform = `scale(${scale})`;

                circle.x = x;
                circle.y = y;

                const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
                x += (nextCircle.x - x) * 0.5;
                y += (nextCircle.y - y) * 0.5;
            }
        });

            requestAnimationFrame(animateCircles);
        };

        animateCircles();
    }, []);

  return (
    <div className="cursor" ref={cursorRef}>
       <div className="main-circle"></div>
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          className="circle"
          ref={(el) => (circlesRef.current[i] = el)}
          key={i}
        ></div>
      ))}
    </div>
  );
};

export default AnimatedCursor;
