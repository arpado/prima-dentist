<template>
  <div id="introduction" class="offset">
    <div class="textbox text-center" ref="introductionBody">
      <!-- col-md-12 -->
      <h2>{{ $t('introduction.title') }}</h2>
      <div class="heading-underline"></div>
      <br />
      <p>{{ $t('introduction.text') }}</p>
      <a href="#contact" class="btn btn-secondary btn-md">{{ $t('introduction.button') }}</a>
    </div>
  </div>
</template>

<script>
import { animate, inView } from 'motion'

export default {
  name: 'introduction',
  mounted() {
    const stop = inView(
      this.$refs.introductionBody,
      () => {
        animate(this.$refs.introductionBody, { opacity: [0, 1] }, { duration: 2 })
      },
      { margin: '0% 0px -50% 0px' }
    )
  },
  beforeUnmount() {
    stop()
  }
}
</script>

<style scoped>
.textbox {
  margin: 1.5rem auto;
  max-width: 1024px;
  padding: 4rem max(1rem, 5%);
  opacity: 0;
}
.textbox h2 {
  font-size: var(--font-title-l);
  font-weight: bold;
  text-transform: uppercase;
}
.textbox p {
  font-size: var(--font-text-md);
}
.textbox > a {
  margin-top: 3rem;
  font-size: var(--font-text-l);
}
@media (min-width: 375px) {
  .textbox h2 {
    font-size: var(--font-title-xl);
  }
  .textbox p {
    font-size: var(--font-text-l);
  }
  .textbox > a {
  font-size: var(--font-text-l);
}
}
</style>
