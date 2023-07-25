<template>
  <div id="features" class="offset">
    <div class="jumbotron">
      <!-- <div class="text-center"> -->
      <div class="col-md-12 text-center">
        <h2 class="heading">Szolgátatásaink</h2>
        <div class="heading-underline"></div>
      </div>
      <div class="feature-container row text-center" ref="featureContainer">
        <div
          class="col-md-4 feature"
          v-for="(feature, index) in features"
          :key="index"
          ref="features"
        >
          <!-- <div class=""> -->
          <i :class="feature.iconClassList" :data-fa-transform="feature.dataFaTransform"></i>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.text }}</p>
          <!-- </div> -->
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
import { animate, inView } from 'motion'

export default {
  name: 'features',
  data() {
    return {
      features: [
        {
          title: 'Fogmegtartó kezelések',
          text:
            'Fogmegtartó kezeléseink során a fájdalom megszüntetetésén túl mindent elkövetünk, hogy fogait még hosszú évekig gond nélkül tudja használni.',
          iconClassList: 'fas fas fa-star fa-4x',
          dataFaTransform: 'shrink-4.5 up-4.5'
        },
        {
          title: 'Fogpótlások',
          text:
            'A fogpótlásokkal - legyen az akár híd, korona, kivehető fogsor vagy implantátum-, visszaadjuk önbizalmát és nem utolsó sorban rágóképességét',
          iconClassList: 'fas fa-smile fa-4x',
          dataFaTransform: 'shrink-4.5 up-4.5'
        },
        {
          title: 'Esztétikai beavatkozás',
          text:
            'Nem csak ép, de gyökérkezelt fogak fehérítését is elvégezzük, illetve orvosi hozzáértéssel helyezzük fel a páciens által választott fogékszereket is.',
          iconClassList: 'fas fa-syringe fa-4x',
          dataFaTransform: 'shrink-4 up-5'
        }
      ]
    }
  },
  mounted() {
    const stop = inView(
      this.$refs.featureContainer,
      () => {
        this.$refs.features.forEach((feature, index) => {
          animate(feature, { opacity: [0, 1] }, { duration: 2, delay: index })
        })
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
#features .jumbotron {
  padding: 4rem 1rem 3.5rem;
  margin-bottom: 0;
}
#features:before {
  display: block;
  content: '';
  height: 3.7rem;
  margin-top: -3.7rem;
}
.heading {
  font-size: var(--font-title-md);
  font-weight: bold;
  text-transform: uppercase;
}
.feature-container {
  justify-content: center;
  max-width: 1200px;
  margin: 3rem auto;
}
.feature {
  display: grid;
  grid-template-rows: 120px 70px 1fr;
  text-align: center;
  opacity: 0;
  max-width: 600px;
}
.feature > svg {
  margin: auto;
}
.feature h3 {
  font-size: var(--font-title-md);
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 0.4rem;
}
.feature p {
  font-size: 1.1rem;
}
@media (min-width: 375px) {
  .heading {
    font-size: var(--font-title-xl);
  }
}
</style>
