import React from "react";

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <nav className="bg-red-100 flex flex-row justify-center py-5 space-x-5">
                <a href="/"Home Page></a>
                <a href="/about"AboutPage></a>
            </nav>
            {children}
        </React.Fragment>
    )
}