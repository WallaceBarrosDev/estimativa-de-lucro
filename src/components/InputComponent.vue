<template>
    <input type="text" id="input-component" placeholder="Meu Input">
</template>

<style scoped>
    input {
        border-radius: 10px;
        border: 2px solid #A8A8A8;
        color: #A8A8A8;
        font: inherit;  
        padding: 5px;
        background-color: transparent;
    }
    
    input::placeholder {
        color: #A8A8A8;
        font-style: normal;
    }
</style>