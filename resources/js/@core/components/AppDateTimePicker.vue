<script setup>
import FlatPickr from 'vue-flatpickr-component'
import { useTheme } from 'vuetify'
import {
  filterFieldProps,
  makeVFieldProps,
} from 'vuetify/lib/components/VField/VField'
import {
  filterInputProps,
  makeVInputProps,
} from 'vuetify/lib/components/VInput/VInput'

import { filterInputAttrs } from 'vuetify/lib/util/helpers'
import { useThemeConfig } from '@core/composable/useThemeConfig'

const props = defineProps({
  ...makeVInputProps({
    density: 'default',
    hideDetails: 'auto',
  }),
  ...makeVFieldProps({
    variant: 'outlined',
    color: 'primary',
  }),
})

const emit = defineEmits([
  'update:modelValue',
  'click:clear',
])

defineOptions({ inheritAttrs: false })

const attrs = useAttrs()
const [rootAttrs, compAttrs] = filterInputAttrs(attrs)

const [{
  modelValue: _,
  ...inputProps
}] = filterInputProps(props)

const [fieldProps] = filterFieldProps(props)
const refFlatPicker = ref()
const { focused } = useFocus(refFlatPicker)
const isCalendarOpen = ref(false)
const isInlinePicker = ref(false)

// flat picker prop manipulation
if (compAttrs.config && compAttrs.config.inline) {
  isInlinePicker.value = compAttrs.config.inline
  Object.assign(compAttrs, { altInputClass: 'inlinePicker' })
}

const onClear = el => {
  el.stopPropagation()
  nextTick(() => {
    emit('update:modelValue', '')
    emit('click:clear', el)
  })
}

const { theme } = useThemeConfig()
const vuetifyTheme = useTheme()
const vuetifyThemesName = Object.keys(vuetifyTheme.themes.value)

// Themes class added to flat-picker component for light and dark support
const updateThemeClassInCalendar = () => {

  // ℹ️ Flatpickr don't render it's instance in mobile and device simulator
  if (!refFlatPicker.value.fp.calendarContainer)
    return
  vuetifyThemesName.forEach(t => {
    refFlatPicker.value.fp.calendarContainer.classList.remove(`v-theme--${ t }`)
  })
  refFlatPicker.value.fp.calendarContainer.classList.add(`v-theme--${ vuetifyTheme.global.name.value }`)
}

watch(theme, updateThemeClassInCalendar)
onMounted(() => {
  updateThemeClassInCalendar()
})

const emitModelValue = val => {
  emit('update:modelValue', val)
}
</script>

<template>
  <!-- v-input -->
  <VInput
    v-bind="{ ...inputProps, ...rootAttrs }"
    :model-value="modelValue"
    :hide-details="props.hideDetails"
    class="position-relative"
  >
    <template #default="{ isDirty, isValid, isReadonly }">
      <!-- v-field -->
      <VField
        v-bind="fieldProps"
        :active="focused || isDirty.value || isCalendarOpen"
        :focused="focused || isCalendarOpen"
        role="textbox"
        :dirty="isDirty.value || props.dirty"
        :error="isValid.value === false"
        @click:clear="onClear"
      >
        <template #default="{ props: vFieldProps }">
          <div v-bind="vFieldProps">
            <!-- flat-picker  -->
            <FlatPickr
              v-if="!isInlinePicker"
              v-bind="compAttrs"
              ref="refFlatPicker"
              :model-value="modelValue"
              class="flat-picker-custom-style"
              :disabled="isReadonly.value"
              @on-open="isCalendarOpen = true"
              @on-close="isCalendarOpen = false"
              @update:model-value="emitModelValue"
            />

            <!-- simple input for inline prop -->
            <input
              v-if="isInlinePicker"
              :value="modelValue"
              class="flat-picker-custom-style"
              type="text"
            >
          </div>
        </template>
      </VField>
    </template>
  </VInput>

  <!-- flat picker for inline props -->
  <FlatPickr
    v-if="isInlinePicker"
    v-bind="compAttrs"
    ref="refFlatPicker"
    :model-value="modelValue"
    @update:model-value="emitModelValue"
    @on-open="isCalendarOpen = true"
    @on-close="isCalendarOpen = false"
  />
</template>

<style lang="scss">
/* stylelint-disable no-descending-specificity */
@use "flatpickr/dist/flatpickr.css";
@use "@styles/variables/_vuetify.scss" as vuetify;
@use "vuetify/lib/styles/tools/_elevation" as mixins_elevation;

.flat-picker-custom-style {
  position: absolute;
  color: inherit;
  inline-size: 100%;
  inset: 0;
  outline: none;
  padding-block: 0;
  padding-inline: var(--v-field-padding-start);
}

$body-color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));

// hide the input when your picker is inline
input[altinputclass="inlinePicker"] {
  display: none;
}

