<template>
  <article :class="['service-card', { reverse }]">
    <div class="service-media visual-card">
      <img :class="mediaClass" :src="imageSrc" :alt="imageAlt" />
    </div>

    <div class="service-copy">
      <span class="service-index">{{ index }}</span>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  index: String,
  title: String,
  description: String,
  reverse: Boolean,
  imageSrc: String,
  imageAlt: String,
  imageVariant: {
    type: String,
    default: 'default'
  }
})

const mediaClass = computed(() => {
  const base = ['section-image']

  if (props.imageVariant === 'compare') base.push('section-image-compare')
  if (props.imageVariant === 'chair') base.push('section-image-chair')
  if (props.imageVariant === 'tools') base.push('section-image-tools')
  if (props.imageVariant === 'focus-top') base.push('section-image-focus-top')

  return base.join(' ')
})
</script>
