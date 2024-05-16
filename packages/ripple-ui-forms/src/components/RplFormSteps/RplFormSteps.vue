<template>
  <ul class="rpl-form-progress">
    <li
        v-for="step in steps"
        class="rpl-button"
        :class="currentStep === step.name ? 'rpl-button--filled' : ''"
        @click="currentStep = step.name"
    >
      {{ step.title }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import {FormKitSchemaCondition, FormKitSchemaNode} from "@formkit/core";

interface Props {
  steps?: FormKitSchemaCondition | FormKitSchemaNode[] | undefined,
  data?: object
}

const props = withDefaults(defineProps<Props>(), {
  schema: [],
})

const currentStep = ref((props.schema[0] || {}).key)
</script>

<style>
.rpl-form-progress {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}
</style>
