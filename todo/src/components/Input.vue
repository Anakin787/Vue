<template>
    <div>
        <input v-model.="input" class="input" placeholder="할일을 입력해 주세요">
        <button class="addButton">+</button>
    </div>
</template>

<script>
export default {
    name: 'Input',
    data() {
        return {
            input: "",
        }
    },
    props: {

    }
}
</script>

<style>
.input {
    width: 80%;
    font-size: 2rem;
    border: 2px solid black;
    border-radius: 5px;
}

.input::-webkit-input-placeholder {
    text-align: center;
}

.addButton {
    font-size: 2rem;
    border: none;
    border-radius: 10px;
    margin-left: 5px;
    background: darkorange;
}
</style>