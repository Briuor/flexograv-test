import { useState } from "react"
import { Header } from "./Header"
import { Navbar } from "./Navbar"

export function Layout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(true)
    return (
        <div className="p-5 flex flex-col min-h-screen">
            <Header open={open} setOpen={setOpen} />
            <div className="flex flex-1">
                <Navbar open={open} />
                {children}
            </div>
        </div>
    )
}