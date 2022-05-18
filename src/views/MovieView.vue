<template>
    <div>
        <h3>{{ Name }}</h3>
        <div>Genres : <span v-for="g in MovieGenres" :key="g.Id">{{ g.Name }}</span> </div>
        <div>Director : {{ Director || '-' }}</div>
        <h4>Synopsis :</h4>
        <div>{{ Synopsis }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const movieGenres: any = Array;

export default defineComponent({
    name: 'MovieView',
    props: {
        Name: String,
        Director: String,
        Synopsis: String,
        MovieGenres: movieGenres,
    },
});
</script>
