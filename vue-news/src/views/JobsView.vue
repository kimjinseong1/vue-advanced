<template>
  <div>
    <!-- <div v-for="job in this.$store.state.jobs" v-bind:key="job">
        {{ job.title }}      
    </div> -->

    <p v-for="job in this.$store.state.jobs" v-bind:key="job"> 
       <a v-bind:href="job.url">
           {{ job.title}}
        </a>
        <small> {{job.time_ago}}  , {{ job.domain }}</small> 
    </p>
  </div>
</template>

<script>

export default {
      created() {
        this.$store.dispatch('fetch_jobs');
      }
}
</script>

<style>

</style>