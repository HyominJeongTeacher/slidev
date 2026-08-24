<script setup lang="ts">
import { useNav } from '@slidev/client'

const { currentSlideNo, total } = useNav()
</script>

<template>
  <div class="slide-counter">
    {{ currentSlideNo }} / {{ total }}
  </div>
</template>
