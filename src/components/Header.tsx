
'use client'

import { useState } from 'react'
import Image from 'next/image'
import SN_C_T_Logo from '../assets/SN_C_T_Logo.png'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    return (
        <header className="site-header">
            <div className="container header-inner">
                <a href="#" className="brand" onClick={closeMenu}>
                    <Image
                        src={SN_C_T_Logo}
                        alt="SN Construction & Traders"
                        placeholder="blur"
                        width={150}
                        height={120}
                        className="header-logo"
                        priority
                    />
                </a>

                <button
                    className="menu-toggle"
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={menuOpen}
                    aria-controls="main-navigation"
                >
                    {menuOpen ? '×' : '☰'}
                </button>

                <nav
                    id="main-navigation"
                    className={`nav ${menuOpen ? 'open' : ''}`}
                >
                    <a href="#" className="active" onClick={closeMenu}>Home</a>
                    <a href="#services" onClick={closeMenu}>Services</a>
                    <a href="#works" onClick={closeMenu}>Our Works</a>
                    <a href="#properties" onClick={closeMenu}>Properties</a>
                    <a href="#materials" onClick={closeMenu}>Materials</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                </nav>

                <div className="header-actions">
                    <a
                        href="https://wa.me/917373661994"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WhatsApp Us
                    </a>

                    <a href="#contact" className="btn btn-soft">
                        Enquire Now
                    </a>

                    <div className="icon-circle" title="Account" aria-label="Account">
                        &#9786;
                    </div>
                </div>
            </div>
        </header>
    )
}
