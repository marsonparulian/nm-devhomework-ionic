<template>
    <form id="filter-movies-form">
        <h2>Filter movies</h2>
        <ion-label for="select-genre">Filter by Genre :</ion-label>
        <select id="select-genre" @change="submit">
            <option value="all">All genres</option>
            <option v-for="genre in genres" :key="genre.code" :value="genre.code">{{
                    genre.name
            }}</option>
        </select>
        <hr />
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonLabel } from '@ionic/vue';

const genres: any = Array;

export default defineComponent({
    name: 'MoviesFilter',
    props: {
        genres,
    },
    components: { IonLabel },
    emits: ['submit'],
    methods: {
        submit(e: any) {
            this.$emit('submit', { genre: e.target.value });
        }
    }
});
</script>
