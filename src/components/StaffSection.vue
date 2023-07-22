<template>
   <div id="staff" class="offset">
        <div class="jumbotron">
            <div class="col-md-12 text-center">
                <h3 class="heading">A Prima fogászat csapata</h3>
                <div class="heading-underline"></div>
            </div>
            <div class="row ">
                <div class="col-md-6 doctor" v-for="(doctor, index) in doctors" :key="index">
                    <div class="doctor-card">
                        <div class="col-md-4 doctor-card-image-container">
                            <img :src="`../../src/assets/images/${doctor.pic}`" />
                        </div>
                        <div class="col-md-8">
                            <blockquote>
                                <div>
                                    <i class="fas fa-quote-left"></i>
                                    <span>{{ doctor.text }}</span>
                                </div>
                                <div>
                                    <hr class="doctor-hr" />
                                    <cite>&#8212; {{ doctor.name }}, {{ doctor.title }}</cite>
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
export default {
    data() {
        return {
            doctors: [
                {
                    name: "Kis Pál",
                    title: "Fogorvos",
                    text: "Igyekszem odaadóan, lelkiismeretesen és precízen ellátni a rám bízott feladatokat.",
                    pic: "client_4.jpg"
                },
                {
                    name: "Kovács Anna",
                    title: "Fogorvos",
                    text: "Elkötelezett vagyok a kiemelkedő szintű fogászati ellátás nyújtásában",
                    pic: "client_3.jpg"
                },
            ]
        }
    }
}
</script>

<style scoped>
#staff::before {
    display: block;
    content: "";
    height: 3.7rem;
    margin-top: -3.7rem;
}
#stuff .narrow {
    width: 90%;
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
.doctor img {
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
    color: #79C7FF;
    margin: 0.3rem;
}

.doctor-hr {
    border-top: 0.05rem solid #79C7FF;
}
@media (min-width: 500px) {
    .doctor-card {
        flex-direction: row;
    }
}
</style>