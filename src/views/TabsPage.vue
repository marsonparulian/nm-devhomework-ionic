<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="now-showing" href="/tabs/now-showing">
          <ion-icon :icon="videocamOutline" />
          <ion-label>Now Showing</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="coming-soon" href="/tabs/coming-soon">
          <ion-icon :icon="videocamOutline" />
          <ion-label>Coming Soon</ion-label>
        </ion-tab-button>

        <!-- <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="triangle" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="square" />
          <ion-label>Ion Components</ion-label>
        </ion-tab-button>
         -->

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { videocamOutline, ellipse, square, triangle } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      videocamOutline,
      ellipse,
      square,
      triangle,
    }
  }
});
</script>
