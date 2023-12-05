<template>
  <el-card shadow="always">
    <template #header>
      <div class="card-header">
        <span class="font-medium"> 实时预警 </span>
      </div>
    </template>

    <el-row class="card-body" :gutter="24">
      <!-- 实时感知画面 -->
      <el-col :span="12">
        <videoPlayer id="video1" :url="videoUrl" :poster="videoPoster" />
      </el-col>
      <!-- 检测到的目标列表 -->
      <el-col :span="12">
        <el-table
          :data="tableData"
          table-layout="fixed"
          border
          stripe
          height="60vh"
        >
          <el-table-column prop="time" label="时间" sortable />
          <el-table-column prop="target" label="目标" />
          <el-table-column prop="device" label="设备" sortable />
          <el-table-column prop="direction" label="方向" />
        </el-table>
      </el-col>
    </el-row>

    <template #footer>
      <div class="card-footer">
        <span class="font-medium"> 页脚状态栏 </span>
      </div>
    </template>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import videoPlayer from "@/components/videoPlayer.vue";
import poster from "@/assets/liveposter.jpg";

defineOptions({
  // name 作为一种规范最好必须写上并且和路由的name保持一致
  name: "Monitor"
});

// interface TableItem {
//   time: string;
//   target: string;
//   device: string;
//   direction: string;
// }

const videoUrl = ref(
  "//lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/xgplayer-demo.mp4"
);
const videoPoster = poster;

const tableData = ref([
  {
    time: "2022-01-01 10:00:00",
    target: "Target 1",
    device: "Device 1",
    direction: "Direction 1"
  },
  {
    time: "2022-01-01 11:00:00",
    target: "Target 2",
    device: "Device 2",
    direction: "Direction 2"
  },
  {
    time: "2022-01-01 10:00:00",
    target: "Target 1",
    device: "Device 1",
    direction: "Direction 1"
  },
  {
    time: "2022-01-01 11:00:00",
    target: "Target 2",
    device: "Device 2",
    direction: "Direction 2"
  },
  {
    time: "2022-01-01 10:00:00",
    target: "Target 1",
    device: "Device 1",
    direction: "Direction 1"
  },
  {
    time: "2022-01-01 11:00:00",
    target: "Target 2",
    device: "Device 2",
    direction: "Direction 2"
  },
  {
    time: "2022-01-01 10:00:00",
    target: "Target 1",
    device: "Device 1",
    direction: "Direction 1"
  },
  {
    time: "2022-01-01 11:00:00",
    target: "Target 2",
    device: "Device 2",
    direction: "Direction 2"
  },
  {
    time: "2022-01-01 10:00:00",
    target: "Target 1",
    device: "Device 1",
    direction: "Direction 1"
  },
  {
    time: "2022-01-01 11:00:00",
    target: "Target 2",
    device: "Device 2",
    direction: "Direction 2"
  },
  {
    time: "2022-01-01 11:00:00",
    target: "Target 2",
    device: "Device 2",
    direction: "Direction 2"
  },
  {
    time: "2022-01-01 11:00:00",
    target: "Target 2",
    device: "Device 2",
    direction: "Direction 2"
  },
  {
    time: "2022-01-01 11:00:00",
    target: "Target 2",
    device: "Device 2",
    direction: "Direction 2"
  },
  {
    time: "2022-01-01 11:00:00",
    target: "Target 2",
    device: "Device 2",
    direction: "Direction 2"
  }
  // Add more test data here if needed
]);
</script>

<style scoped>
.el-card {
  height: 80vh;

  .card-body {
    width: 100%;
  }
}
</style>
