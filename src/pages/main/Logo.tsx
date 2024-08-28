import { useLocation } from "react-router-dom";
import { animated, useSpring, easings } from "react-spring";
import React, { useState, useEffect } from "react";

const R = require('../../assets/images/logo/letters/r.webp');
const I = require('../../assets/images/logo/letters/i.webp');
const V = require('../../assets/images/logo/letters/v.webp');
const A = require('../../assets/images/logo/letters/a.webp');
const L = require('../../assets/images/logo/letters/l.webp');
const SWORD = require('../../assets/images/logo/letters/sword.webp');
const U = require('../../assets/images/logo/letters/u.webp');
const M = require('../../assets/images/logo/letters/m.webp');

const images = [R, I, V, A, L, SWORD, U, M];

export default function Logo() {

    const springProps = useSpring({
        to: {
            filter: 'blur(0)',
            transform: 'scale(1)',
            marginLeft: '0',
            opacity: 0.9
        },
        from: {
            filter: 'blur(80px)',
            transform: 'scale(0.2)',
            marginLeft: '20%',
            opacity: 0
        },
        config: {
            duration: 3000,
            easing: easings.easeOutQuint
        }
    });


    return (
        <div className="logo">
            {images.map((image, i) => (
                <animated.img
                    key={i}
                    src={image}
                    style={springProps}
                    alt={`logo-letter-${i}`}
                />
            ))}
        </div>
    );
}
