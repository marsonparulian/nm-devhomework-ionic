<template>
    <ion-content>
        <h1>{{ Name }}</h1>
    </ion-content>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent } from '@ionic/vue';

export default defineComponent({
    name: 'MovieDetail',
    components: { IonContent },
    props: {
        Name: String,
    },
});
</script>
