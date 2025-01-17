import { createContext, useState } from "react";

type LoaderContextType = {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void
}

const LoaderContext = createContext<LoaderContextType | null>(null)

export const LoaderContextProvider = ({children}: {children: React.ReactNode}) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoaderContext.Provider value={{isLoading, setIsLoading}}>
            {children}
        </LoaderContext.Provider>
    )
}

export default LoaderContext