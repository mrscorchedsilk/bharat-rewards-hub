
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				bharat: {
					'50': '#f0f9ff',
					'100': '#e0f2fe',
					'200': '#bae6fd',
					'300': '#7dd3fc',
					'400': '#38bdf8',
					'500': '#0ea5e9',
					'600': '#0284c7',
					'700': '#0369a1',
					'800': '#075985',
					'900': '#0c4a6e',
				},
				neon: {
					'blue': '#38bdf8',
					'cyan': '#06b6d4',
					'teal': '#0891b2',
					'purple': '#8b5cf6',
					'pink': '#ec4899',
				},
				gold: {
					'50': '#fffbeb',
					'100': '#fef3c7',
					'200': '#fde68a',
					'300': '#fcd34d',
					'400': '#fbbf24',
					'500': '#f59e0b',
					'600': '#d97706',
					'700': '#b45309',
					'800': '#92400e',
					'900': '#78350f',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			spacing: {
				'safe-top': 'env(safe-area-inset-top)',
				'safe-bottom': 'env(safe-area-inset-bottom)',
				'safe-left': 'env(safe-area-inset-left)',
				'safe-right': 'env(safe-area-inset-right)',
			},
			scale: {
				'98': '0.98',
				'102': '1.02',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-out-left': {
					'0%': { transform: 'translateX(0)', opacity: '1' },
					'100%': { transform: 'translateX(-100%)', opacity: '0' }
				},
				'slide-in-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-out-down': {
					'0%': { transform: 'translateY(0)', opacity: '1' },
					'100%': { transform: 'translateY(100%)', opacity: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'scale-out': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'100%': { transform: 'scale(0.95)', opacity: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'float-gentle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'shimmer': {
				  '0%': { backgroundPosition: '-200% 0' },
				  '100%': { backgroundPosition: '200% 0' },
				},
				'pulse-glow': {
					'0%, 100%': { 
						textShadow: '0 0 20px rgba(56, 189, 248, 0.8), 0 0 40px rgba(56, 189, 248, 0.6)',
						transform: 'scale(1)'
					},
					'50%': { 
						textShadow: '0 0 30px rgba(56, 189, 248, 1), 0 0 60px rgba(56, 189, 248, 0.8)',
						transform: 'scale(1.02)'
					}
				},
				'bounce-glow': {
					'0%, 100%': { 
						transform: 'translateY(0)',
						boxShadow: '0 0 20px rgba(56, 189, 248, 0.6)'
					},
					'50%': { 
						transform: 'translateY(-5px)',
						boxShadow: '0 5px 25px rgba(56, 189, 248, 0.8)'
					}
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-out-left': 'slide-out-left 0.3s ease-out',
				'slide-in-up': 'slide-in-up 0.3s ease-out',
				'slide-out-down': 'slide-out-down 0.3s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'scale-out': 'scale-out 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-gentle': 'float-gentle 4s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'bounce-glow': 'bounce-glow 2s ease-in-out infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'shimmer': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.2) 75%, rgba(255,255,255,0) 100%)',
				'neon-gradient': 'linear-gradient(45deg, #38bdf8, #06b6d4, #0891b2)',
				'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
			},
			boxShadow: {
				'glass': '0 4px 30px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
				'glass-lg': '0 8px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
				'button': '0 2px 10px rgba(56, 189, 248, 0.4)',
				'card': '0 4px 20px rgba(0, 0, 0, 0.1)',
				'neon': '0 0 20px rgba(56, 189, 248, 0.6), 0 0 40px rgba(56, 189, 248, 0.3)',
				'neon-lg': '0 0 30px rgba(56, 189, 248, 0.8), 0 0 60px rgba(56, 189, 248, 0.4)',
				'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
				'medium': '0 4px 12px rgba(0, 0, 0, 0.1)',
			},
			backdropBlur: {
				'glass': 'blur(16px)',
				'xs': 'blur(2px)',
			},
			transitionDuration: {
				'2000': '2000ms',
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce-gentle': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
