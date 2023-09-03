<template>
    <div  class="btn">
      {{ buttonText }}
    </div>
</template>

<script>

export default {
  props: {
    buttonText: {
      type: String,
      required: true
    },
  },
  data() {
    return {
    };
  },
};
</script>
