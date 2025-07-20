<template>
    <li>
        <slot/>
        <p v-if="slotVoid">Meu Item</p>    
    </li>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue';

const slot = useSlots()
const slotVoid = !slot.default || slot.default().length === 0


</script>