<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-card shadow="never">
          <div>
            <h3>可见光</h3>
            <Xgplayer :config="videoConfig" @player="Player = $event" />
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="never">
          <div>
            <h3>热成像</h3>
            <Xgplayer :config="redConfig" @player="Player = $event" />
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-card shadow="never">
          <div>
            <h3>雷达点云</h3>
            <Xgplayer :config="radarConfig" @player="Player = $event" />
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="never">
          <div>
            <h3>Some Info</h3>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Xgplayer from "xgplayer-vue";

const videoConfig = ref({
  id: "video",
  url: "//lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/xgplayer-demo.mp4"
});

const redConfig = ref({
  id: "red",
  url: "//lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/xgplayer-demo.mp4"
});

const radarConfig = ref({
  id: "rader",
  url: "//lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/xgplayer-demo.mp4"
});
const Player = null;
</script>
