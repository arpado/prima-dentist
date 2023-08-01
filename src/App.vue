<template>
  <main id="app" ref="app">
    <HeaderSection @change-locale="changeLocale" :currentSection="currentSection" />
    <HomeSection ref="home" />
    <IntroductionSection ref="introduction" />
    <FeaturesSection ref="features" />
    <ResourcesSection ref="resources" />
    <StaffSection ref="staff" />
    <ContactSection ref="contact" />
    <FooterSection />
  </main>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import HomeSection from './components/HomeSection.vue'
import IntroductionSection from './components/IntroductionSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import ResourcesSection from './components/ResourcesSection.vue'
import StaffSection from './components/StaffSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'app',
  components: {
    HeaderSection,
    HomeSection,
    IntroductionSection,
    FeaturesSection,
    ResourcesSection,
    StaffSection,
    ContactSection,
    FooterSection
  },
  data() {
    return {
      currentSection: null
    }
  },
  setup() {
    const { t, locale, setLocale } = useI18n()

    const changeLocale = (lang) => {
      locale._setter(lang)
    }

    return {
      t,
      locale,
      changeLocale
    }
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            this.currentSection = entry.target.getAttribute('id')
          }
        })
      },
      {
        // root: this.$refs.app,
        rootMargin: '-60px 0px -80% 0px',
        // threshold: 1
      }
    )
    
    const sectionArray = [this.$refs.home.$el, this.$refs.introduction.$el, this.$refs.features.$el, this.$refs.resources.$el, this.$refs.staff.$el, this.$refs.contact.$el]

    sectionArray.forEach(elem => {
      observer.observe(elem)
    })
  }
}
</script>
<style>
html {
  scroll-behavior: smooth;
}
body {
  overflow-x: hidden;
  color: #505962;
  font-family: 'Noto Sans', sans-serif;
}
.offset:before {
  display: block;
  content: '';
  height: 4rem;
  margin-top: -4rem;
}
.narrow {
  width: 75%;
  margin: 1.5rem auto;
  padding-top: 2rem;
}
.narrow h1 {
  font-size: 2.4rem;
}
.jumbotron {
  margin-top: 0;
  margin-bottom: 0;
  padding: 2rem 0 3.5rem;
  border-radius: 0;
}
.btn-lg {
  border-width: medium;
  border-radius: 0;
  padding: 0.6rem 1.3rem;
  font-size: 1.1rem;
}
.btn-secondary {
  border-width: medium;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 1.2rem;
  padding: 0.6rem 1.2rem;
  margin: 1rem;
  color: white !important;
  background-color: #109cff;
  border-color: #79c7ff;
}
.btn-md {
  border-radius: 2rem;
}
.btn-lg:hover,
.btn-secondary:hover {
  background-color: #109cff;
  border-color: #79c7ff;
}
h3.heading {
  font-size: 1.9rem;
  font-weight: 700;
  text-transform: uppercase;
  /* margin-bottom: 1.9rem; */
}
.heading-underline {
  width: 12rem;
  height: 0.2rem;
  background-color: #79c7ff;
  margin: 0 auto 2rem;
}
.feature svg.svg-inline--fa {
  color: #79c7ff;
}
</style>
