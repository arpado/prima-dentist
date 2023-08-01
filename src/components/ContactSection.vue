<template>
  <div id="contact" class="offset">
    <div class="jumbotron">
      <div class="col-md-12 text-center">
        <h3 class="heading">{{ $t('contacts.title1') }}:</h3>
        <div class="heading-underline"></div>
      </div>
      <div class="contacts-container">
        <div class="contacts-section">
          <h3>Find Us</h3>
          <div>
            <p>{{ $t('contacts.email.label') }}:<br />{{ $t('contacts.email.value') }}</p>
            <p>{{ $t('contacts.telephone.label') }}:<br />{{ $t('contacts.telephone.value') }}</p>
          </div>
          <div>
            <p>
              {{ $t('contacts.address.label') }}:<br />{{ $t('contacts.address.street') }},<br />{{
                $t('contacts.address.postCode')
              }},<br />{{ $t('contacts.address.city') }}, {{ $t('contacts.address.country') }}
            </p>
          </div>
        </div>
        <iframe
          allowfullscreen=""
          aria-hidden="false"
          frameborder="0"
          height="600"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2457.9970327219767!2d20.159241048239483!3d46.250062633888895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe476cb973a27eef7!2sLiget%20Fog%C3%A1szati%20%C3%A9s%20Fogszab%C3%A1lyoz%C3%A1si%20Rendel%C5%91%20-%20Dr.%20V%C3%B6r%C3%B6s%20Laura%20Fogorvos%20Szeged!5e0!3m2!1sen!2shu!4v1604252891137!5m2!1sen!2shu"
          style="border: 0"
          tabindex="0"
          width="100%"
          class="google-map"
        ></iframe>
      </div>
    </div>
    <div class="form-section col-md-12 text-center">
      <h3 class="heading">{{ $t('contacts.title2') }}</h3>
      <div class="heading-underline"></div>
      <div class="col-md-12 text-center">
        <form @submit.prevent="sendMessage" @reset="onReset">
          <div class="form-unit">
            <label for="name-field">{{ $t('contacts.form.name') }}:</label>
            <input id="name-field" :placeholder="$t('contacts.form.placeholder')" v-model="name" />
          </div>

          <div class="form-unit">
            <label for="email-field">{{ $t('contacts.form.email') }}:</label>
            <input
              id="email-field"
              :placeholder="$t('contacts.form.placeholder')"
              v-model="email"
            />
          </div>

          <div class="form-unit">
            <label for="message-field">{{ $t('contacts.form.message') }}:</label>
            <textarea
              id="message-field"
              :placeholder="$t('contacts.form.placeholder')"
              rows="10"
              v-model="message"
            ></textarea>
          </div>

          <button type="submit" class="submit-btn btn btn-secondary btn-md">
            {{ $t('contacts.form.button') }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
  name: 'clients',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    async sendMessage() {
      if (this.name === '' || this.email === '' || this.message === '') {
        toast.error('Please fill out all the fields.')
        return
      }

      const response = await toast.promise(
        fetch('https://formsubmit.co/ajax/2504b17c1cdcf59e3fd818d8e727da33', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message
            // _replyto: this.email,
            // _cc: '',
            // _bcc: '',
            // _template: 'table',
          })
        }),
        {
          pending: 'Sending message...',
          success: {
            render(res) {
              return 'Message Sent Successfully!' // + res.data.message
            }
          },
          error: {
            render(err) {
              return `Failed to Send Message! Error: ${err.data.message}!`
            }
          }
        }
      )
      this.name = this.email = this.message = ''
    }
  }
}
</script>

<style scoped>
#contact {
  overflow-x: clip;
}
#contact::before {
  display: block;
  content: '';
  height: 3.7rem;
  margin-top: -3.7rem;
}
#contact .jumbotron {
  padding: 0 2rem;
}
#contact .narrow {
  width: 90%;
}
.heading {
  font-size: var(--font-title-md);
}
.contacts-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.contacts-container > div {
  flex-basis: auto;
}
.contacts-section {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  font-size: var(--font-text-md);
  margin: 2rem auto;
  border: 4px solid #79c7ff;
  padding: 1rem 3rem;
  border-radius: 10px;
  background: white;
  box-shadow: 1px 1px 5px 0 black;
  max-width: fit-content;
}
.contacts-section > div {
  width: 250px;
}
.contacts-section p {
  font-weight: bolder;
}
.google-map {
  margin: 2rem auto;
}
.form-section {
  margin: 4rem auto;
}
form {
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-unit {
  width: 100%;
  text-align: start;
  margin: 0.5rem auto;
}
form label,
form input,
form textarea {
  display: block;
  width: 100%;
}
form label {
  font-size: var(--font-text-md);
  font-weight: bold;
}
form input,
form textarea {
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
}
.submit-btn {
  margin: 1rem auto;
}
@media (min-width: 768px) {
  .heading {
    font-size: var(--font-title-l);
  }
  .contacts-container {
    flex-direction: row;
  }
  .contacts-container > .contacts-section,
  .contacts-container > iframe {
    flex-basis: 50%;
  }
  .contacts-section {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: var(--font-text-l);
  }
}
</style>
