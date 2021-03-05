<template>
  <div id="app">
<!--    <box-input  v-model="value"></box-input>-->
<!--    <big-turntable/>-->
    <p-checkbox v-model="checkbox1">123</p-checkbox>
    <p-checkbox-group v-model="checkbox">
      <p-checkbox label="123"></p-checkbox>
      <p-checkbox label="456"></p-checkbox>
      <p-checkbox label="789"></p-checkbox>
    </p-checkbox-group>
    <p-radio v-model="radio" label="1" name="sex">男</p-radio>
    <p-radio v-model="radio" label="2" name="sex">女</p-radio>
  </div>
</template>

<script>
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
      value:'',
      checkbox:['123','456'],
      checkbox1:false,
      radio:'2',
      radio1:'3',

    }
  }
}
</script>

<style lang="scss">
#app {

}
</style>
