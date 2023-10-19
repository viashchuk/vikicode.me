import lightningcss from 'vite-plugin-lightningcss';


export default {
  plugins: [
    lightningcss({
      browserslist: '>= 0.25%',
    })
  ],
};