<template>
    <div class="video-index-container">
        <VideoIndexListItem v-for="video in videoList"
            :video="video"
        ></VideoIndexListItem>
    </div>
</template>

<script lang="ts">
import axios from 'axios'
import { Component, Vue, Prop } from 'vue-property-decorator'

import { IVideo, IVideosRes } from '@/model/video'
import VideoIndexListItem from '@/components/videos/VideoIndexListItem.vue'

import data from '@/mocks/videoList'

@Component({
    components: {
        VideoIndexListItem,
    }
})
export default class Videos extends Vue {
    videoList: IVideo[] = []

    fetchVideos() {
        // axios.get('http://0.0.0.0:9000/api/v1/favorites')
        // .then(res => res.data)
        // .then((res: IVideosRes) => {
        //     this.videoList = res.data
        // })

        let res =JSON.parse(data)
        this.videoList = res.data

    }

    created() {
        this.fetchVideos()
    }
}

</script>

<style lang="stylus" scoped>
    .video-index-container
        margin: 0 auto
        width: 1200px

</style>
