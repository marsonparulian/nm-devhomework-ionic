<template>
    <ion-card>
        <img v-if="poster" :src="poster" />
        <ion-card-header>
            <ion-chip :disabled="true" v-for="g in MovieGenres" :key="g.Id">
                <ion-label>{{ g.Name }}</ion-label>
            </ion-chip>
            <ion-card-title>{{ Name }}</ion-card-title>
            <ion-card-subtitle>Director : {{ Director || '-' }}</ion-card-subtitle>
            <ion-card-subtitle>Main casts : {{ MainCast || '-' }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
            <h4>Synopsis</h4>
            {{ Synopsis }}
        </ion-card-content>
        <ion-card-content>
            <div>Released at : {{ ReleasedAt ? new Date(Date.parse(ReleasedAt)).toLocaleDateString('en-AU') : '-' }}
            </div>
            <div>Running time : {{ `${RunningTime} minutes` || '-' }}</div>
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonChip, IonLabel, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/vue';

const movieGenres: any = Array;

export default defineComponent({
    name: 'MovieView',
    components: { IonChip, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent },
    props: {
        Name: String,
        Director: String,
        Synopsis: String,
        MovieGenres: movieGenres,
        ReleasedAt: String,
        RunningTime: Number,
        MainCast: String,
        SkinMobileUrl: String,
        poster: String,
    },
});
</script>
