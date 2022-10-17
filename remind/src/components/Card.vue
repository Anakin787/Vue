<template>
    <div>
        <div v-for="(item, index) in 원룸들" :key="index">
            <img :src="item.image" class="roomimg">
            <h4 @click="$emit('openModal',item.id)">{{ item.title }}</h4>
            <p>{{item.price}}원</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        원룸들: String,
        누른거: Number
    }
}
</script>

<style>

</style>