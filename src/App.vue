<template>
  <div id="app">
    <box-input  v-model="value"></box-input>
    <big-turntable/>
  </div>
</template>

<script>
  import 'vue-pant/lib/pant.css'
  // import boxInput from '../packages/box-input'
// import {boxInput,bigTurntable} from 'vue-pant'
export default {
  name: 'App',
  components: {
    // boxInput,
    // bigTurntable
  },
  data(){
    return{
      value:'123'
    }
  }
}
</script>

<style lang="scss">
#app {

}
</style>
