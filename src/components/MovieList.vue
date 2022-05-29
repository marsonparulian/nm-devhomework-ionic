<template >
    <ion-grid>
        <ion-row>
            <ion-col v-for="m in movies">
                <movie-view v-for="movie in movies" v-bind="movie" :key="movie.Id"></movie-view>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonGrid, IonRow, IonCol } from '@ionic/vue';
import MovieView from '@/views/MovieView.vue';

const movies: any = Array;

export default defineComponent({
    name: 'MovieList',
    components: {
        IonGrid, IonRow, IonCol,
        MovieView,
    },
    props: {
        movies,
    },
});
</script>
