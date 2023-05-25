import { createContext, useState } from "react";

export const SidebarContext = createContext()

export const SidebarContextProvider = ({ children }) => {
    const [open, setOpen] = useState(true)
    return(
        <SidebarContext.Provider value={{open, setOpen}}>
            {children}
        </SidebarContext.Provider>
    )
}