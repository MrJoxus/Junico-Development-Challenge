<template lang="">
  <div>
    <div
      class="box-border transition-all duration-150 ease-linear m-8"
      :style="[levelStyle, radiusStyle, insetStyle]"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <slot />
      <div>
        hoverable {{ hoverable }}
      </div>
      <div>
        hover {{ hover }}
      </div>
      <div>
        {{ levelStyle }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

export interface Props {
  radius: 0 | 1 | 2 | 3
  level: 0 | 1 | 2 | 3
  inset: 0 | 1 | 2 | 3
  color: string
  hoverable: boolean
}

const props = withDefaults(defineProps<Props>(), {
  radius: 0,
  level: 0,
  inset: 0,
  color: '#fff'
})

const hover = ref(false)

function between (x: number, min: number, max: number) {
  return x >= min && x <= max
}

const levelStyle = computed(() => {
  const listStyles = [
    {
      borderWidth: '1px',
      borderColor: props.color
    },
    {
      borderWidth: '2px',
      borderColor: props.color
    },
    {
      borderWidth: '2px',
      borderColor: props.color,
      boxShadow: `2px 2px 0 0 ${props.color}`
    },
    {
      borderWidth: '4px',
      borderColor: props.color,
      boxShadow: `3px 3px 0 0 ${props.color}`
    }
  ]

  const index = between(props.level, 0, 3) ? props.level : 0

  if (!(props.hoverable && hover.value)) {
    return listStyles[index]
  }

  if (index === 3) {
    return listStyles[index - 1]
  }

  return listStyles[index + 1]
})

const radiusStyle = computed(() => {
  const index = between(props.radius, 0, 3) ? props.radius : 0
  return [
    { borderRadius: '0px' },
    { borderRadius: '8px' },
    { borderRadius: '16px' },
    { borderRadius: '24px' }
  ][index]
})

const insetStyle = computed(() => {
  const index = between(props.inset, 0, 3) ? props.inset : 0
  return [
    { padding: '0px' },
    { padding: '8px' },
    { padding: '16px' },
    { padding: '24px' }
  ][index]
})
</script>

<style lang="">

</style>
