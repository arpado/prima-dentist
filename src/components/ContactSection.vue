<template>
    <div id="clients" class="offset">
        <div class="jumbotron">
            <!-- <div class="col-md-12 text-center">
                <h3 class="heading">A Prima fogászat csapata</h3>
                <div class="heading-underline"></div>
            </div>
            <div class="row narrow">
                <div class="col-md-6 client">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="../assets/images/client_4.jpg" />
                        </div>
                        <div class="col-md-8">
                            <blockquote>
                                <i class="fas fa-quote-left"></i>
                                Igyekszem odaadóan, lelkiismeretesen és precízen ellátni a rám bízott feladatokat.
                                <hr class="client-hr" />
                                <cite>&#8212; Kis Pál, Fogorvos</cite>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 client">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="../assets/images/client_3.jpg" />
                        </div>
                        <div class="col-md-8">
                            <blockquote>
                                <i class="fas fa-quote-left"></i>
                                Elkötelezett vagyok a kiemelkedő szintű fogászati ellátás nyújtásában
                                <hr class="client-hr" />
                                <cite>&#8212; Kovács Anna, Fogorvos</cite>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div> -->
            <iframe allowfullscreen="" aria-hidden="false" frameborder="0" height="600"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2457.9970327219767!2d20.159241048239483!3d46.250062633888895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe476cb973a27eef7!2sLiget%20Fog%C3%A1szati%20%C3%A9s%20Fogszab%C3%A1lyoz%C3%A1si%20Rendel%C5%91%20-%20Dr.%20V%C3%B6r%C3%B6s%20Laura%20Fogorvos%20Szeged!5e0!3m2!1sen!2shu!4v1604252891137!5m2!1sen!2shu"
                style="border:0;" tabindex="0" width="100%"></iframe>

        </div>
        <div class="col-md-12 narrow text-center">
            <!-- <p class="lead">
                Online bejelentkezés
            </p> -->
            <h3 class="heading">Online bejelentkezés</h3>

            <div class="col-md-12 narrow text-center">
                <!-- <p class="lead">
                Online bejelentkezés
            </p> -->
                <!-- TODO: align the text boxes and make a bit nicer look -->
                <form @submit.prevent="submit" @reset="onReset">
                    <div>
                        <label>név: </label>
                        <input v-model="name" />
                    </div>

                    <div>
                        <label>email: </label>
                        <input v-model="email" />
                    </div>

                    <div>
                        <label>üzenet: </label>
                        <textarea v-model="message"></textarea>
                    </div>

                    
                    <button type="reset" class="btn btn-secondary btn-md">küldés</button>
                </form>


            </div>


        </div>
    </div>
</template>
<script>
export default {
    name: "clients",
    data() {
        return {
            name: '',
            email: '',
            message: '',
        }
    }
};
</script>
<style>
#clients::before {
    display: block;
    content: "";
    height: 3.7rem;
    margin-top: -3.7rem;
}

#clients .jumbotron {
    padding-bottom: 0;
}

#clients .narrow {
    width: 90%;
}
</style>
