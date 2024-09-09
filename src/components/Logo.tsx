import R from '@/assets/images/logo/letters/r.webp';
import I from '@/assets/images/logo/letters/i.webp';
import V from '@/assets/images/logo/letters/v.webp';
import A from '@/assets/images/logo/letters/a.webp';
import L from '@/assets/images/logo/letters/l.webp';
import SWORD from '@/assets/images/logo/letters/sword.webp';
import U from '@/assets/images/logo/letters/u.webp';
import M from '@/assets/images/logo/letters/m.webp';
import Description from "@/assets/images/logo/description.webp";
import Image from 'next/image';

const images = [R, I, V, A, L, SWORD, U, M];

export default function Logo() {

    return (
        <div className="logo">
            {images.map((image, i) => (
                <Image
                    key={i}
                    src={image}
                    className="letter"
                    alt={`logo-letter-${i}`}
                />
            ))}
            <Image className="logo-desc" src={Description} alt="The realm of rivals"/>
        </div>
    );
}
