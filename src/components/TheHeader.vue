<template>
  <header class="site-header">
    <div class="container nav-wrap">
      <RouterLink class="brand" to="/">
        <img src="/img/dentalcare.png" alt="DentalCare" />
      </RouterLink>

      <nav class="nav-links" aria-label="Navegación principal">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/acerca-de">Acerca de</RouterLink>
        <RouterLink to="/servicios">Servicios</RouterLink>
        <RouterLink to="/contacto">Contacto</RouterLink>
      </nav>

      <div class="nav-actions">
        <button
          class="theme-toggle"
          type="button"
          :aria-label="theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'"
          @click="$emit('toggle-theme')"
        >
          <span class="theme-icon sun" :class="{ active: theme === 'light' }">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4.5" fill="currentColor" />
              <path
                d="M12 1.75v3.1M12 19.15v3.1M4.75 4.75l2.2 2.2M17.05 17.05l2.2 2.2M1.75 12h3.1M19.15 12h3.1M4.75 19.25l2.2-2.2M17.05 6.95l2.2-2.2"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.8"
              />
            </svg>
          </span>
          <span class="theme-icon moon" :class="{ active: theme === 'dark' }">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M19.2 14.8A7.8 7.8 0 0 1 9.2 4.8a8.6 8.6 0 1 0 10 10Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </button>

        <RouterLink class="button button-solid" to="/contacto">
          Solicita cita
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  theme: {
    type: String,
    required: true
  }
})

defineEmits(['toggle-theme'])
</script>
