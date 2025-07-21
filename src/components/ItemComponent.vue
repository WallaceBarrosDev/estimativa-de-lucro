<template>
    <li>
        <div>
            <p v-if="slotVoid">Meu Item</p>
            <p v-else><slot/></p>
            
            <small>R$ 20,00</small>
            <small>2 kg</small>
        </div>
        <div>
            <button class="edit">E</button>
            <button class="delet">D</button>
        </div>
    </li>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue';

const slot = useSlots()
const slotVoid = !slot.default || slot.default().length === 0

</script>

<style scoped>
    li {
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid #b1b1b1;
        border-bottom: 1px solid #b1b1b1;
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

    small {
        font-size: 0.5rem;
        
        &:last-child {
            margin-left: auto;
        }
    }

    div:last-child {
        display: flex;
        width: 70px;
        justify-content: center;
        gap: 4px;
    }

    button {
        background-color: transparent;
        transition: 300ms;
        padding: 0;
        width: 25px;
        height: 25px;
    }

    .edit {
        border: 1px solid #84FF6C;
        &:hover {
            border-color: #5CF83D;
        }
    }

    .delet {
        border: 1px solid #FF6C6C;
        &:hover {
            border-color: #FF5353;
        }
    }
</style>