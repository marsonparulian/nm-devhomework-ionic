<script setup>
const props = defineProps({
    hellovues: [Object],
});
</script>

<template>
    <div>
        <h2>Hello vues</h2>
        <div class="hellovue" v-for="hellovue in hellovues" :key="hellovue.lang">
            <h3 class="lang">{{ hellovue.lang }}</h3>
            <span class="text">{{ hellovue.text }}</span>
        </div>
    </div>
</template>

<style>
.hellovue {
    float: left;
    padding: 8px 16px;
    margin: 8px;
    border: 1px solid #ddd;
}

.hellovue .lang {
    color: #777;
    font-size: 0.9rem;
    font-weight: bold;
}

.hellovue .text {
    font-size: 1.2rem;
}
</style>
