<template>
    <article>
        <h3>{{ title }}</h3>
        <slot></slot>
        <ButtonComponent>
            {{ textButton }}
        </ButtonComponent>
    </article>
</template>

<script lang="ts" setup>
import ButtonComponent from './ButtonComponent.vue';

const { title, textButton } = defineProps<{
    title: string,
    textButton:string
}>() 
</script>

<style scoped>
    article {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 24px;
        border:1px solid #A8A8A8;
        border-radius: 4%;
        width: 50vw;
        max-width: 350px;
        margin: auto;
    }
</style>