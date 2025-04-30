// CursorTrail.jsx
import React, { useEffect, useRef } from "react";
import "./CursorTrail.css";

const CursorTrail = () => {
    const coords = useRef({ x: 0, y: 0 });
    const circlesRef = useRef([]);

    const colors = [
        "#FF6B6B",
        "#FFD93D",
        "#6BCB77",
        "#4D96FF",
        "#843B62",
        "#FFADAD",
        "#9D4EDD",
        "#00F5D4",
        "#F15BB5",
        "#00BBF9",
        "#FEE440",
        "#B8F2E6",
        "#D0F4DE",
        "#FFDAC1",
        "#E4C1F9",
        "#A9DEF9",
        "#FCF6BD",
        "#C492B1",
        "#A1C298",
        "#8E7DBE",
        "#F67280",
        "#355C7D"
    ];


    useEffect(() => {
        const handleMouseMove = (e) => {
            coords.current.x = e.clientX;
            coords.current.y = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        circlesRef.current.forEach((circle, index) => {
            if (circle) {
                circle.x = 0;
                circle.y = 0;
                circle.style.backgroundColor = colors[index % colors.length];
            }
        });

        const animateCircles = () => {
            let x = coords.current.x;
            let y = coords.current.y;

            circlesRef.current.forEach((circle, index) => {
                if (!circle) return;

                circle.style.left = `${x - 12}px`;
                circle.style.top = `${y - 12}px`;
                circle.style.scale = (circlesRef.current.length - index) / circlesRef.current.length;

                circle.x = x;
                circle.y = y;

                const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
                x += (nextCircle.x - x) * 0.3;
                y += (nextCircle.y - y) * 0.3;
            });

            requestAnimationFrame(animateCircles);
        };

        animateCircles();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            {Array.from({ length: 20 }).map((_, i) => (
                <div
                    key={i}
                    className="circle"
                    ref={(el) => (circlesRef.current[i] = el)}
                ></div>
            ))}
        </>
    );
};

export default CursorTrail;
