'use client'

import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

interface SidebarItemProps {
    icon: LucideIcon
    label: string
    href: string
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
    const pathname = usePathname()
    const router = useRouter()

    const isActive =
        (pathname === '/' && href === '/') ||
        pathname === href ||
        pathname.startsWith(`${href}/`)

    const onClick = () => router.push(href)

    return (
        <button
            onClick={onClick}
            type='button'
            className={cn(
                'flex items-center gap-x-2 text-slate-500 dark:text-white text-sm font-[500] pl-6 transition-all hover:text-slate-600 dark:hover:text-white hover:bg-slate-300/20 dark:hover:bg-accent/60',
                isActive &&
                    'text-slate-700 dark:text-white bg-slate-200/20 dark:bg-accent hover:bg-slate-200/20 dark:hover:bg-accent hover:text-slate-700 dark:hover:text-white',
            )}
        >
            <div className='flex items-center gap-x-2 py-4'>
                <Icon
                    size={22}
                    className={cn(
                        'text-slate-500 dark:text-white',
                        isActive && 'text-slate-700 dark:text-white',
                    )}
                />
                {label}
            </div>
            <div
                className={cn(
                    'ml-auto opacity-0 border-2 border-slate-70 dark:border-slate-500 h-full transition-all',
                    isActive && 'opacity-100',
                )}
            />
        </button>
    )
}
