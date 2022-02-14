<template>
<h1 >{{ msg }}</h1>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!????'
    }
  }
}
</script>
<style scoped lang="scss">
$c-blue : blue;
h1 {
    color: $c-blue;
    display: flex;
}
</style>
