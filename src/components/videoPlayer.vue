<script setup lang="ts">
import { onMounted, useAttrs } from "vue";
import { deviceDetection } from "@pureadmin/utils";
// import { useRenderIcon } from "@/components/ReIcon/src/hooks";
// import VideoPlay from "@iconify-icons/ep/video-play";

import Player from "xgplayer";
import "xgplayer/dist/index.min.css";

const attrs = useAttrs();

defineOptions({
  name: "VideoPage"
});

onMounted(() => {
  new Player({
    id: attrs.id as string,
    lang: "zh",
    // 默认静音
    volume: 0,
    autoplay: false,
    // videoAttributes: {
    //   crossOrigin: "anonymous"
    // },
    url: attrs.url as string,
    poster: attrs.poster as string,
    width: "100%",
    height: "100%",
    fluid: deviceDetection(),
    //传入倍速可选数组
    playbackRate: [0.5, 0.75, 1, 1.5, 2]
  });
});
</script>

<template>
  <div />
</template>
