<script>
  export let name;
</script>

<h1>
  Hello
  <span>{name}</span>
  !
</h1>

<style>
  h1 {
    display: flex; /* check autoprefixer in prod mode */
    margin: 0;
    color: tomato;

    & span {
      margin-inline-start: 1rem; /* svelte warn: unused css selector */
      margin-inline-end: 1rem; /* svelte warn: unused css selector */
      color: royalblue;

      /*
       * becomes to:
       *
       * unused selector -> [dir="rtl"]
       *
       * [dir="ltr"] h1 span {
       *   margin-left: 1rem
       *   margin-right: 1rem
       *   color: royalblue;
       * }
       */
    }
  }
</style>
