<!-- index.vue -->
<style lang="less" scoped>
div {
  font-size: 50px;
  text-align: center;
}
</style>

<template>
  <div>hello {{text}}!</div>
</template>

<script>
export default {
  data() {
    return {
      text: "parcel"
    };
  }
};
</script>