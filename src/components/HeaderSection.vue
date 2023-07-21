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
        <li class="nav-item">
          <a href="#home" class="nav-link">CÍMLAP</a>
        </li>
        <li class="nav-item">
          <a href="#introduction" class="nav-link">Rólunk</a>
        </li>
        <li class="nav-item">
          <a href="#courses" class="nav-link">Szolgáltatások</a>
        </li>
        <!-- <li class="nav-item">
                        <a href="#courses"  class="nav-link">Courses</a>
                    </li>
                    <li class="nav-item">
                        <a href="#features"  class="nav-link">Features</a>
                    </li>
                    <li class="nav-item">
                        <a href="#resouces"  class="nav-link">Resouces</a>
                    </li>
                    <li class="nav-item">
                        <a href="#clients"  class="nav-link">Clients</a>
                    </li> -->
        <li class="nav-item">
          <a href="#contact" class="nav-link">Kapcsolat</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
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
</style>