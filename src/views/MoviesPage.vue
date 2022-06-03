<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ title }}</ion-title>
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
            <!-- FAB -->
            <ion-fab vertical="top" horizontal="end" slot="fixed">
                <ion-fab-button @click="fetchData">
                    <ion-icon :icon="refreshOutline"></ion-icon>
                </ion-fab-button>
            </ion-fab>

            <!-- Modal to show a movie detail -->
            <ion-modal :is-open="!!showedMovieDetail" @didDismiss="() => showMovieDetail()">
                <movie-detail v-bind="showedMovieDetail"></movie-detail>
            </ion-modal>

            <!-- movies filter -->
            <movies-filter :genres="genres" @submit="updateMovieFilter" :selectedGenre="movieFilter.genre">
            </movies-filter>
            <!-- movie list-->
            <movie-list :movies="filteredMovies" @movieSelected="showMovieDetail"></movie-list>
        </ion-content>
    </ion-page>
</template>

<script lang="ts"  >
import { defineComponent } from 'vue';
import { IonModal, IonIcon, IonFab, IonFabButton, IonLoading, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { refreshOutline } from 'ionicons/icons';
import MoviesFilter from "./MoviesFilter.vue";
import MovieList from '@/components/MovieList.vue';
import MovieDetail from '@/components/MovieDetail.vue';
import { MovieFilterInterface } from '../types/common.d';
import { FetchStatus } from '../types/common';
import { get } from '@/services/MoviesService';

export default defineComponent({
    name: 'MoviesPage',
    props: {
        genre: String,
        title: String,
        url: String,
    },
    data() {
        const movies: any = [];
        const genres: any = [];
        const defaultGenre = 'all';
        const selectedGenre = typeof this.$route.params.genre === 'string' ? this.$route.params.genre : defaultGenre;
        const movieFilter: MovieFilterInterface = {
            genre: selectedGenre || defaultGenre,
        };
        const showedMovieDetail: any = undefined;

        return {
            refreshOutline, // icon
            isBusy: true, // Is this page currently busy ?
            movies,
            genres,
            movieFilter,
            showedMovieDetail,
        };
    },
    components: { IonModal, IonIcon, IonFab, IonFabButton, MovieDetail, MovieList, MoviesFilter, IonLoading, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
    computed: {
        filteredMovies(): any {
            return this.movieFilter.genre == 'all' ?
                this.movies :
                this.movies.filter((m: any) => m.Genres === this.movieFilter.genre);
        }
    },
    methods: {
        showMovieDetail(movieId?: string) {
            // If movie id not supplied,  set `showedMovieDetail` to `undefined` to close the dialog
            if (!movieId) {
                this.showedMovieDetail = undefined;
            } else {
                this.showedMovieDetail = this.movies.find((m: any) => {
                    return m.Id === movieId;
                });
            }
        },
        updateMovieFilter(filter: MovieFilterInterface) {
            this.movieFilter = filter;
        },
        async fetchData() {
            this.isBusy = true;
            // Fetch data from server
            // const data = await MoviesService.fetchCurrent();
            console.log(`this.url : ${this.url}`);
            if (!this.url) {
                console.error('url is falsy');
                throw new Error('URL is falsy');
            }
            const data = await get(this.url);
            ({ Movies: this.movies, Genres: this.genres } = data);

            // Additional attributes
            this.movies.forEach((m: any) => {
                m.poster = null;
                m.posterFetchStatus = FetchStatus.Initial;
            });

            this.isBusy = false;

            // Fetch the next 2 movie posters
            this.fetchNextMoviePoster();
            this.fetchNextMoviePoster();
        },
        async fetchNextMoviePoster() {
            let nextMovie = this.movies.find((m: any) => {
                return m.posterFetchStatus === FetchStatus.Initial;
            });
            // Stop if allposters is being or has been fetched.
            if (!nextMovie) return;

            // Fetch the poster
            nextMovie.posterFetchStatus = FetchStatus.Fetching;
            const response = await fetch(nextMovie.LargePosterUrl);
            if (response.ok) {
                nextMovie.posterFetchStatus = FetchStatus.FetchedSuccess;
                nextMovie.poster = nextMovie.LargePosterUrl;
            } else {
                nextMovie.posterFetchStatus = FetchStatus.FetchedFailure;
                nextMovie.poster = 'https://cdn.eventcinemas.com.au/cdn/content/img/unavailable_poster105x50.jpg';
            }

            // Fetch next poster
            this.fetchNextMoviePoster();
        },
    },
    async created() {
        this.fetchData();

    }
});

</script>
