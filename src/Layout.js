import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <nav className="bg-blue-200 flex flex-row h-20 w-full space-x justify-center py-5 space-x-5 items-center">
                {
                    <a href="/" className="bg-green 100 px-2 py-0.5" >Home Page</a>
                    // <Link to="/" className="bg-green 100 px-2 py-0.5 rounded-md hover:shadow-lg hover:bg-cyan-300">
                }
                {
                    <a href="/about" className="bg-green 100 px-2 py-0.5" >AboutPage</a>
                }
            </nav>
            {children}
        </React.Fragment>
    )
}