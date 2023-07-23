<template>
  <div id="home">
    <div class="hero home-hero">
      <div class="overlay"></div>
    </div>
    <div class="caption text-center">
      <h1>{{ $t('title') }}</h1>
      <h3>{{ $t('text') }}</h3>
      <a href="#contact" class="btn btn-secondary btn-md">{{ $t('button') }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted() {
    location.href = '/#home'
  }
}
</script>
<style scoped>
.hero {
  height: 100vh;
  width: 100%;
  position: relative;
}
.hero .overlay {
  position: absolute;
  top: 0;
  height: 100vh;
  height: 100dvh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.home-hero {
  background-image: url('../assets/images/bg3.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.caption {
  position: absolute;
  top: 35%;
  width: 100%;
  color: white;
  text-transform: uppercase;
}
.caption h1 {
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.3rem;
  line-height: 3.5rem;
  text-shadow: 0.1rem 0.1rem 0.8rem black;
  /* padding-bottom: 2rem; */
  padding: 1rem 0.5rem;
}
.caption h3 {
  font-size: 1.5rem;
  line-height: 2rem;
  text-shadow: 0.1rem 0.1rem 0.8rem black;
  /* padding-bottom: 2rem; */
  padding: 1rem;
}
@media (min-width: 384px) {
  .caption h1 {
    font-size: 3.8rem;
    line-height: 5rem;
  }
  .caption h3 {
    font-size: 2rem;
    line-height: 3rem;
  }
}
</style>
