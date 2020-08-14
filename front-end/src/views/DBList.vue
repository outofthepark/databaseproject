<template>
    <div>
        <h1>This is an data base list page</h1>
        <Format/>
        <SendDB/>
    </div>
</template>

<script>
import Format from '@/components/Format.vue'
import SendDB from '@/components/SendDB.vue'

export default {
  name: 'DBList',
  components: {
      Format,
      SendDB,
  }
}
</script>

<style scoped>

</style>