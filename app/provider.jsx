/*"use client"
import { supabase } from '@/services/supabaseClient'
import React, { useEffect, useState } from 'react'

function Provider({ children }) {
    const [user,setUser]=useState(null);
    useEffect(() => {
        createNewUser()
    },[])

    const createNewUser=()=>{

        supabase.auth.getUser().then(async({data:{user}})=>{
         //Check if user already exist
        let { data: Users, error } = await supabase
          .from('Users')
          .select("*") 
          .eq('email',user?.email);

        console.log(Users)
        //If not the create new user
        if(users.length==0){
            const { data, error }=await supabase
            .from("Users")
            .insert([
                {
                   name:user?.user_metadata?.name,
                   email:user?.email,
                   picture:user?.user_metadata?.picture
                }
            ])
            console.log(data);
            setUser(data);
            return;
        }

        setUser(Users[0]);

        })
        
    }
  return (
    <div>{children}</div>
  )
}

export default Provider*/

"use client"

import { supabase } from "@/services/supabaseClient"
import React, { createContext, useContext, useEffect, useState } from "react"

const UserContext = createContext(null)

// ✅ custom hook
export function useUser() {
  return useContext(UserContext)
}

function Provider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    createNewUser()
  }, [])

  const createNewUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) return

    // Check if user already exists
    let { data: users, error } = await supabase
      .from("Users")
      .select("*")
      .eq("email", user.email)

    if (error) {
      console.error(error)
      return
    }

    // If user does not exist, create one
    if (users.length === 0) {
      const { data, error } = await supabase.from("Users").insert([
        {
          name: user.user_metadata?.name,
          email: user.email,
          picture: user.user_metadata?.picture,
        },
      ])

      if (error) {
        console.error(error)
        return
      }

      setUser(data[0])
      return
    }

    // User exists
    setUser(users[0])
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default Provider
