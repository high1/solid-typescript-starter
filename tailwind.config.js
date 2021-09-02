module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['src/**/*.{html,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        scale: 'scale infinite 1.6s ease-in-out alternate',
      },
      keyframes: {
        scale: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.06)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
