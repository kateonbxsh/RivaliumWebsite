const R = require('../../assets/images/logo/letters/r.webp');
const I = require('../../assets/images/logo/letters/i.webp');
const V = require('../../assets/images/logo/letters/v.webp');
const A = require('../../assets/images/logo/letters/a.webp');
const L = require('../../assets/images/logo/letters/l.webp');
const SWORD = require('../../assets/images/logo/letters/sword.webp');
const U = require('../../assets/images/logo/letters/u.webp');
const M = require('../../assets/images/logo/letters/m.webp');
const Description = require("../../assets/images/logo/description.webp");

const images = [R, I, V, A, L, SWORD, U, M];

export default function Logo() {

    return (
        <div className="logo">
            {images.map((image, i) => (
                <img
                    key={i}
                    src={image}
                    className="letter"
                    alt={`logo-letter-${i}`}
                />
            ))}
            <img className="logo-desc" src={Description} alt="The realm of rivals"/>
        </div>
    );
}
