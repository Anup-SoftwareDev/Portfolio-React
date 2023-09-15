import { createContext, useContext, useState } from "react";


export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({children})=>{

    const [projectIndex, setProjectIndex] = useState(0)

    const value = {
        projectIndex, 
        setProjectIndex
    }

    return<UIContext.Provider value ={value} >{children}</UIContext.Provider>
}