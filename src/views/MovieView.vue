<template>
    <ion-card>
        <ion-progress-bar v-if="posterFetchStatus === 2" type="indeterminate"></ion-progress-bar>
        <img v-if="poster" :src="poster" />
        <ion-card-header>
            <ion-chip v-for="g in MovieGenres" :key="g.Id" :routerLink="`/tabs/movies/${g.Name.toLowerCase()}`">
                <ion-label>{{ g.Name }}</ion-label>
            </ion-chip>
            <ion-card-title  @Click="$emit('movieSelected', Id)">{{ Name }}</ion-card-title>
            <ion-card-subtitle>Director : {{ Director || '-' }}</ion-card-subtitle>
            <ion-card-subtitle>Main casts : {{ MainCast || '-' }}</ion-card-subtitle>
        </ion-card-header>
        <div class="faded">
            <ion-card-content>
                <div>Released at : {{ ReleasedAt ? new Date(Date.parse(ReleasedAt)).toLocaleDateString('en-AU') : '-' }}
                </div>
                <div>Running time : {{ `${RunningTime} minutes` || '-' }}</div>
            </ion-card-content>
            <ion-card-content>
                <h4>Synopsis</h4>
                <div class="synopsis">{{ Synopsis }}</div>
            </ion-card-content>
        </div>
    </ion-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonProgressBar, IonChip, IonLabel, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/vue';
import { FetchStatus } from '../types/common';

const movieGenres: any = Array;

export default defineComponent({
    name: 'MovieView',
    components: { IonProgressBar, IonChip, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent },
    emits: ['movieSelected'],
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

<style>
.faded {
    /* scroll bar width, for use in mask calculations */
    --scrollbar-width: 4px;

    /* mask fade distance, for use in mask calculations */
    --mask-height: 32px;

    /* If content exceeds height of container, overflow! */
    overflow-y: auto;

    /* Our height limit */
    height: 320px;

    /* Need to make sure container has bottom space,
  otherwise content at the bottom is always faded out */
    padding-bottom: var(--mask-height);
    padding-top: var(--mask-height);

    /* Keep some space between content and scrollbar */
    padding-right: 12px;

    /* The CSS mask */

    /* The content mask is a linear gradient from top to bottom */
    --mask-image-content: linear-gradient(to bottom,
            transparent,
            black var(--mask-height),
            black calc(100% - var(--mask-height)),
            transparent);

    /* Here we scale the content gradient to the width of the container 
  minus the scrollbar width. The height is the full container height */
    --mask-size-content: calc(100% - var(--scrollbar-width)) 100%;

    /* The scrollbar mask is a black pixel */
    --mask-image-scrollbar: linear-gradient(black, black);

    /* The width of our black pixel is the width of the scrollbar.
  The height is the full container height */
    --mask-size-scrollbar: var(--scrollbar-width) 100%;

    /* Apply the mask image and mask size variables */
    mask-image: var(--mask-image-content), var(--mask-image-scrollbar);
    mask-size: var(--mask-size-content), var(--mask-size-scrollbar);

    /* Position the content gradient in the top left, and the 
  scroll gradient in the top right */
    mask-position: 0 0, 100% 0;

    /* We don't repeat our mask images */
    mask-repeat: no-repeat, no-repeat;
}
</style>
