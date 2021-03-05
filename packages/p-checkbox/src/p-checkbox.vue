<template>
    <div class="p-checkbox">
        <label >
            <span>
                <input @change="change" type="checkbox" class="p-checkbox__original" v-model="checkbox">
            </span>
            <span>
                <template v-if="label">{{label}}</template>
                <slot v-else></slot>
            </span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "p-checkbox",
        model:{
            prop:'value',
            event:'change'
        },
        props:{
            value:{
                type:Boolean,
                default:false
            },
            label:{}
        },
        data(){
            return {
                checkbox:this.value,
                haveParent:false
            }
        },
        computed:{

        },
        mounted(){
            console.log(this.$parent);
            this.haveParent = this.$parent.$options._componentTag === 'p-checkbox-group' ;
            const value = this.$parent.value;
            this.haveParent && value.includes(this.label)? this.checkbox = true : this.checkbox = false;

        },
        methods:{
            change(){
                this.haveParent ? this.$parent.setValue() : this.$emit('change',this.checkbox)
            }
        }
    }
</script>

<style lang="scss" scoped>
.p-checkbox{
    display: inline-block;
    .p-checkbox__original{

    }
}
</style>
