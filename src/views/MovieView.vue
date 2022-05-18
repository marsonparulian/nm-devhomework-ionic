<template>
    <div>
        <h3>{{ Name }}</h3>
        <img class="poster" :src="SkinMobileUrl" :alt="`movie poster of ${Name}`" />
        <div>Genres : <span v-for="g in MovieGenres" :key="g.Id">{{ g.Name }}</span> </div>
        <div>Director : {{ Director || '-' }}</div>
        <div>Main casts : {{ MainCast }}</div>
        <div>Released : {{ ReleasedAt }}</div>
        <div>Running time : {{ RunningTime }}</div>
        <h4>Synopsis :</h4>
        <div>{{ Synopsis }}</div>
    </div>
</template>
<style>
img.poster {
    float: left;
    margin: 0 20px 20px 0;
    width: 250px;
}
</style>

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
        ReleasedAt: String,
        RunningTime: Number,
        MainCast: String,
        SkinMobileUrl: String,
    },
});
</script>
