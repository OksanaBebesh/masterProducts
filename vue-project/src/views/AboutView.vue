<script setup>
import DocumentationIcon from "../components/icons/IconDocumentation.vue";
import DesciptionItem from "@/components/DesciptionItem.vue";
</script>

<template>
  <DesciptionItem>
    <template #icon>
      <DocumentationIcon />
    </template>

    <template #heading>Acceptance criteria</template>

    As a user I open a page in any browser and see 10 products presented in a
    table And I see Product title, Price, Description, Photo as a head of the
    table (style doesn't metter). And I see "Load more ..." Button below the
    table Then I click the button, the next 5 products appear in the table And
    the button is below the table again And I can upload as many products as I
    want till new products are there. When there are no new products, the button
    should be disabled.
  </DesciptionItem>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
