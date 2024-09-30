import { MenuIcon, PowerIcon, UserIcon } from 'lucide-react';

export function Header({ setOpen, open }: { open: boolean, setOpen: (open: boolean) => void }) {
    return (
        <header className='flex justify-between px-5 pt-5 pb-10'>
            <div className='flex gap-5 items-center'>
                <MenuIcon className="cursor-pointer w-10 h-10 text-[gray]" onClick={() => setOpen(!open)} />
                <img width="300" src="https://www.easyflowflexograv.kinghost.net/wp-content/uploads/2024/05/logo-branca.png" />
            </div>
            <div className='flex gap-5 items-center'>
                <UserIcon className="cursor-pointer w-10 h-10 text-[white]" />
                <PowerIcon className="cursor-pointer w-10 h-10 text-[white]" />
            </div>
        </header>
    )
}