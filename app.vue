<template>
  <div>
    <!-- <NuxtPage /> -->
    <NuxtLayout >
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<script>
// import { useLayoutStore } from './store/layout';
import { initFlowbite } from 'flowbite';

export default {
  data() {
    return {
      // layout: useLayoutStore().layout
    }
  },
  mounted() {
    initFlowbite()
  },
}
</script>
