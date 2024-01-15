'use client'

import qs from 'query-string'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/use-debounce'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

export const SearchInput = () => {
    const [value, setValue] = useState('')
    const debouncedValue = useDebounce(value)

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const currentCategoryId = searchParams.get('categoryId')

    useEffect(() => {
        const url = qs.stringifyUrl(
            {
                url: pathname,
                query: { categoryId: currentCategoryId, title: debouncedValue },
            },
            { skipNull: true, skipEmptyString: true },
        )

        router.push(url)
    }, [debouncedValue, currentCategoryId, pathname, router])

    return (
        <div className='relative'>
            <Search className='h-4 w-4 absolute top-1.5 left-1.5 text-slate-600 dark:text-violet-100' />
            <Input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className='h-full md:w-[300px] pl-8 rounded-full bg-slate-200 dark:bg-slate-800 focus-visible:ring-slate-200 dark:focus-visible:ring-slate-800'
                placeholder='Search for a course...'
            />
        </div>
    )
}
