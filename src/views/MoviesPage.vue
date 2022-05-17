
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Movies</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Movie List</ion-title>
                </ion-toolbar>
            </ion-header>
            <!-- movies filter -->
            <movies-filter></movies-filter>
            <!-- movie list-->
            <div>
                <div v-for="movie in movies" :key="movie.Id">
                    <h3>{{ movie.Name }}</h3>
                    <div>Genres :<span v-for="g in movie.MovieGenres" :key="g.Id">{{ g.Name }}</span> </div>
                    <div>Director : {{ movie.Director }}</div>
                    <h4>Synopsis :</h4>
                    <div>{{ movie.Synopsis }}</div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts"  >
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import * as nowShowingJson from '../../tests/data/now-showing.json';
import MoviesFilter from "./MoviesFilter.vue"; 

export default defineComponent({
    name: 'MoviesPage',
    data() {
        // const movies: { Id: string }[] = [];
        const movies: any = [];
        return {
            movies,
        };
    },
    components: { MoviesFilter, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
    methods: {
        async fetchMovies() {
            const url = 'https://www.eventcinemas.com.au/Movies/GetNowShowing';
            return nowShowingJson.Data.Movies;
        }
    },
    created() {
        this.fetchMovies()
            .then(movies => this.movies = movies);
    }
});

</script>
