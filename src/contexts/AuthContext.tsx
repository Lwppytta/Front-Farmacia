import { createContext, ReactNode, useState } from "react"

interface AuthContextProps {
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [isLoading, setIsLoading] = useState(false)

    return (
        <AuthContext.Provider value={{ isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}