'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

function Instagram() {
    useEffect(() => {
        const InstagramButton = document.querySelector('.Instagram-icon');

        const handleScroll = () => {
            if (window.scrollY > 50) {
                InstagramButton.classList.add('visible');
            } else {
                InstagramButton.classList.remove('visible');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Instagram ICON AREA START */}
            <div className="Instagram-icon">
                <Link
                    href="https://www.instagram.com/raahconstraofficial?igsh=eWs5djBkMXVvYW96_source=ig_contact_invite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                >
                    <img
                        src="/assets/images/logo/icons8-instagram.png"
                        alt="Instagram"
                        className="Instagram-icon-img"
                    />
                </Link>
            </div>
            {/* Instagram ICON AREA END */}
        </>
    );
}

export default Instagram;
