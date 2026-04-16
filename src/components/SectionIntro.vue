<template>
  <div class="section-intro">
    <span class="section-kicker">{{ kicker }}</span>
    <h2>{{ title }}</h2>
    <p v-if="text">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  kicker: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    default: ''
  }
})
</script>
