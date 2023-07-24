<template>
  <div id="footer" class="offset">
    <footer>
      <div class="main-container justify-content-center">
        <div class="col-md-5 text-center">
          <!-- <img src="../assets/images/logo.png" /> -->
          <!-- <p>
                        At our core is a collection of design and development
                        solutions that represent everything your business needs
                        to compete in the modern marketplace.
                    </p> -->
          <strong class="subtitle">Contact Info.</strong>
          <p>(000) 000-0000<br />email@email.com</p>
        </div>
        <div class="col-md-5 text-center">
          <strong class="subtitle">Find Us On:</strong>
          <br />
          <a href="#"><i class="fab fa-facebook-square fa-3x"></i></a>
          <a href="#"><i class="fab fa-twitter-square fa-3x"></i></a>
          <a href="#"><i class="fab fa-youtube-square fa-3x"></i></a>
        </div>
      </div>
      <hr class="footer-hr" />
      <p class="text-center">Arculattervezés, honlaptervezés: JoMagam &copy; 2022</p>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'contact'
}
</script>
<style scoped>
#contact:before {
  display: block;
  content: '';
  height: 1.6rem;
  margin-top: -1.6rem;
}
.main-container{
  display: flex;
  flex-wrap: wrap;
}
footer {
  background-color: #40474e;
  color: white;
  padding: 0.7rem 0;
  margin-top: 2rem;
}
footer img {
  width: 100%;
  margin-top: 1.5rem;
}
footer a {
  color: white;
}
.subtitle {
  line-height: 3rem;
}
footer svg.svg-inline--fa {
  /* font-size: 2.6rem; */
  margin: 0 0.5rem;
}

footer svg.svg-inline--fa:hover {
  color: #1ebba3 !important;
}
</style>
