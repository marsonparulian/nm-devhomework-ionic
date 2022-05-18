
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
            <movies-filter :genres="genres" @submit="updateMovieFilter"></movies-filter>
            <!-- movie list-->
            <movie-view v-for="movie in filteredMovies" v-bind="movie" :key="movie.Id"></movie-view>
        </ion-content>
    </ion-page>
</template>

<script lang="ts"  >
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import * as nowShowingJson from '../../tests/data/now-showing.json';
import MoviesFilter from "./MoviesFilter.vue";
import MovieView from './MovieView.vue';
import { MovieFilterInterface } from '@/types/common';

export default defineComponent({
    name: 'MoviesPage',
    data() {
        const movies: any = [];
        const genres: any = [];
        const movieFilter: MovieFilterInterface = {
            genre: 'all',
        };
        return {
            movies,
            genres,
            movieFilter,
        };
    },
    components: { MovieView, MoviesFilter, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
    computed: {
        filteredMovies(): any {
            return this.movieFilter.genre == 'all' ?
                this.movies :
                this.movies.filter((m: any) => m.Genres === this.movieFilter.genre);
        }
    },
    methods: {
        updateMovieFilter(filter: MovieFilterInterface) {
            this.movieFilter = filter;
        },
        async fetchMovies() {
            const url = 'https://www.eventcinemas.com.au/Movies/GetNowShowing';
            return nowShowingJson.Data.Movies;
        },
        async fetchGenres() {
            return nowShowingJson.Data.Genres;
        }
    },
    created() {
        this.fetchGenres().then(genres => this.genres = genres).catch(e => console.error('Error fetching genres.'));
        this.fetchMovies()
            .then(movies => this.movies = movies);
    }
});

</script>
