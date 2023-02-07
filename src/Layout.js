import React from "react";

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <nav className="bg-red-100 flex flex-row justify-center py-5 space-x-5 items-center">
                <a href="/" className="bg-green 100 px-2 py-0.5" >Home Page</a>
                <a href="/about" className="bg-green 100 px-2 py-0.5" >AboutPage</a>
            </nav>
            {children}
        </React.Fragment>
    )
}