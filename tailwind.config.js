module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
        },
        extend: {
            colors: {
                primary: {
                    100: '#fedbc4',
                    200: '#fec19a',
                    300: '#feaa74',
                    400: '#fd914a',
                    500: '#fd7f2c',
                    600: '#fd7b26',
                    700: '#fd771f',
                    800: '#fd7318',
                    900: '#ff6500',
                },
                gray: {
                    100: '#f7fafc',
                    200: '#edf2f7',
                    300: '#e2e8f0',
                    400: '#cbd5e0',
                    500: '#a0aec0',
                    600: '#718096',
                    700: '#4a5568',
                    800: '#2d3748',
                    900: '#1a202c',
                },
                green: {
                    100: '#f0fff4',
                    200: '#c6f6d5',
                    300: '#9ae6b4',
                    400: '#68d391',
                    500: '#48bb78',
                    600: '#38a169',
                    700: '#2f855a',
                    800: '#276749',
                    900: '#22543d',
                },
            },
            lineHeight: {
                hero: '3.7rem',
            },
            opacity: {
                10: '.1',
            },
            width: {
                'fit-content': 'fit-content',
            },
        },
    },
    plugins: [],
};
