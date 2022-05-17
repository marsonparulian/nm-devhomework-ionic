<template>
    <form id="filter-movies-form">
        <h2>Filter movies</h2>
        <ion-label>Genre</ion-label>
        TODO : list of genre
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonLabel } from '@ionic/vue';

export default defineComponent({
    name: 'MoviesFilter',
    components: { IonLabel },
});
</script>
