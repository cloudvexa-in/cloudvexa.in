'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { Theme, getTheme, setTheme as setThemeUtil } from '@/lib/theme'

interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>('dark')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const initialTheme = getTheme()
        setThemeState(initialTheme)
        setThemeUtil(initialTheme)
    }, [])

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme)
        setThemeUtil(newTheme)
    }



    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
