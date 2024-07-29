<script setup lang="ts"></script>

<template>
  <div data-id="experiment">
    <h3 data-id="title">
      <ContentSlot name="title" />
    </h3>
    
    <p data-id="description">
      <ContentSlot name="description" />
    </p>
  </div>
</template>
