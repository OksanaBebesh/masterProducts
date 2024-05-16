<template>
  <div class="row">
    <div class="id-product">
      <slot name="id"></slot>
    </div>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="price">
      <slot name="price"></slot>
    </div>
    <div class="product-description">
      <slot name="product-description"></slot>
    </div>
    <div class="product-photo">
      <slot name="product-photo"></slot>
    </div>
  </div>
</template>

<style>
.row {
  display: flex;
  flex-wrap: wrap;
}
</style>
