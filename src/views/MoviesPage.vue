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

            <ion-loading :is-open="isBusy" message="Fetching movies.." :duration="240e3">
            </ion-loading>
            <!-- movies filter -->
            <movies-filter :genres="genres" @submit="updateMovieFilter"></movies-filter>
            <!-- movie list-->
            <movie-view v-for="movie in filteredMovies" v-bind="movie" :key="movie.Id"></movie-view>
        </ion-content>
    </ion-page>
</template>

<script lang="ts"  >
import { defineComponent } from 'vue';
import { IonLoading, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import MoviesFilter from "./MoviesFilter.vue";
import MovieView from './MovieView.vue';
import { MovieFilterInterface } from '@/types/common';
import MoviesService from '../services/MoviesService';

export default defineComponent({
    name: 'MoviesPage',
    data() {
        const movies: any = [];
        const genres: any = [];
        const movieFilter: MovieFilterInterface = {
            genre: 'all',
        };
        return {
            isBusy: true, // Is this page currently busy ?
            movies,
            genres,
            movieFilter,
        };
    },
    components: { MovieView, MoviesFilter, IonLoading, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
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
        async fetchData() {
            this.isBusy = true;
            // Fetch data from server
            const data = await MoviesService.fetchCurrent();
            ({ Movies: this.movies, Genres: this.genres } = data);
            this.isBusy = false;
        },
    },
    async created() {
        this.fetchData();

    }
});

</script>
