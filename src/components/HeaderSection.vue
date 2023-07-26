<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top">
    <a href="#home" class="navbar-brand">
      <img src="@/assets/images/logo.png" alt="Brand" />
    </a>
    <button
      type="button"
      class="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarResponsive"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collpase navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-for="(link, index) in links" :key="index">
          <a :href="link.href" class="nav-link">{{ $t(link.name) }}</a>
        </li>
      </ul>
      <div class="language-selector">
        <label for="lang-select">Language:</label>
        <select
          name=""
          id="lang-select"
          v-model="selectedLang"
          @change="$emit('changeLocale', selectedLang)"
        >
          <option value="en">English</option>
          <option value="de">Deutsch</option>
          <option value="da">Dansk</option>
          <option value="hu">Magyar</option>
        </select>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'navbar.home',
          href: '#home'
        },
        {
          name: 'navbar.aboutUs',
          href: '#introduction'
        },
        {
          name: 'navbar.services',
          href: '#features'
        },
        {
          name: 'navbar.staff',
          href: '#staff'
        },
        {
          name: 'navbar.contacts',
          href: '#contact'
        },
      ],
      selectedLang: 'en'
    }
  }
}
</script>

<style scoped>
.navbar {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  max-width: 1400px;
  margin: auto;
  isolation: isolate;
}
.navbar::before {
  content: '';
  background-color: rgba(0, 0, 0, 0.7) !important;
  height: 100%;
  width: 100vw;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
}
.navbar-brand img {
  height: 2rem;
}
.navbar-toggler {
  outline: none !important;
}
.navbar-nav li {
  padding-right: 0.5rem;
}
.navbar .navbar-nav .nav-link {
  color: white;
  padding-top: 0.8rem;
}
.navbar .navbar-nav .nav-link.active,
.navbar .navbar-nav .nav-link:hover {
  color: #79c7ff;
  cursor: pointer;
}
.nav-item:last-child {
  margin-right: 1rem;
}
.language-selector {
  display: flex;
  flex-direction: column;
  color: white;
  padding-right: 0.5rem;
  margin-top: 0.5rem;
}
#lang-select {
  width: fit-content;
}
</style>