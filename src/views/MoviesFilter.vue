<template>
    <form id="filter-movies-form">
        <h2 class="sr-only">Filter Movies Form</h2>
        <ion-list>
            <ion-item>
                <ion-label>Filter by genre :</ion-label>
                <ion-select id="select-genre" :value="selectedGenre" @ionChange="submit">
                    <ion-select-option value="all">All genres</ion-select-option>
                    <ion-select-option v-for="g in genres" :key="g.code" :value="g.code">
                        {{ g.name }}
                    </ion-select-option>
                </ion-select>
            </ion-item>
        </ion-list>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonSelect, IonSelectOption, IonItem, IonList, IonLabel } from '@ionic/vue';

const genres: any = Array;

export default defineComponent({
    name: 'MoviesFilter',
    props: {
        genres,
        selectedGenre: String,
    },
    components: { IonSelect, IonSelectOption, IonItem, IonList, IonLabel },
    emits: ['submit'],
    methods: {
        submit(e: any) {
            this.$emit('submit', { genre: e.target.value });
        }
    }
});
</script>

<style>
#filter-movies-form {
    max-width: 350px;
    margin: auto;
}
</style>
