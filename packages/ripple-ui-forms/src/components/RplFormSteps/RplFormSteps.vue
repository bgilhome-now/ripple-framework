<template>
  <ul class="rpl-form-progress">
    <li
        v-for="step in schema"
        class="rpl-button"
        :class="currentStep === step.name ? 'rpl-button--filled' : ''"
        @click="currentStep = step.name"
    >
      {{ step.title }}
    </li>
  </ul>

  <FormKit type="RplFormStep"
           v-for="step in schema"
           v-show="currentStep === step.name"
           :name="step.name"
           :title="step.title"
           :schema="step.schema"
           :data="data"
  />
</template>

<script setup lang="ts">
import {FormKitSchemaCondition, FormKitSchemaNode} from "@formkit/core";

interface Props {
  schema?: FormKitSchemaCondition | FormKitSchemaNode[] | undefined,
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
