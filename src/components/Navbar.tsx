import { ChevronDownIcon, ChevronUpIcon, CircleDollarSignIcon, ClipboardListIcon, LandmarkIcon, LayoutTemplateIcon, SettingsIcon, UserIcon } from "lucide-react"
import { useState } from "react"

export function Navbar({ open }: { open: boolean }) {
    const animation = open ?
        {
            width: '250px',
            transition: 'width 0.5s ease-in-out'
        } :
        {
            width: '71px',
            transition: 'width 0.5s ease-in-out'
        }
    return <nav style={animation} className="bg-[#a6acac] text-[#5f5f5f] rounded-lg px-4 overflow-x-hidden mr-5">
        <NavbarTopic link="#" icon={<UserIcon className="min-w-10 w-10" />} title="Perfil">
            <NavbarLink title="Impressoras" link="#" />
            <NavbarLink title="Usuários" link="#" />
        </NavbarTopic>
        <NavbarTopic link="#" icon={<LandmarkIcon className="min-w-10 w-10" />} title="Administrativo">
            <NavbarLink title="Cadastro" link="#" />
            <NavbarLink title="Cadastro 3°" link="#" />
            <NavbarLink title="Estoque" link="#" />
            <NavbarLink title="Financeiro" link="#" />
            <NavbarLink title="Relatório" link="#" />
        </NavbarTopic>
        <NavbarTopic link="#" icon={<ClipboardListIcon className="min-w-10 w-10" />} title="Ordem de Serviço">
            <NavbarLink title="Aprovação" link="#" />
            <NavbarLink title="Histórico" link="#" />
            <NavbarLink title="Produção" link="#" />
            <NavbarLink title="PCP" link="#" />
            <NavbarLink title="Sistema Antigo" link="#" />
        </NavbarTopic>
        <NavbarTopic link="#" icon={<LayoutTemplateIcon className="min-w-10 w-10" />} title="Gravação">
            <NavbarLink title="Estoque" link="#" />
            <NavbarLink title="Medidas" link="#" />
        </NavbarTopic>
        <NavbarTopic link="#" icon={<CircleDollarSignIcon className="min-w-10 w-10" />} title="Comercial" />
        <NavbarTopic link="#" icon={<SettingsIcon className="min-w-10 w-10" />} title="Configurações">
            <NavbarLink title="Permissões" link="#" />
            <NavbarLink title="Transportes" link="#" />
        </NavbarTopic>
    </nav>
}

function NavbarTopic({ icon, title, children, link }: { link: string, icon: React.ReactNode, title: string, children?: React.ReactNode | React.ReactNode[] }) {
    const [open, setOpen] = useState(true)
    return (
        <div className="my-5 whitespace-nowrap">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 font-semibold">
                    {icon}
                    <a className="hover:text-[black]" href={link}>{title}</a>
                </div>
                {children && (open ? <ChevronDownIcon onClick={() => setOpen(!open)} /> : <ChevronUpIcon onClick={() => setOpen(!open)} />)}
            </div>
            <div className={` flex flex-col
                transition-all duration-100
                overflow-hidden
                pl-14
                
                ${open ? 'max-h-[1000px]' : 'max-h-0'}
            `}>
                {children}
            </div>
        </div>
    )
}

function NavbarLink({ title, link }: { title: string, link: string }) {
    return <a className="hover:text-[black]" href={link}>{title}</a>
}