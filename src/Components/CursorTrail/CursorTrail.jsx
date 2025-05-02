// CursorTrail.jsx
import React, { useEffect, useRef } from "react";
import "./CursorTrail.css";

const CursorTrail = () => {
    const coords = useRef({ x: 0, y: 0 });
    const circlesRef = useRef([]);

    const colors = [
        "#8E9AAF",
        "#CBC0D3",
        "#EFD3D7",
        "#DEE2FF",
        "#B8C1EC",
        "#9DA9A0",
        "#C9ADA7",
        "#E6B89C",
        "#F6BD60",
        "#F7EDE2",
        "#84A59D",
        "#F28482",
        "#D9BF77",
        "#E0AFA0",
        "#A3A380",
        "#B2B09B",
        "#CCD5AE",
        "#D4A373",
        "#A98467",
        "#6C584C",
        "#A68A64",
        "#8C6A5D"
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
