// tailwind.config.js
module.exports = {
    darkMode: 'class', // 
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            // Add custom shadows if you want
        },
        corePlugins: {
            backdropBlur: true,
        },
    },
    plugins: [],
};

