<template>
  <div>
      <p v-for="item in this.$store.state.ask" v-bind:key="item"> 
       <a v-bind:href="item.url">
           {{ item.title}}
        </a>
        <small> {{item.time_ago}}  by  {{ item.user }}</small> 
    </p>
  </div>
</template>

<script>


export default {
  computed: {
    ask() {
      return this.$store.state.ask;
    }
  },
    created() {
      this.$store.dispatch('fetch_ask');
  }
}
</script>

<style>

</style>