<template>
    <div @click="handleClick" class="box">
        Foo
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

<style scoped>
.box{
    background-color: #534d4d;
    color: #fff;
}
</style>