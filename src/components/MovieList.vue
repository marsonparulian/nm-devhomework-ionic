<template >
    <ion-grid>
        <ion-row>
            <ion-col size="12" size-md="6" size-lg="4" size-xl="3" v-for="movie in movies" :key="movie.Id">
                <movie-view v-bind="movie" @movieSelected="(movieId: number) => $emit('movieSelected', movieId)">
                </movie-view>
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
    emits: ['movieSelected'],
});
</script>
