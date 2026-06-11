<script setup lang="ts">
/**
 * AccordionGroup.vue
 * Purpose: FAQ accordion wrapper
 */
import type { FAQ } from "~/types/faq";
import AccordionItem from "./AccordionItem.vue";

const props = defineProps<{
  faqs: FAQ[];
}>();

const openId = ref<string | null>(null);

const toggle = (id: string) => {
  openId.value = openId.value === id ? null : id;
};
</script>

<template>
  <div v-if="faqs && faqs.length" class="bg-white rounded-xl shadow-pd-md px-6 lg:px-10">
    <AccordionItem
      v-for="faq in faqs"
      :key="faq.id"
      :question="faq.question"
      :answer="faq.answer"
      :is-open="openId === faq.id"
      @toggle="toggle(faq.id)"
    />
  </div>
</template>
