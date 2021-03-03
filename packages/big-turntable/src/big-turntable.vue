<template>
    <div class="big-turntable">
        <div class="box">
            <div class="run" :style="{transform: `rotate(${spin}deg)`}">
                <div class="canvasBox" :style="{width:`${size}px`,height:`${size}px`}">
                    <canvas id="canvas" :width="size" :height="size"></canvas>
                    <div class="dec">
                        <span class="decBox" v-for="(item,index) in options" :key="index" :style="{transform: `rotate(${angle*index+angle/2}deg)`}">
                            <span class="text">{{item.area}}</span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="arrow"></div>
        </div>
        <div class="button" @click="lottery">抽奖</div>
    </div>
</template>

<script>
    export default {
        name: "big-turntable",
        props:{
            size:{
                type:Number,
                default:200
            },
            index:{
               type:Number,
                default:4
            },
            options:{
                type:Array,
                default: ()=>{
                    return [
                        {
                            area:'一等奖',
                            color:'red'
                        },
                        {
                            area:'二等奖',
                            color:'#ccc'
                        },
                        {
                            area:'三等奖',
                            color:'yellow'
                        },
                        {
                            area:'四等奖',
                            color:'#3858E6'
                        }
                    ]
                }
            }
        },
        data(){
            return {
                angle: 360/this.options.length,
                r: this.size/2,
                spin: 0,
                num:6
            }
        },
        mounted(){
            let canvas = document.getElementById('canvas');
            let ctx = canvas.getContext('2d');
            ctx.height = this.size;
            ctx.width = this.size;
            this.options.forEach((item,index)=>{
                ctx.beginPath();
                ctx.moveTo(this.r,this.r);
                ctx.arc(this.r,this.r,this.r,this.radian(this.angle*index),this.radian(this.angle*(index+1)));
                ctx.closePath();
                ctx.fillStyle = item.color;
                ctx.fill();
            });

        },
        methods:{
            radian(n){//角度转弧度
                return n*Math.PI/180;
            },
            lottery(){
                this.num += 6;
                this.spin = 360*this.num-(this.angle*(this.index-1)+this.angle/2);
            }
        }
    }
</script>

<style lang="scss" scoped>
.big-turntable{
    text-align: center;
    .box{
        position: relative;
        display: inline-block;
    }
    .arrow{
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #fff;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        box-shadow: 0 0 1px rgba(0,0,0,.3);
        &::before{
            content: '';
            position: absolute;
            border: 20px solid transparent;
            border-right-width:10px ;
            border-left-width:10px ;
            border-bottom-color: #fff;
            top: -35px;
            left: 50%;
            transform: translateX(-50%);

        }
    }
    .run{
        display: inline-block;
        position: relative;
        transition:transform 3s ease-out;
    }
    .canvasBox{
        transform: rotate(-90deg);
    }
    .dec{
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        transform: rotate(90deg);
    }
    .decBox{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
    .text{
        position: absolute;
        left: 50%;
        top: 10%;
        transform: translate(-50%,-10%);
    }
    .button{
        display: inline-block;

    }
}
</style>
