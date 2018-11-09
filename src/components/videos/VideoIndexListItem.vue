<template>
    <div class="video-list-item-container">
        <h4 :title="video.media_name" class="video-title">
            <a :href="video.media_link" target="_blank">
                {{ video.media_name }}
            </a>
        </h4>
        <div :title="video.media_description" class="video-desc">
            <p v-for="content in splitContent(video.media_description)">
                {{ content }}
            </p>
        </div>
        <div class="video-others">
            <span class="video-statistics">
                <span>{{ video.played_count }} PLAYED</span>
                <span>{{ video.likes }} LIKES</span>
            </span>
            <span class="uploader-panel">
                <span v-if="video.uploader_space_link">
                    <a :href="video.uploader_space_link" target="_blank">
                    {{ video.uploader }}
                    </a>
                </span>
                <span v-else>{{ video.uploader }}</span>
                <ImageViewer :src="video.uploader_avatar" class="uploader-avatar"></ImageViewer>
            </span>
        </div>
        <ImageViewer :src="video.media_snapshot" class="video-snapshot"></ImageViewer>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import ImageViewer from '@/components/ImageViewer.vue'
import { IVideo } from '@/model/video'

@Component({
    components: {
        ImageViewer,
    }
})
export default class VideoIndexListItem extends Vue {
    @Prop() private video!: IVideo

    splitContent(text: string): string[] {
        return text.split(/\n{1,}/) || []
    }

    beautyWrap(text: string): string {
        return text.replace(/\n{1,}/g, '<br/>')
    }
}
</script>

<style lang="stylus" scoped>
    .video-list-item-container
        position relative
        margin-bottom: 50px
        padding: 20px 20px 20px 340px
        // width: 800px
        height: 200px
        background-color: #fff
        border-right: 1px solid #ececec
        border-bottom: 1px solid #ddd

        h4
            margin: 0
            padding: 5px 3px 25px
            line-height 25px
            font-size 18px
            word-wrap: no
            white-space: nowrap
            overflow hidden
        
        .video-desc
            margin: 0
            padding: 5px 3px 10px
            height: 100px
            font-size 14px
            color: #4c5e70
            line-height 20px
            overflow hidden
            text-overflow: ellipsis

            p
                margin: 0 0 1px
                


        .video-others
            font-size: 12px

            .video-statistics span
                margin-right 20px

            .uploader-panel
                float: right

                .uploader-avatar
                    display: inline-block
                    margin-left: 10px
                    width: 40px
                    height: 40px
                    vertical-align: middle
                    // border-radius: 50%

        .video-snapshot
            position absolute
            left: 20px
            top: 20px
            width: 300px
            height: 200px
            transition transform .3s

            &:hover
                transform scale(1.1)



    

</style>
