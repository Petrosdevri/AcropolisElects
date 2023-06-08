import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import { GitHub, Instagram, Mail, Twitter } from 'react-feather';
import Poliverse from '../assets/images/Poliverse Logo (Transparent).png';

export default function Footer() {
    let currentYear = new Date().getFullYear();

    const [color, setColor] = useState(['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']);
    const [bgColor, setBgColor] = useState(['#212529', '#212529', '#212529', '#212529']);

    const onMouseOver = (id) => {
        setColor(color.map((color, index) => index === id ? '#212529' : color));
        setBgColor(bgColor.map((bgColor, index) => index === id ? '#FFFFFF' : bgColor));
    }

    const onMouseOut = () => {
        setColor(['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']);
        setBgColor(['#212529', '#212529', '#212529', '#212529']);
    }

    return (
        <div className='footer d-flex'>
            <Stack className='footer-core' gap={3}>
                <img src={Poliverse} alt='poliverse-logo' width='150' height='75' />
                <h3 className='text-left'>Poliverse Org.</h3>
                <p className='text-left'>Where Political Values Find Their Voice</p>
            </Stack>
            <Stack className='footer-links' gap={3}>
                <h3>Find us on</h3>
                <Stack className='social-media d-flex justify-content-center' direction='horizontal' gap={3}>
                    <button className='footer-btn' style={{ background: `${bgColor[0]}` }} onMouseOver={() => onMouseOver(0)} onMouseOut={onMouseOut}>
                        <a href='https://github.com/PoliVerse' rel='noreferrer' target='_blank'><GitHub color={color[0]} /></a>
                    </button>
                    <button className='footer-btn' style={{ background: `${bgColor[1]}` }} onMouseOver={() => onMouseOver(1)} onMouseOut={onMouseOut}>
                        <a href='https://instagram.com/' rel='noreferrer' target='_blank'><Instagram color={color[1]} /></a>
                    </button>
                    <button className='footer-btn' style={{ background: `${bgColor[2]}` }} onMouseOver={() => onMouseOver(2)} onMouseOut={onMouseOut}>
                        <a href='mailto:poliversegr@zohomail.eu' rel='noreferrer' target='_blank'><Mail color={color[2]} /></a>
                    </button>
                    <button className='footer-btn' style={{ background: `${bgColor[3]}` }} onMouseOver={() => onMouseOver(3)} onMouseOut={onMouseOut}>
                        <a href='https://twitter.com/' rel='noreferrer' target='_blank'><Twitter color={color[3]} /></a>
                    </button>
                </Stack>
                <p>Copyright @{currentYear}</p>
            </Stack>
        </div>
    )
}