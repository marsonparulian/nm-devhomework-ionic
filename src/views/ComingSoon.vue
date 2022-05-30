<template>
    <movies-page title="Coming Soon" :url="url"></movies-page>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import MoviesPage from '@/views/MoviesPage.vue';

export default defineComponent({
    name: 'ComingSoon',
    components: { MoviesPage, },
    data() {
        return {
            url: 'http://nm-server-dev.ap-southeast-2.elasticbeanstalk.com/coming-soon',
        };
    },
});
</script>
