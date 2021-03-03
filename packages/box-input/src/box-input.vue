<template>
    <div class="p-input-box">
        <label class="p-label" for="p-input-box">
            <input @focus="focus" @blur="blur" v-model="internalValue" class="p-input" @input="input" id="p-input-box" type="number">
            <div :class="{'p-box':true, 'p-highlight':highlight >= index}" v-for="(item,index) in list" :key="index">{{item}}</div>
        </label>
    </div>
</template>

<script>
    export default {
        name: "box-input",
        model: {
            prop: 'value',
            event: 'input'
        },
        props:{
            splitLineVisible:{
                type:Boolean,
                default:false
            },
            spitLinePosition:{
                type:Number,
                default: 4
            },
            length:{
                type:Number,
                default:6
            },
            value:{
                type:String
            }
        },
        data(){
          return{
              internalValue:this.value,
              highlight:-1
          }
        },
        mounted(){
            if(this.value){
                this.highlightIndex();
                this.eqSpitLinePosition()
            }
        },
        methods:{
            input(){
                if(this.internalValue.length > this.length){
                    this.internalValue = this.internalValue.slice(0,this.length)
                }
                this.$emit('input',this.internalValue);
                this.highlightIndex()
            },
            focus(){
                this.highlightIndex()
            },
            blur(){
                this.eqSpitLinePosition()
            },
            eqSpitLinePosition(){
                this.highlight--;
                if(this.splitLineVisible && this.internalValue.length === this.spitLinePosition-1){
                    this.highlight--
                }
            },
            highlightIndex(){
                this.highlight = this.internalValue.length;
                if(this.splitLineVisible){
                    if(this.highlight >= this.spitLinePosition-1){
                        this.highlight++
                    }
                }
            }
        },
        computed:{
            list(){
                let arr = [];
                [...Array(this.length)].forEach((item, index) => {
                    arr.push(this.internalValue[index])
                });
                if(this.splitLineVisible){
                    arr.splice(this.spitLinePosition-1, 0, '-')
                }
                return arr
            },
        }
    }
</script>

<style scoped lang="scss">
.p-input-box{
    position: relative;
    display: inline-block;
    .p-label{
        display: flex;
    }
    .p-input{
        position: absolute;
        left: 0;
        top: 0;
        width: 0;
        height: 0;
        opacity: 0;
    }
    .p-box{
        height: 40px;
        width: 40px;
        text-align: center;
        line-height: 40px;
        border: 1px solid #ccc;
        margin-right: 10px;
        &:nth-last-child(1){
            margin-right: 0;
        }
    }
    .p-highlight{
        border-color: #3858E6;
    }
}
</style>
