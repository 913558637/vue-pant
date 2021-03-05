<template>
    <div class="p-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "p-checkbox-group",
        model:{
            prop:'value',
            event:'change',
        },
        props:{
            value:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        mounted(){
            // console.log(this.$children);
        },
        methods:{
            setValue(){
                let value = [];
                this.$children.forEach((item) => {
                    item.checkbox && value.push(item.label)
                });
                this.$emit('change', value)
            }
        }
    }
</script>

<style lang="scss" scoped>
.p-checkbox-group{

}
</style>
