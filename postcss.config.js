module.exports = ({ prod }) => ({
  plugins: {
    'postcss-preset-env': {
      stage: 0,
      autoprefixer: prod,
    },
  },
});
