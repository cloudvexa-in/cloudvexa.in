export type Theme = 'light' | 'dark' | 'custom' | 'ocean' | 'forest' | 'sunset'

export const themes: Theme[] = ['light', 'dark', 'custom', 'ocean', 'forest', 'sunset']

export const themeConfig = {
    light: {
        name: 'Light',
        description: 'Clean and bright theme',
        icon: '☀️',
        color: 'bg-white',
    },
    dark: {
        name: 'Dark',
        description: 'Easy on the eyes',
        icon: '🌙',
        color: 'bg-deep-blue-900',
    },
    custom: {
        name: 'Custom',
        description: 'Purple fusion theme',
        icon: '✨',
        color: 'bg-neon-purple',
    },
    ocean: {
        name: 'Ocean',
        description: 'Deep blue and teal',
        icon: '🌊',
        color: 'bg-cyan-500',
    },
    forest: {
        name: 'Forest',
        description: 'Natural emerald tones',
        icon: '🌲',
        color: 'bg-emerald-500',
    },
    sunset: {
        name: 'Sunset',
        description: 'Warm orange and red',
        icon: '🌅',
        color: 'bg-rose-500',
    },
}

export function getTheme(): Theme {
    if (typeof window === 'undefined') return 'dark'

    const stored = localStorage.getItem('cloudvexa-theme') as Theme
    if (stored && themes.includes(stored)) return stored

    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
    }

    return 'light'
}

export function setTheme(theme: Theme) {
    if (typeof window === 'undefined') return

    localStorage.setItem('cloudvexa-theme', theme)
    document.documentElement.classList.remove(...themes)
    document.documentElement.classList.add(theme)
}
