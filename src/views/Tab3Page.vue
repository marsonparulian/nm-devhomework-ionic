<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic Components</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Content Ionic Components</ion-title>
        </ion-toolbar>
      </ion-header>

      <div>
        <h2>Button</h2>
        <ion-button>Ionic Button</ion-button>
      </div>
      <div>
        <h2>Toggle</h2>
        <ion-toggle></ion-toggle>
      </div>
      <div>
        <h2>Date Picker</h2>
        <ion-datetime></ion-datetime>
      </div>
      <div>
        <h2>Segment</h2>
        <ion-segment>
          <ion-segment-button value="short">
            <ion-label>Short</ion-label>
          </ion-segment-button>
          <ion-segment-button value="normal">
            <ion-label>Normal</ion-label>
          </ion-segment-button>
          <ion-segment-button value="long">
            <ion-label>Long</ion-label>
          </ion-segment-button>
        </ion-segment>
      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonLabel, IonSegmentButton, IonSegment, IonToggle, IonButton, IonDatetime,
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent
} from '@ionic/vue';

export default defineComponent({
  name: 'Tab3Page',
  components: {
    IonLabel, IonSegmentButton, IonSegment, IonToggle, IonButton, IonDatetime,
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage
  }
});
</script>
