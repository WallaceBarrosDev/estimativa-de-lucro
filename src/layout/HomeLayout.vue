<template>
    <header>
        <h1>Olá, Usuáio</h1>
    </header>
    <main>
        <LabelBoxComponent title="Ingredientes" text-button="Ingredientes">
            Adicione novos ingredientes ao estoque
        </LabelBoxComponent>
        <LabelBoxComponent title="Receitas" text-button="Receitas">
            Adicione novos ingredientes ao estoque
        </LabelBoxComponent>
        <LabelBoxComponent title="Simular Lucro" text-button="Simular Lucro">
            Adicione novos ingredientes ao estoque
        </LabelBoxComponent>
    </main>
</template>

<script lang="ts" setup>
import LabelBoxComponent from '../components/LabelBoxComponent.vue';
</script>

<style scoped>
    header {
        border-bottom:2px solid #A8A8A8;
        padding: 24px 0px;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 35px;
    }
</style>