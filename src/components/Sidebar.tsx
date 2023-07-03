import Image from 'next/image';
import Link from 'next/link';
import '@fooddy/app/globals.css'

import { RxDashboard } from 'react-icons/rx';
import { BsShop } from 'react-icons/bs';
import { MdOutlineFoodBank,MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { LuSettings } from 'react-icons/lu';
import { CgLogOut } from 'react-icons/cg';

const sidebarItems = [
    {
        name: "Tienda",
        href: '/',
        icon: BsShop,
    },
    {
        name: "Pedidos",
        href: '/home/orders',
        icon: MdOutlineFoodBank,
    },
    {
        name: "Productos",
        href: '/home/items',
        icon: MdOutlineProductionQuantityLimits,
    },
    {
        name: "Configuración",
        href: '/home/settings',
        icon: LuSettings,
    },
    {
        name: "Salir",
        href: '/',
        icon: CgLogOut,
    }
];

export default function Sidebar() {
    return (
        <div>
            <aside className='sidebar'>
                <div className='sidebar__top'>
                    <Image 
                        src="/culinariored.png" 
                        width={80} 
                        height={80} 
                        className='sidebar__logo'
                        alt='logo'
                    />
                    <p className='sidebar__logo-name'>Fooddy Admin</p>
                </div>
                <ul className='sidebar__list'>
                    {sidebarItems.map(({ name, href, icon: Icon }) => (
                        <li className='sidebar__item'>
                            <Link href={href} className='sidebar__link'>
                                <span className='sidebar__icon'>
                                    <Icon />
                                </span>
                                <span className='sibedar__name'>
                                    {name}
                                </span>
                            </Link>
                        </li>
                    ))};   
                </ul>
            </aside>
        </div>
    );
};


/* button Dashboard with Logo on sidebar

*/