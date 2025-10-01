<script setup lang="ts">
import { ref, computed } from 'vue'
import { triggerEnum } from '@/components/input/enums'

const props = defineProps<{
  id?: string
  required: boolean
  name: string
  class?: string
  modelValue: string
  type?: string
  disabled?: boolean
  errors?: { message: string }
  trigger?: triggerEnum
  maxLength?: string
}>()

const error = ref('')
const errorMessage = computed(() => error.value)

const emit = defineEmits(['update:modelValue', 'update:error'])

const handleError = (e: Event) => {
  if (props.required) {
    if (props.errors) {
      if (!(e.target as HTMLInputElement).value) {
        emit('update:error', {
          status: true,
          message: props.errors.message,
        })
        error.value = props.errors.message
      } else {
        emit('update:error', {
          status: false,
          message: props.errors.message,
        })
        error.value = ''
      }
    } else {
      if (!(e.target as HTMLInputElement).value) {
        error.value = `${props.name} field is required`
      } else {
        error.value = ''
      }
    }
  }
}
const onBlur = (e: Event) => {
  if (props.trigger !== triggerEnum.CHANGE) {
    handleError(e)
  }
}
const onInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
  if (props.trigger === triggerEnum.CHANGE) {
    handleError(e)
  }
}
</script>

<template>
  <input
    :id="id || name"
    :type="type || 'text'"
    :name="name"
    :value="modelValue"
    autocomplete="off"
    :class="[
      {
        'form-control-error': error,
      },
      props.class,
    ]"
    :disabled="disabled"
    class="form-control"
    :maxLength="maxLength"
    @input="onInput"
    @blur="onBlur"
  />
  <span class="form-control-error">{{ errorMessage }}</span>
</template>
