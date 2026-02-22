<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { Separator as SeparatorRoot } from 'reka-ui'
import { cn } from '../../../lib/utils'

interface Props {
  class?: HTMLAttributes['class']
  orientation?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
})
</script>

<template>
  <SeparatorRoot
    :class="
      cn(
        'shrink-0 bg-neutral-200',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        props.class,
      )
    "
    :orientation="orientation"
  />
</template>
