<template>
    <ul>
        <ItemComponent v-for="({price, weight, amount, name}, index) in products" :key="index"
            :price="price" :weight="weight" :amount="amount"> {{ name }}
        </ItemComponent>
    </ul>
</template>

<script lang="ts" setup>
import type { Product } from '../types';
import ItemComponent from './ItemComponent.vue';

const { products } = defineProps<{products:Array<Product>}>()
</script>

<style scoped>
</style>