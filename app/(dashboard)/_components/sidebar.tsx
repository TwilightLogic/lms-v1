import { Logo } from './logo'
import { SidebarRoutes } from './sidebar-routes'

export const Sidebar = () => {
    return (
        <div className='h-full border-r dark:border-slate-900 flex flex-col overflow-y-auto bg-white dark:bg-slate-950 shadow-sm'>
            <div className='p-6'>
                <Logo />
            </div>
            <div className='flex flex-col w-full'>
                <SidebarRoutes />
            </div>
        </div>
    )
}
