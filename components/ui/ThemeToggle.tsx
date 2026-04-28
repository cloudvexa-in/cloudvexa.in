'use client'

import { useTheme } from '@/components/providers/ThemeProvider'
import { Theme, themeConfig } from '@/lib/theme'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    // Group custom themes
    const customThemes: Theme[] = ['custom', 'ocean', 'forest', 'sunset']
    const isCustomActive = customThemes.includes(theme)

    return (
        <div className="flex items-center gap-1 glass rounded-full p-1">
            {/* Standard Themes */}
            {(['light', 'dark'] as Theme[]).map((t) => (
                <motion.button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`flex items-center justify-center rounded-full text-xs font-medium transition-all duration-300 ${theme === t
                        ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-deep-blue-300 px-3 py-1.5'
                        : 'text-current hover:bg-white/10 px-2 py-1.5'
                        }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Switch to ${themeConfig[t].name} theme`}
                >
                    <span>{themeConfig[t].icon}</span>
                    {theme === t && (
                        <motion.span
                            initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                            animate={{ width: 'auto', opacity: 1, marginLeft: 4 }}
                            className="whitespace-nowrap overflow-hidden"
                        >
                            {themeConfig[t].name}
                        </motion.span>
                    )}
                </motion.button>
            ))}

            {/* Custom Theme Group */}
            <div className={`flex items-center rounded-full transition-all duration-300 ${isCustomActive ? 'bg-white/10 pr-1' : ''}`}>
                <motion.button
                    onClick={() => !isCustomActive && setTheme('custom')}
                    className={`flex items-center justify-center rounded-full text-xs font-medium transition-all duration-300 ${isCustomActive
                        ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-deep-blue-300 px-3 py-1.5'
                        : 'text-current hover:bg-white/10 px-2 py-1.5'
                        }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Switch to Custom themes"
                >
                    <span>✨</span>
                    {isCustomActive ? (
                        <span className="ml-1">Custom</span>
                    ) : (
                        <span className="hidden">Custom</span>
                    )}
                </motion.button>

                {/* Expanded Custom Options */}
                <AnimatePresence>
                    {isCustomActive && (
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 'auto', opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            className="flex items-center gap-1 overflow-hidden"
                        >
                            {customThemes.map((t) => (
                                <motion.button
                                    key={t}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setTheme(t)
                                    }}
                                    className={`w-6 h-6 rounded-full flex items-center justify-center ml-1 transition-all ${theme === t ? 'ring-2 ring-white scale-110' : 'opacity-70 hover:opacity-100 hover:scale-110'}`}
                                    title={themeConfig[t].name}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={`Switch to ${themeConfig[t].name} theme`}
                                >
                                    <span className="text-[10px]">{themeConfig[t].icon}</span>
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
