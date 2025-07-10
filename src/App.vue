<template>
  <main class="container">
    <section class="card">
      <h1>Estimativa de lucro</h1>

      <div class="form-group">
        <label>Capital investido</label>
        <input v-model.number="capital" type="number" placeholder="Ex: 400" />
      </div>

      <div class="form-group">
        <label>Quantidade produzida</label>
        <input v-model.number="quantidade" type="number" placeholder="Ex: 60" />
      </div>

      <div class="form-group">
        <label>Preço de venda</label>
        <input v-model.number="precoVenda" type="number" placeholder="Ex: 7.50" />
      </div>

      <div class="results">
        <p><strong>Faturamento (Receita):</strong> R$ {{ faturamento.toFixed(2) }}</p>
        <p><strong>Custo por unidade:</strong> R$ {{ custoUnitario.toFixed(2) }}</p>
        <p><strong>Lucro por unidade:</strong> R$ {{ lucroUnitario.toFixed(2) }}</p>
        <p><strong>Lucro total:</strong> R$ {{ lucroTotal.toFixed(2) }}</p>
      </div>


      <canvas ref="graficoRef" class="chart"></canvas>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from 'chart.js'

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip)

const capital = ref(0)
const quantidade = ref(0)
const precoVenda = ref(0)

const custoUnitario = computed(() =>
  quantidade.value > 0 ? capital.value / quantidade.value : 0
)
const lucroUnitario = computed(() => precoVenda.value - custoUnitario.value)
const lucroTotal = computed(() => lucroUnitario.value * quantidade.value)
const faturamento = computed(() => precoVenda.value * quantidade.value)

const graficoRef = ref<HTMLCanvasElement | null>(null)
let grafico: Chart | null = null

function desenharGrafico() {
  if (!graficoRef.value) return

  const dados = {
    labels: ['Custo', 'Receita', 'Lucro'],
    datasets: [
      {
        label: 'Valores (R$)',
        data: [
          capital.value,
          precoVenda.value * quantidade.value,
          lucroTotal.value,
        ],
        backgroundColor: ['#f87171', '#60a5fa', '#34d399'],
      },
    ],
  }

  if (grafico) {
    grafico.data = dados
    grafico.update()
  } else {
    grafico = new Chart(graficoRef.value, {
      type: 'bar',
      data: dados,
      options: {
        responsive: true,
        plugins: { tooltip: { enabled: true } },
        scales: { y: { beginAtZero: true } },
      },
    })
  }
}

watch([capital, quantidade, precoVenda], desenharGrafico)
onMounted(desenharGrafico)
</script>

<style scoped>
.container {
  min-height: 100vh;
  background: #f5f7fa;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 1rem;
}

.card {
  background: white;
  max-width: 400px;
  width: 100%;
  padding: 1.5rem 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgb(0 0 0 / 0.1);
  box-sizing: border-box;
}

h1 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #4f46e5;
  text-align: center;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
}

input[type='number'] {
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border-radius: 12px;
  border: 1px solid #d1d5db;
  outline-offset: 2px;
  transition: border-color 0.2s;
}

input[type='number']:focus {
  border-color: #4f46e5;
  outline: none;
}

.results {
  margin-top: 1.5rem;
  color: #1f2937;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
}

.results p {
  margin-bottom: 0.5rem;
}

.chart {
  margin-top: 1.5rem;
  width: 100% !important;
  height: 220px !important;
}
</style>
