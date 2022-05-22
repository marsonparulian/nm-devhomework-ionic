<template>
    <ion-card>
        <img :src="SkinMobileUrl" />
        <ion-card-header>
            <ion-chip :disabled="true" v-for="g in MovieGenres" :key="g.Id">
                <ion-label>{{ g.Name }}</ion-label>
            </ion-chip>
            <ion-card-title>{{ Name }}</ion-card-title>
            <ion-card-subtitle>Director : {{ Director || '-' }}</ion-card-subtitle>
            <ion-card-subtitle>Main casts : {{ MainCast || '-' }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
            <div>
                <h4>Synopsis</h4>
                {{ Synopsis }}
            </div>
            <hr />
            <div>
                <div>Released at : {{ ReleasedAt }}</div>
                <div>Running time : {{ RunningTime }}</div>
            </div>
        </ion-card-content>
    </ion-card>
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
    },
});
</script>
