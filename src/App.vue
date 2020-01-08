<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <router-view/>
    </div>
    <div class="g-footer-container">
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
  import vfooter from 'components/footer';
  export default {
    name: 'App',
    components: {
      'v-footer': vfooter
    }
  };

</script>
