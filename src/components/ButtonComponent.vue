<template>
    <button :class="option">
        <slot />
        <p v-if="slotsVoid">Botão</p>
    </button>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue';

const slots = useSlots()
const slotsVoid = !slots.default || slots.default().length === 0;

const { option } = defineProps<{
    option?:ButtonOptions
}>();

</script>

<style scoped>
    button {
        background-color: #84FF6C;
        border-radius: 15px;
        color: #3F3F3F; 
        font-size: 1.2rem;
        box-shadow: 2px 2px 5px #00000086;
    }

    button:hover {
        background-color: #5CF83D;
        box-shadow: 2px 2px 7px #000000ff;
    }

    .normal {
        background-color: #84FF6C;

        &:hover {
            background-color: #5CF83D;
        }
    }

    .cancel {
        background-color: #FF6C6C;

        &:hover {
            background-color: #FF5353;
        }
    }
</style>