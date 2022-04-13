
<template>
  <div class="about">
    <h1>{{ title }}</h1>

    <button @click="changeTitle">Cambiar titulo</button>
  </div>
</template>
<script>
import {
  ref,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onRenderTracked,
  onUnmounted,
  onRenderTriggered,
  onScopeDispose,
  onServerPrefetch,
  onUpdated,
  onActivated,
  onDeactivated,
  onErrorCaptured,
} from "vue";
export default {
  setup() {
    const title = ref("About");

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onRenderTracked(() => {
      console.log("onRenderTracked");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    onRenderTriggered(() => {
      console.log("onRenderTriggered");
    });
    onScopeDispose(() => {
      console.log("onScopeDispose");
    });
    onServerPrefetch(() => {
      console.log("onServerPrefetch");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onErrorCaptured(() => {
      console.log("onErrorCaptured");
    });

    onActivated(() => {
      console.log("onActivated");
    });

    onDeactivated(() => {
      console.log("onDeactivated");
    });

    return {
      title,
      changeTitle: () => {
        title.value = "New About";
      },
    };
  },
};
</script>
