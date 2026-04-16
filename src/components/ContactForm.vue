<template>
  <form class="contact-form visual-card" @submit.prevent="handleSubmit">
    <div class="contact-form-head full-width">
      <span class="mini-kicker">Solicitud online</span>
      <h3>Déjenos sus datos y le contactaremos pronto</h3>
    </div>

    <label class="form-field">
      <span class="field-label">Nombre <span>*</span></span>
      <input v-model.trim="form.name" type="text" placeholder="Ingrese su nombre completo." required />
    </label>

    <label class="form-field">
      <span class="field-label">Apellidos <span>*</span></span>
      <input v-model.trim="form.lastName" type="text" placeholder="Ingrese sus apellidos." required />
    </label>

    <label class="form-field">
      <span class="field-label">Correo electrónico <span>*</span></span>
      <input v-model.trim="form.email" type="email" placeholder="Ingrese su correo." required />
    </label>

    <label class="form-field">
      <span class="field-label">Teléfono</span>
      <input v-model.trim="form.phone" type="tel" placeholder="Ingrese su teléfono." />
    </label>

    <label class="form-field full-width">
      <span class="field-label">Mensaje <span>*</span></span>
      <textarea
        v-model.trim="form.message"
        rows="6"
        placeholder="Explíquenos brevemente su consulta."
        required
      ></textarea>
    </label>

    <p v-if="feedback.text" :class="['form-feedback', feedback.type]">
      {{ feedback.text }}
    </p>

    <button class="button button-solid full-width" type="submit" :disabled="loading">
      {{ loading ? 'Enviando...' : 'Enviar solicitud' }}
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const apiBase = import.meta.env.VITE_API_URL || ''

const form = reactive({
  name: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
})

const loading = ref(false)
const feedback = reactive({
  type: '',
  text: ''
})

const resetForm = () => {
  form.name = ''
  form.lastName = ''
  form.email = ''
  form.phone = ''
  form.message = ''
}

const handleSubmit = async () => {
  loading.value = true
  feedback.type = ''
  feedback.text = ''

  try {
    const response = await fetch(`${apiBase}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || 'No se pudo enviar la solicitud.')
    }

    feedback.type = 'success'
    feedback.text = 'Hemos recibido tu solicitud. Te contactaremos lo antes posible.'
    resetForm()
  } catch (error) {
    feedback.type = 'error'
    feedback.text = error.message || 'Ha ocurrido un error al enviar el formulario.'
  } finally {
    loading.value = false
  }
}
</script>
