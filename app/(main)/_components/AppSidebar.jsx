"use client"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SideBarOptions } from "@/services/Constants";
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const path=usePathname();
  console.groupCollapsed(path);
  return (
    <Sidebar>
      <SidebarHeader className='flex items mt-5'>
         <div className='flex items-center gap-3 mb-2'>
             <Image src={'/logo.svg'} alt='logo' 
                width={100}
                height={100}
                className='w-[50px]'/>
                <h2 className='text-primary-500'>VoxHire</h2>
         </div>
         <Button className='w-full mt-5'> <Plus/> Create New Interview</Button>
      </SidebarHeader> 
      <SidebarContent>
        <SidebarGroup>
          <SidebarContent>
            <SidebarMenu>
              {SideBarOptions.map((option,index)=>(
                <SidebarMenuItem key={index} className='p-1 list-none'>
                  <SidebarMenuButton asChild className='p-5'>
                    <Link href={option.path}>
                       <option.icon className={`${path==option.path&&'text-primary'}`}/>
                       <span className={`text-[16px] font-medium ${path==option.path&&'text-primary'}`}>{option.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu> 
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}