.flatpickr-calendar {
  border-radius: vuetify.$border-radius-root;
  background-color: rgb(var(--v-theme-surface));
  inline-size: 16.625rem;
  margin-block-start: 0.1875rem;

  @include mixins_elevation.elevation(6);

  .flatpickr-day,
  .flatpickr-weekday {
    color: $body-color;

    &.today {
      border-color: rgb(var(--v-theme-primary));

      &:hover {
        border-color: rgb(var(--v-theme-primary));
        background: transparent;
        color: $body-color;
      }
    }

    &.selected,
    &.selected:hover {
      border-color: rgb(var(--v-theme-primary));
      background: rgb(var(--v-theme-primary));
      box-shadow: 0 2px 4px rgba(var(--v-theme-primary), 40%);
      color: rgb(var(--v-theme-on-primary));
    }

    &.inRange,
    &.inRange:hover {
      border: none !important;
      border-radius: 0 !important;
      background: rgba(var(--v-theme-primary), var(--v-focus-opacity)) !important;
      box-shadow: none !important;
      color: rgb(var(--v-theme-primary));
    }

    &.startRange {
      box-shadow: none;
    }

    &.endRange {
      box-shadow: none;
    }

    &.startRange,
    &.endRange,
    &.startRange:hover,
    &.endRange:hover {
      border-color: rgb(var(--v-theme-primary));
      background: rgb(var(--v-theme-primary));
      color: rgb(var(--v-theme-on-primary));
    }

    &.selected.startRange + .endRange:not(:nth-child(7n + 1)),
    &.startRange.startRange + .endRange:not(:nth-child(7n + 1)),
    &.endRange.startRange + .endRange:not(:nth-child(7n + 1)) {
      box-shadow: -10px 0 0 rgb(var(--v-theme-primary));
    }

    &.flatpickr-disabled,
    &.prevMonthDay:not(.startRange,.inRange),
    &.nextMonthDay:not(.endRange,.inRange) {
      opacity: var(--v-disabled-opacity);
    }

    &:hover {
      border-color: rgba(var(--v-theme-surface-variant), var(--v-hover-opacity));
      background: rgba(var(--v-theme-surface-variant), var(--v-hover-opacity));
    }
  }

  &::after,
  &::before {
    display: none;
  }

  .flatpickr-months {
    .flatpickr-prev-month,
    .flatpickr-next-month {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      background-color: rgba(var(--v-theme-on-surface), var(--v-selected-opacity));
      block-size: 24px;
      fill: $body-color;
      inline-size: 24px;
      inset-block-start: -5px;

      &:hover i,
      &:hover svg {
        fill: rgb(var(--v-theme-primary));
      }

      svg {
        position: absolute;
      }
    }
  }

  .flatpickr-current-month span.cur-month {
    font-weight: 300;
  }

  &.open {
    // Open calendar above overlay
    z-index: 2401;
  }

  &.hasTime.open {
    .flatpickr-time {
      border-color: rgba(var(--v-border-color), var(--v-border-opacity));
      block-size: auto;
    }
  }
}

// Time picker hover & focus bg color
.flatpickr-time input:hover,
.flatpickr-time .flatpickr-am-pm:hover,
.flatpickr-time input:focus,
.flatpickr-time .flatpickr-am-pm:focus {
  background: transparent;
}

// Time picker
.flatpickr-time {
  .flatpickr-am-pm,
  .flatpickr-time-separator,
  input {
    color: $body-color;
  }

  .numInputWrapper {
    span {
      &.arrowUp {
        &::after {
          border-block-end-color: rgb(var(--v-border-color));
        }
      }

      &.arrowDown {
        &::after {
          border-block-start-color: rgb(var(--v-border-color));
        }
      }
    }
  }
}

//  Added bg color for flatpickr input only as it has default readonly attribute
.flatpickr-input[readonly],
.flatpickr-input ~ .form-control[readonly],
.flatpickr-human-friendly[readonly] {
  background-color: inherit;
  opacity: 1 !important;
}

// week sections
.flatpickr-weekdays {
  block-size: 21px;
  inline-size: 266px;
  margin-block: 11px;

  .flatpickr-weekday {
    color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
    font-size: 14px;
    font-weight: 500;
  }
}

// Month and year section
.flatpickr-current-month {
  .flatpickr-monthDropdown-months {
    appearance: none;
  }

  .flatpickr-monthDropdown-months,
  .numInputWrapper {
    padding: 2px;
    border-radius: 4px;
    color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
    font-size: 1rem;
    font-weight: 400;
    transition: all 0.15s ease-out;

    span {
      display: none;
    }

    .flatpickr-monthDropdown-month {
      background-color: rgb(var(--v-theme-surface));
    }
  }
}

.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover {
  color: $body-color;
}

.flatpickr-months {
  padding-block: 0.3rem;
  padding-inline: 0;

  .flatpickr-prev-month,
  .flatpickr-next-month {
    inset-block-start: 0.75rem !important;
    margin-inline: 0.875rem;
  }
}

.flatpickr-rContainer {
  inline-size: 16.625rem;

  .flatpickr-weekdays {
    padding-inline: 0.8rem;
  }

  .flatpickr-days {
    min-inline-size: 16.625rem;

    .dayContainer {
      justify-content: center !important;
      inline-size: 16.625rem;
      min-inline-size: 16.625rem;
      padding-block-end: 0.5rem;
      padding-block-start: 0;

      .flatpickr-day {
        border-radius: 6px;
        block-size: 2.25rem;
        line-height: 2.25rem;
        margin-block-start: 0 !important;
        max-inline-size: 2.25rem;
      }
    }

    .flatpickr-day.selected.startRange,
    .flatpickr-day.startRange.startRange,
    .flatpickr-day.endRange.startRange {
      border-radius: 6px 0 0 6px;
      box-shadow: 0 2px 4px rgba(var(--v-theme-primary), 40%);
    }

    .flatpickr-day.selected.endRange,
    .flatpickr-day.startRange.endRange,
    .flatpickr-day.endRange.endRange {
      border-radius: 0 6px 6px 0;
      box-shadow: 0 2px 4px rgba(var(--v-theme-primary), 40%);
    }
  }
}
</style>
