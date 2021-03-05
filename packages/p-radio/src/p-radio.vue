<template>
    <div class="p-radio">
        <label >
            <span><input   @change="change" :name="name" type="radio" v-model="radio" :value="label"></span>
            <span>
                <slot></slot>
            </span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "p-radio",
        model:{
            prop:'value',
            event:'change'
        },
        props:{
            value:{},
            label:{},
            name:String
        },
        data(){
            return {
                radio: this.value
            }
        },
        mounted(){
            console.log(this);
        },
        methods:{
            change(){
                this.$emit('change', this.radio)
            }
        }

    }
</script>

<style lang="scss" scoped>
.p-radio{
    display: inline-block;
}
</style>
