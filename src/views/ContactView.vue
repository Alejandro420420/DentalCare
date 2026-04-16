<template>
  <main class="section container">
    <SectionIntro
      kicker="Contáctenos"
      title="Estamos A Su Disposición Para Atenderle Y Ayudarle"
      text="Puede contactarnos por cualquiera de estas vías o enviarnos el formulario para solicitar información o una cita."
    />

    <div class="contact-grid">
      <div class="contact-data">
        <div class="contact-item">
          <h3>Teléfono</h3>
          <p>202-555-0188</p>
        </div>
        <div class="contact-item">
          <h3>Correo electrónico</h3>
          <p>emilybedoya1611@gmail.com</p>
        </div>
        <div class="contact-item">
          <h3>Dirección</h3>
          <p>Almensilla, Sevilla</p>
        </div>
        <div class="contact-item">
          <h3>Redes Sociales</h3>
          <p>Facebook · X · Instagram · YouTube · LinkedIn</p>
        </div>
      </div>

      <div class="contact-panel">
        <div class="contact-aside">
          <div class="contact-badge-card">
            <span class="section-kicker">Pedir cita</span>
            <h2 class="contact-form-title">
              Reserve su consulta y le ayudaremos a encontrar la mejor opción para su sonrisa
            </h2>
            <p>
              Cuéntenos qué necesita y prepararemos una respuesta personalizada. Atendemos
              revisiones, prevención, estética dental, urgencias y atención infantil.
            </p>
          </div>

          <div class="appointment-highlight">
            <div class="appointment-glow"></div>
            <strong>Primera revisión orientativa</strong>
            <p>Un contacto más claro, cercano y cómodo desde el primer mensaje.</p>
            <div class="appointment-tags">
              <span>Respuesta rápida</span>
              <span>Atención cercana</span>
              <span>Tratamiento personalizado</span>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  </main>
</template>

<script setup>
import SectionIntro from '../components/SectionIntro.vue'
import ContactForm from '../components/ContactForm.vue'
</script>
