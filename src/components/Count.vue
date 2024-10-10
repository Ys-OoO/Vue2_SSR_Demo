<template>
    <div>
        <p>{{ count }}</p>
        <button @click="handleClick">Click</button>
    </div>
</template>

<script>
export default {
    name: 'Foo',
    data() {
        return {
        }
    },
    computed: {
        count() {
            return this.$store.getters.count
        }
    },
    methods: {
        handleClick() {
            this.$store.commit("INCREMENT_COUNT");
        }
    }
}
</script>

<style scoped lang="sass">
</style>