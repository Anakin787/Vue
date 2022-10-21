<template>
    <div class="discount">
        <h4>지금 결제하면 {{dc}}% 할인</h4>
    </div>

</template>

<script>

export default {
    name: 'discount',//심심하면 넣어봐
    data() {
        return {

        }
    },
    props: {
        dc: Number
    }
}
</script>

<style>

</style>