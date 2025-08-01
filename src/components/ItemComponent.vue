<template>
    <li>
        <div>
            <p v-if="slotVoid">Meu Item</p>
            <p v-else><slot/></p>
            
            <small>R$ {{ price }}</small>
            <small>{{ weight }} kg</small>
        </div>
        <div class="amount">{{ amount }}</div>
        <div>
            <button class="edit">E</button>
            <button class="delet">D</button>
        </div>
    </li>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue';
import type { ProductAttributes } from '../types';

const slot = useSlots()
const slotVoid = !slot.default || slot.default().length === 0

const {price, weight, amount } = defineProps<ProductAttributes>()
</script>

<style scoped>
    li {
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid #b1b1b1;
        border-bottom: 1px solid #b1b1b1;
        position: relative;
        box-sizing: border-box;

        &:not(:first-child) {
            border-top: none;
        }
    }

    div {
        width: 50%;
        &>p {
            width: 100%;
            text-align: start;
        }

        display: flex;
        flex-wrap: wrap;
    }

    div:last-child {
        display: flex;
        width: 70px;
        justify-content: center;
        gap: 4px;
    }

    small {
        font-size: 0.5rem;
        
        &:last-child {
            margin-left: auto;
        }
    }

    .amount {
        position: absolute;
        font-size: xx-small;
        border-radius: 50%;
        border: 1px solid #b1b1b1;
        background-color: #fff;
        width: 15px;
        height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;

        top: 0;
        right: 0;

        transform: translate(50%, calc(-50% - 1px));
    }

    button {
        background-color: transparent;
        transition: 200ms;
        padding: 0;
        width: 25px;
        height: 25px;
    }

    .edit {
        border: 1px solid #84FF6C;
        &:hover {
            border: 1.24px solid #5CF83D;
            font-size: 1.04rem;
        }
    }

    .delet {
        border: 1px solid #FF6C6C;
        &:hover {
            border: 1.24px solid #FF5353;
            font-size: 1.04rem;
        }
    }
</style>