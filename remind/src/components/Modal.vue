<template>
    <div class="black-bg" v-if="모달창열렸니==true">
        <div class="white-bg">
            <img :src="원룸들[누른거].image">
            <h4>{{원룸들[누른거].title}}</h4>
            <p>{{원룸들[누른거].price}}원</p>
            <p>{{원룸들[누른거].content}}</p>
            <button @click="$emit('closeModal')">닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        원룸들: String,
        누른거: Number,
        모달창열렸니: Boolean
    }
}
</script>

<style>

</style>