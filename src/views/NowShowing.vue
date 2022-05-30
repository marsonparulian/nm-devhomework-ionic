<template>
    <movies-page title="Now Showing" :url="url"></movies-page>
</template>

        <script lang="ts">
import { defineComponent } from 'vue';
import MoviesPage from '@/views/MoviesPage.vue';

export default defineComponent({
    name: 'NowShowing',
    components: {
        MoviesPage,
    },
    data() {
        return {
url : 'http://nm-server-dev.ap-southeast-2.elasticbeanstalk.com/now-showing',
        };
    },
});
</script>
