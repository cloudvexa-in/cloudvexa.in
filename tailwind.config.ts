import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Cloudvexa Brand Colors
                cloud: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                    white: '#ffffff',
                },
                deep: {
                    blue: {
                        50: '#1a2847',
                        100: '#152038',
                        200: '#0f1829',
                        300: '#0A1128',
                        400: '#050a14',
                    },
                },
                neon: {
                    cyan: '#00F0FF',
                    blue: '#0070F3',
                    violet: '#8A2BE2',
                    purple: '#7928CA',
                },
                glass: {
                    light: 'rgba(255, 255, 255, 0.1)',
                    dark: 'rgba(0, 0, 0, 0.2)',
                },
                // Cloudvexa Re-Architecture Tokens
                'cv-black': '#05070E',
                'cv-subtle': '#0B0F19',
                'cv-card': 'rgba(15, 23, 42, 0.65)',
            },
            fontFamily: {
                sans: ['Geist', 'Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
                mono: ['Geist Mono', 'JetBrains Mono', 'monospace'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-cyber': 'linear-gradient(135deg, #0A1128 0%, #1E3A8A 50%, #00D9FF 100%)',
                'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            },
            backdropBlur: {
                xs: '2px',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
                'fade-in': 'fadeIn 0.6s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px #00D9FF, 0 0 10px #00D9FF' },
                    '100%': { boxShadow: '0 0 10px #00D9FF, 0 0 20px #00D9FF, 0 0 30px #00D9FF' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                'glow-cyan': '0 0 30px rgba(0, 240, 255, 0.4)',
                'glow-blue': '0 0 30px rgba(0, 112, 243, 0.4)',
                'glow-violet': '0 0 30px rgba(122, 40, 202, 0.4)',
                'neon': '0 0 5px #00F0FF, 0 0 20px #00F0FF',
                'neon-blue': '0 0 5px #0070F3, 0 0 20px #0070F3',
            },
        },
    },
    plugins: [],
}

export default config
