<template>
  <div id="staff" class="offset">
    <div class="jumbotron">
      <div class="col-md-12 text-center">
        <h3 class="heading">{{ $t('staff.title') }}</h3>
        <div class="heading-underline"></div>
      </div>
      <div class="staff-container row" ref="staffContainer">
        <div
          class="col-md-6 doctor-container"
          v-for="(doctor, index) in doctors"
          :key="index"
          ref="staffBlocks"
        >
          <div class="doctor-card">
            <div class="col-md-4 doctor-card-image-container">
              <!-- <img :src="`@/assets/images/${doctor.pic}`" /> -->
              <img :src="getPic(doctor.pic)" />
            </div>
            <div class="col-md-8">
              <blockquote>
                <div>
                  <i class="fas fa-quote-left"></i>
                  <span class="testimony">{{ $t(doctor.text) }}</span>
                </div>
                <div>
                  <hr class="doctor-hr" />
                  <cite>&#8212; {{ $t(doctor.name) }}, {{ $t(doctor.title) }}</cite>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { animate, inView } from 'motion'

export default {
  data() {
    return {
      doctors: [
        {
          name: 'staff.doctor1.name',
          title: 'staff.doctor1.title',
          text: 'staff.doctor1.text',
          pic: 'client_4.jpg'
        },
        {
          name: 'staff.doctor2.name',
          title: 'staff.doctor2.title',
          text: 'staff.doctor2.text',
          pic: 'client_3.jpg'
        }
      ]
    }
  },
  methods: {
    getPic(pic) {
      return `/images/${pic}`
    }
  },
  mounted() {
    const stop = inView(
      this.$refs.staffContainer,
      () => {
        this.$refs.staffBlocks.forEach((elem, index) => {
          animate(elem, { opacity: [0, 1] }, { duration: 2, delay: index })
        })
      },
      { margin: '0px 0px -50% 0px' }
    )
  },
  beforeUnmount() {
    stop()
  }
}
</script>

<style scoped>
#staff::before {
  display: block;
  content: '';
  height: 3.7rem;
  margin-top: -3.7rem;
}
.staff-container {
  width: 90%;
  margin: auto;
}
.doctor-container {
  margin: 2rem 0;
  opacity: 0;
}
.doctor-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.doctor-card-image-container {
  min-width: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.doctor-container img {
  display: block;
  width: 80%;
  border-radius: 50%;
  margin: auto;
}
blockquote {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
blockquote .svg-inline--fa {
  color: #79c7ff;
  margin: 0.3rem;
}
.testimony {
  font-size: var(--font-text-md);
}

.doctor-hr {
  border-top: 0.05rem solid #79c7ff;
}
@media (min-width: 500px) {
  .doctor-card {
    flex-direction: row;
  }
  .testimony {
    font-size: var(--font-text-l);
  }
}
</style>