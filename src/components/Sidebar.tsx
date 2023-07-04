'use client';

import Image from 'next/image';
import Link from 'next/link';
import '@fooddy/app/globals.css'

import { BsShop } from 'react-icons/bs';
import { MdOutlineFoodBank,MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { LuSettings } from 'react-icons/lu';
import { CgLogOut } from 'react-icons/cg';
import { BiArrowFromRight } from 'react-icons/bi';
import { useContext } from 'react';
import { SidebarContext } from './SidebarContext';

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
    const {collapsedSidebar, sidebarCollapseHandler} = useContext(SidebarContext);
    return (
        <div className='sidebar__wrapper'>
            <button className='btn' onClick={sidebarCollapseHandler}>
                <BiArrowFromRight />
            </button>
            <aside className='sidebar' data-collapsed={collapsedSidebar}>
                <div className='sidebar__top'>
                    <Image 
                        src="/culinariored.png" 
                        width={60} 
                        height={60} 
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
            </aside>
        </div>
    );
};

