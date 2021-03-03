import bigTurntable from './src/big-turntable'

bigTurntable.install = (Vue)=>{
    Vue.component(bigTurntable.name,bigTurntable)
};

export default bigTurntable
