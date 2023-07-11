'use client';

import Image from 'next/image';
import Link from 'next/link';
import '@fooddy/app/globals.css';

import { BsShop, BsSignIntersection } from 'react-icons/bs';
import { MdOutlineFoodBank,MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { LuSettings } from 'react-icons/lu';
import { BiArrowFromRight, BiLogInCircle } from 'react-icons/bi';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { SidebarContext } from './SidebarContext';

import { AuthContext } from '@fooddy/contexts/authContext';

const sidebarItems = [
    {
        name: "Tienda",
        href: '/home/provider',
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
    }/*,
    {
        name: "Register",
        href: '/home/register',
        icon: BsSignIntersection,
    },
    {
        name: "Login",
        href: '/home/login',
        icon: BiLogInCircle,
    }*/
];

export default function Sidebar() {
    const {collapsedSidebar, sidebarCollapseHandler} = useContext(SidebarContext);
    
    const router = useRouter();
    const { authLogout } = useContext(AuthContext);

    return (
        <div className='sidebar__wrapper'>
            <button className='btn' onClick={sidebarCollapseHandler}>
                <BiArrowFromRight />
            </button>
            <aside className='sidebar' data-collapsed={collapsedSidebar}>
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
                        <li className='sidebar__item' key={name}>
                            <Link href={href} className='sidebar__link'>
                                <span className='sidebar__icon'>
                                    <Icon />
                                </span>
                                <span className='sidebar__name'>
                                    {name}
                                </span>
                            </Link>
                        </li>
                    ))}   
                </ul>
                <button type="button" onClick={() => {
                    authLogout();
                    console.log('TOKEN REMOVI2')
                    router.push("/")
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                        Salir
                </button>
            </aside>
        </div>
    );
};

