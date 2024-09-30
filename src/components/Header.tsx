import { MenuIcon, PowerIcon, UserIcon } from 'lucide-react';

export function Header() {
    return (
        <header className='flex justify-between'>
            <div>
                <MenuIcon />
                <img width="300" src="https://www.easyflowflexograv.kinghost.net/wp-content/uploads/2024/05/logo-branca.png" />
            </div>
            <div>
                <UserIcon />
                <PowerIcon />
            </div>
        </header>
    )
}