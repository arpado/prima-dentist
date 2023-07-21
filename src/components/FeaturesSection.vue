<template>
    <div id="features" class="offset">
        <div class="jumbotron">
            <div class="narrow text-center">
                <div class="col-md-12 text-center">
                    <h3 class="heading">Szolgátatásaink</h3>
                    <div class="heading-underline"></div>
                </div>
                <div class="row text-center">
                    <div class="col-md-4" v-for="(feature, index) in features" :key="index">
                        <div class="feature">
                            <i
                                :class="feature.iconClassList"
                                :data-fa-transform="feature.dataFaTransform"
                            ></i>
                            <h3>{{ feature.title }}</h3>
                            <p>{{ feature.text }}</p>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "features",
    data() {
        return {
            features: [
                {
                    title: "Fogmegtartó kezelések",
                    text: "Fogmegtartó kezeléseink során a fájdalom megszüntetetésén túl mindent elkövetünk, hogy fogait még hosszú évekig gond nélkül tudja használni.",
                    iconClassList: "fas fas fa-star fa-4x",
                    dataFaTransform: "shrink-4.5 up-4.5"
                },                
                {
                    title: "Fogpótlások",
                    text: "A fogpótlásokkal - legyen az akár híd, korona, kivehető fogsor vagy implantátum-, visszaadjuk önbizalmát és nem utolsó sorban rágóképességét",
                    iconClassList: "fas fa-smile fa-4x",
                    dataFaTransform: "shrink-4.5 up-4.5"
                },
                {
                    title: "Esztétikai beavatkozás",
                    text: "Nem csak ép, de gyökérkezelt fogak fehérítését is elvégezzük, illetve orvosi hozzáértéssel helyezzük fel a páciens által választott fogékszereket is.",
                    iconClassList: "fas fa-syringe fa-4x",
                    dataFaTransform: "shrink-4 up-5"
                },
            ]
        }
    }
};
</script>
<style scoped>
#features .narrow{
    padding-top: 0;
}
#features:before {
    display: block;
    content: "";
    height: 3.7rem;
    margin-top: -3.7rem;
}
.feature {
    display: grid;
    grid-template-rows: 120px 70px 1fr;
    text-align: center;
}
.feature > svg {
    margin: auto;
}
.feature h3 {
    font-size: 1.3rem;
    text-transform: uppercase;
    padding-bottom: 0.4rem;
}
.feature p {
    font-size: 1.1rem;
}
</style>
