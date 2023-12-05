<template>
  <el-card shadow="always">
    <template #header>
      <div class="card-header">
        <span class="font-medium"> 实时预警 </span>
      </div>
    </template>
    <videoPlayer id="video1" :url="videoUrl" :poster="vodeoPoster" />
    <template #footer>
      <div class="card-footer">
        <span class="font-medium"> 页脚状态栏 </span>
      </div>
    </template>
  </el-card>
</template>

<script setup lang="ts">
import videoPlayer from "@/components/videoPlayer.vue";
import poster from "@/assets/liveposter.jpg";

const videoUrl =
  "//lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/xgplayer-demo.mp4";
const vodeoPoster = poster;
</script>

<style scoped>
.el-card {
  height: 80vh;
}
</style>
