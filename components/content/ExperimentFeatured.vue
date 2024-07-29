<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  image: String,
  showData: Boolean
});
</script>

<template>
  <div data-id="experiment">
    <div>
      <ul>
        <li>
          <span>Experiment Title:</span> {{ title }}
        </li>
        <li>
          <span>Experiment Description:</span> {{ description }}
        </li>
        <li>
          <img :src="image" alt="Experiment Image" />
        </li>
        <li>
          <span v-if="showData">Show Data</span>
        </li>
      </ul>
    </div>
    <h3 data-id="title">
      <ContentSlot name="title" />
    </h3>
    
    <p data-id="description">
      <ContentSlot name="description" />
    </p>
  </div>
</template>
