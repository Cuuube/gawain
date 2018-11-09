<template>
  <iframe
    v-if="src"
    :src="frameSrc"
    frameborder="0"></iframe>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import { IVideo } from '@/model/video'

@Component({})
export default class ImageViewer extends Vue {
  @Prop() private src!: String

  // 盗链攻防
  get frameSrc(): string {
    return `javascript:
      document.write('${this.imgCode}');
      document.body.attributeStyleMap.set('margin', 0);
      document.body.attributeStyleMap.set('display', 'flex');
      document.body.attributeStyleMap.set('justify-content', 'center');
      document.body.attributeStyleMap.set('align-items', 'center');
    `
  }

  get imgCode(): string {
    let imageCode = `<img src="${this.src}"style="max-width: 100%;height: 100%;">`
    return imageCode
  }

  // mounted() {
  // }
  
}
</script>
