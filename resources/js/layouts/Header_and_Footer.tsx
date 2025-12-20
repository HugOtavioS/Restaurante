import { ReactNode } from "react";
import { Link } from "@inertiajs/react";

export default function HeaderAndFooterLayout({ children }: { children: ReactNode }) {{
    return(
        <div>
            <header>
                
            </header>
            {children}
            <footer>

            </footer>
        </div>
    )
}}