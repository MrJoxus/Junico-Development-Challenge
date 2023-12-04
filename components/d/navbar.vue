<template>
  <div class="navbar bg-base-100 container mx-auto">
    <div class="navbar-start">
      <slot name="start" />
    </div>
    <div class="navbar-center hidden lg:flex">
      <slot name="center" />
    </div>
    <div class="navbar-end">
      <slot name="end" />
    </div>
  </div>
</template>
