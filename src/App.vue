<template>
  <div class="site-shell" :data-theme="theme">
    <TheHeader :theme="theme" @toggle-theme="toggleTheme" />
    <router-view />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import TheHeader from './components/TheHeader.vue'

const theme = ref('light')

const applyTheme = (value) => {
  document.documentElement.setAttribute('data-theme', value)
}

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

onMounted(() => {
  const storedTheme = localStorage.getItem('dentalcare-theme')

  if (storedTheme === 'light' || storedTheme === 'dark') {
    theme.value = storedTheme
  }

  applyTheme(theme.value)
})

watch(theme, (value) => {
  applyTheme(value)
  localStorage.setItem('dentalcare-theme', value)
})
</script>
