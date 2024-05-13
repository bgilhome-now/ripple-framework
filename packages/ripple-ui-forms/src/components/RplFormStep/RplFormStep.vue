<template>
  <!--  WIP, use fieldset for now-->
  <section class="rpl-form-page">
    <FormKit type="group" :name="name">
      <RplFormFieldset
          :legend="title"
      >
        <FormKitSchema
            v-if="schema"
            :schema="schema"
            :data="data"
        ></FormKitSchema>
      </RplFormFieldset>
    </FormKit>
  </section>
</template>

<script setup lang="ts">
import {FormKitSchemaCondition, FormKitSchemaNode} from "@formkit/core";

interface Props {
  name: string,
  title: string,
  schema?: FormKitSchemaCondition | FormKitSchemaNode[] | undefined,
  data?: object
}

const props = withDefaults(defineProps<Props>(), {
  schema: undefined,
})
</script>

<style>
.rpl-form-page {
  box-shadow: var(--rpl-elevation-1);
  padding: 4rem;
}
</style>
