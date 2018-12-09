<template>
  <section class="container">
    <div>
      <h2>Write to Firestore.</h2>
      <div>
        <button :disabled="writeSuccessful" @click="writeToFirestore">
          <span v-if="!writeSuccessful">Write now</span>
          <span v-else>Successful!</span>
        </button>
        <span>{{ error }}</span>
      </div>
    </div>
  </section>
</template>
<script>
import { fireDb } from "~/plugins/firebase.js"
export default {
  data() {
    return {
      writeSuccessful: false,
      error: null
    }
  },
  methods: {
    async writeToFirestore() {
      const ref = fireDb.collection("test").doc("test")
      console.log()
      const document = {
        text: "This is a test message."
      }
      try {
        await ref.set(document)
        this.writeSuccessful = true
      } catch (e) {
        // TODO: error handling
        this.error = e
        console.error(e)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.container
  min-height 100vh
  display flex
  justify-content center
  align-items center
  text-align center
</style>
