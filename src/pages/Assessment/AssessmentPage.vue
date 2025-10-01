<script setup lang="ts">
import CmpInput from '@/components/input/CmpInput.vue'
import store from '@/pages/Assessment/store'
import { triggerEnum } from '@/components/input/enums'

const assessmentStore = store()
</script>

<template>
  <div class="assessment">
    <div class="assessment-container">
      <div class="flex-row">
        <div class="flex-24">
          <h1>Assessment page</h1>
        </div>
      </div>
      <div class="flex-row mt-5">
        <div class="flex-24">
          <label htmlFor="Username">Name</label>
        </div>
        <div class="flex-24">
          <CmpInput
            v-model="assessmentStore.name"
            :trigger="triggerEnum.CHANGE"
            name="username"
            required
          />
        </div>
        <div class="flex-24 mt-5">
          <input
            type="button"
            value="Submit"
            class="btn-primary"
            @click="assessmentStore.fetchDetails"
          />
        </div>
        <div class="flex-24 mt-5">
          <p class="details" v-show="assessmentStore.detailsMessages">
            {{ assessmentStore.detailsMessages }}
          </p>
          <p class="error" v-show="assessmentStore.errorMessages">
            {{ assessmentStore.errorMessages }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .error {
    width: 100%;
    color: red;
  }
  .details {
    width: 100%;
    color: green;
  }
  .assessment {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .assessment-container {
    width: 500px;
  }

  input.form-control {
    border-radius: 5px;

    &[disabled] {
      cursor: not-allowed;
      border-color: #c4c4c4;
    }
  }

  input[type='button'],
  input[type='submit'] {
    border-radius: 5px;
  }
}
</style>
