<template>
    <ion-content>
        <ion-card>
            <img v-if="poster" :src="poster" />
            <ion-card-header>
                <ion-chip v-for="g in MovieGenres" :key="g.Id" :routerLink="`/tabs/movies/${g.Name.toLowerCase()}`">
                    <ion-label>{{ g.Name }}</ion-label>
                </ion-chip>
                <ion-card-title @Click="$emit('movieSelected', Id)">{{ Name }}</ion-card-title>
                <ion-card-subtitle>Director : {{ Director || '-' }}</ion-card-subtitle>
                <ion-card-subtitle>Main casts : {{ MainCast || '-' }}</ion-card-subtitle>
            </ion-card-header>
            <div class="">
                <ion-card-content>
                    <div>Released at : {{ ReleasedAt ? new Date(Date.parse(ReleasedAt)).toLocaleDateString('en-AU') :
                            '-'
                    }}
                    </div>
                    <div>Running time : {{ `${RunningTime} minutes` || '-' }}</div>
                </ion-card-content>
                <ion-card-content>
                    <h4>Synopsis</h4>
                    <div class="synopsis">{{ Synopsis }}</div>
                </ion-card-content>
            </div>
        </ion-card>
    </ion-content>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent, IonChip, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/vue';

const movieGenres: any = Array;

export default defineComponent({
    name: 'MovieDetail',
    components: { IonContent, IonChip, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent },
    props: {
        Id: Number,
        Name: String,
        Director: String,
        Synopsis: String,
        MovieGenres: movieGenres,
        ReleasedAt: String,
        RunningTime: Number,
        MainCast: String,
        SkinMobileUrl: String,
        poster: String,
        posterFetchStatus: Number,
    },
});
</script>
