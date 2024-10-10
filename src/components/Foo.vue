<template>
    <div @click="handleClick" class="box">
        <span>Foo</span>
    </div>
</template>

<script>
    export default {
        name:'Foo',
        methods:{
            handleClick(){
                alert('click Foo');
            }
        }
    }
</script>

<style scoped lang="sass">
.box{
    background-color: #534d4d;
    span{
        color: #fff;
    }
}
</style>