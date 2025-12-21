import { Link } from '@inertiajs/react';
import React, { ReactNode, useState } from 'react';

export default function DefaultLayout({ children } : { children: ReactNode }) {
    return (
        <div>
            <header>
                
            </header>
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </div>
    )
}

