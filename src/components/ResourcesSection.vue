<template>
    <div id="resouces" class="offset">
        <div class="fixed-background">
            <div class="textbox row text-center">
                <div class="col-md-12">
                    <h3 class="heading">MIÉRT VÁLASSZON MINKET?</h3>
                    <div class="heading-underline"></div>
                </div>
                <div class="resource col-md-4" v-for="(resource, index) in resources" :key="index">
                    <h3>{{ resource.title }}</h3>
                        <i :class="resource.iconClassList"></i>
                    <p class="lead">{{ resource.text }}</p>
                </div>
            </div>
            <div class="overlay"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "resources",
    data() {
        return {
            resources: [
                {
                    title: "Bizonyítékokon alapuló fogorvoslás",
                    text: "A fogászati ellátást nem lehet kizárólag a fogorvos egyéni tapasztalatára építeni, hanem elengedhetetlen a folyamatos tanulás és a rendelkezésre álló legfrisseb fogászati kutatások naprakész ismerete.",
                    iconClassList: "fas fas fa-star fa-3x"
                },                
                {
                    title: "Teljeskörű tájékoztatás",
                    text: "Röntgenfelvételek és -ha szükséges- arc- és szájüregi fotók, valamint lenyomatok alapján komplex kezelési tervet készítünk és mindenre kiterjedő, részletes tájékoztatást nyújtunk a lehetséges fogorvosi kezelések menetére, árára vonatkozóan.",
                    iconClassList: "fas fa-smile fa-3x"
                },
                {
                    title: "Bizonyítékokon alapuló fogorvoslás",
                    text: "A fogászati ellátást nem lehet kizárólag a fogorvos egyéni tapasztalatára építeni, hanem elengedhetetlen a folyamatos tanulás és a rendelkezésre álló legfrisseb fogászati kutatások naprakész ismerete.",
                    iconClassList: "fas fa-syringe fa-3x"
                },
            ]
        }
    }
};
</script>

<style scoped>
#resouces:before {
    display: block;
    content: "";
    height: 3.6rem;
    margin-top: -3.6rem;
}
.fixed-background {
    position: relative;
    background-image: url("../assets/images/bg2.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
}
.fixed-background::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75); ;
}

.textbox {
    color: white; 
    padding: 7rem 2rem;
    max-width: 1200px;
    margin: auto;
    row-gap: 2rem;
}
.resource {
    display: grid;
    grid-template-rows: 70px 120px 1fr;
    text-align: center;
}
.resource > svg,
.resource > h3 {
    margin: auto;
    color: lightblue;
}
</style>
