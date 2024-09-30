import { UserIcon } from "lucide-react"

export function Navbar() {
    return <nav>
        <NavbarTopic icon={<UserIcon />} title="Perfil">
            <NavbarLink title="Editar perfil" link="#" />
        </NavbarTopic>
    </nav>
}

function NavbarTopic({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode | React.ReactNode[] }) {
    return (
        <div>
            <div className="flex">
                {icon}
                {title}
            </div>
            {children}
        </div>
    )
}

function NavbarLink({ title, link }: { title: string, link: string }) {
    return <a href={link}>{title}</a>
}