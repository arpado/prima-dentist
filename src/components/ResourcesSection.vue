<template>
  <div id="resources" class="offset">
    <div class="fixed-background">
      <div class="textbox row text-center" ref="resourcesContainer">
        <div class="col-md-12">
          <h3 class="heading">{{ $t('resources.title') }}</h3>
          <div class="heading-underline"></div>
        </div>
        <div class="resource col-md-4" v-for="(resource, index) in resources" :key="index" ref="resourceBlocks">
          <h3>{{ $t(resource.title) }}</h3>
          <i :class="resource.iconClassList"></i>
          <p>{{ $t(resource.text) }}</p>
        </div>
      </div>
      <div class="overlay"></div>
    </div>
  </div>
</template>

<script>
import { animate, inView } from 'motion'

export default {
  name: 'resources',
  data() {
    return {
      resources: [
        {
          title: 'resources.item1.title',
          text: 'resources.item1.text',
          iconClassList: 'fas fas fa-star fa-3x'
        },
        {
          title: 'resources.item2.title',
          text: 'resources.item2.text',
          iconClassList: 'fas fa-smile fa-3x'
        },
        {
          title: 'resources.item3.title',
          text: 'resources.item3.text',
          iconClassList: 'fas fa-syringe fa-3x'
        }
      ]
    }
  },
  mounted() {
    const stop = inView(
      this.$refs.resourcesContainer,
      () => {
        this.$refs.resourceBlocks.forEach((elem, index) => {
          animate(elem, { opacity: [0, 1] }, { duration: 2, delay: index })
        })
      },
      { margin: '0px 0px -50% 0px' }
    )
  },
  beforeUnmount() {
    stop()
  },
}
</script>

<style scoped>
#resources:before {
  display: block;
  content: '';
  height: 3.6rem;
  margin-top: -3.6rem;
}
.fixed-background {
  position: relative;
  background-image: url('../assets/images/bg2.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
.fixed-background::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
}

.textbox {
  color: white;
  padding: 7rem 2rem;
  max-width: 1200px;
  margin: auto;
  row-gap: 2rem;
  justify-content: center;
  align-items: center;
}
.heading {
  font-size: var(--font-title-md);
  font-weight: bold;
  text-transform: uppercase;
}
.resource {
  display: grid;
  grid-template-rows: 70px 120px 1fr;
  text-align: center;
  opacity: 0;
  padding: 2rem 0;
}
.resource h3 {
  font-size: var(--font-title-md);
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 0.4rem;
}
.resource p {
  font-size: 1.1rem;
}
.resource > svg {
  margin: auto;
  color: lightblue;
}
@media (min-width: 375px) {
  .heading {
    font-size: var(--font-title-xl);
  }
}
</style>
