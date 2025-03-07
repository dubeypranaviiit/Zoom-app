"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { sideBarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
const Sidebar = () => {
    const pathName = usePathname();
    console.log('sidebar');
  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 max-sm:hidden lg:w-[250px] xl:w-[350px]'>
          <div className='flex  flex-col gap-6'>
           {

              sideBarLinks.map((link)=>{
                 const isActive = pathName === link.route ;
                //  || pathName.startsWith(`${link.route}`);
                 return(
                    <Link
                    href={link.route}
                    key={link.label}
                    className={ cn('flex gap-4 items-center p-4 rounded-lg justify-start',{'bg-blue-800':isActive } )} 
                    >
                       <Image 
                        src={link.imageUrl}
                        alt={link.label}
                        width={24}
                        height={24}
                       />
                       <p className='text-lg text-white font-semibold max-lg:hidden'>
                        {
                          link.label
                        }

                       </p>
                        
                    </Link>
                 )
                     })
           }
          </div>
    </section>
  )
}

export default Sidebar;