<script>
export default {
  methods: {
    goToNextPage() {
      this.$emit("nextPage");
    },
  },
};
</script>

<template>
  <div class="container">
    <button class="next-button" @click="goToNextPage">
      <span class="play-icon">▶</span>
    </button>
  </div>
</template>

<style scoped>

.next-button {
  background-color: rgba(139, 82, 254, 1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  font-size: 35px;
  right: 10px;
}
.play-icon {
  display: inline-block;
  line-height: 0;
  color: #fee560;
}
</style>
