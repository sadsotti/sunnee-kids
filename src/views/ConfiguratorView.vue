<template>
  <div class="configurator" v-if="configMap[Number(step)]" :key="step">
    <div class="panel">
      <div class="info">
        <span class="step-tag">PHASE {{ step }} OF 3</span>
        <h1>Customize the <span>{{ currentConfig.label }}</span></h1>
      </div>
      
      <div class="colors-grid">
        <button v-for="c in COLORS" :key="c" 
          :style="{ background: c }" 
          :class="{ active: state[currentConfig.key] === c, 'white-dot': c === '#e0e0e0' }"
          @click="state[currentConfig.key] = c" 
          class="color-dot">
          <div class="inner-check" v-if="state[currentConfig.key] === c" :style="{ color: c === '#e0e0e0' ? '#2E7D32' : 'white' }">✓</div>
        </button>
      </div>

      <div class="nav-btns">
        <button @click="goBack" class="btn-secondary">{{ Number(step) === 1 ? 'Home' : 'Back' }}</button>
        <button @click="next" class="btn-primary">{{ Number(step) < 3 ? 'Continue' : 'Finish ✨' }}</button>
      </div>
    </div>
    
    <div class="preview-side">
      <div class="soft-glow"></div>
      <BottlePreview class="bottle-zoom" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { bottleState as state, COLORS } from '../store';
import BottlePreview from '../components/BottlePreview.vue';

const props = defineProps(['step']);
const router = useRouter();

const configMap = {
  1: { key: 'cap', label: 'Cap' },
  2: { key: 'body', label: 'Body' },
  3: { key: 'bottom', label: 'Bottom' }
};

const currentConfig = computed(() => configMap[Number(props.step)]);
const next = () => { if (Number(props.step) < 3) router.push(`/configurator/${Number(props.step) + 1}`); else router.push('/success'); };
const goBack = () => { if (Number(props.step) === 1) router.push('/'); else router.push(`/configurator/${Number(props.step) - 1}`); };
</script>

<style scoped>
.configurator { display: grid; grid-template-columns: 1fr 1fr; min-height: 85vh; padding: 0 8%; align-items: center; background: #fffdf9; gap: 4rem; overflow-x: hidden; }
.info h1 { color: #2E7D32; font-size: 3rem; font-weight: 900; margin: 0.5rem 0; line-height: 1.1; }
.info h1 span { color: #FFA000; }
.step-tag { color: #FFA000; font-weight: 800; font-size: 0.9rem; letter-spacing: 1px; }
.colors-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin: 2.5rem 0; }
.color-dot { width: 55px; height: 55px; border-radius: 50%; border: 3px solid white; cursor: pointer; box-shadow: 0 5px 15px rgba(0,0,0,0.08); transition: 0.3s; display: flex; align-items: center; justify-content: center; }
.color-dot.active { transform: scale(1.15); border-color: #2E7D32; }
.nav-btns { display: flex; gap: 1rem; }
.btn-primary { flex: 2; background: #2E7D32; color: white; border: none; padding: 1.2rem; border-radius: 20px; font-weight: 800; cursor: pointer; font-size: 1.1rem; }
.btn-secondary { flex: 1; background: white; border: 2px solid #E8F5E9; color: #2E7D32; border-radius: 20px; font-weight: 700; cursor: pointer; }
.preview-side { position: relative; display: flex; justify-content: center; align-items: center; }
.soft-glow { position: absolute; width: 120%; height: 120%; background: radial-gradient(circle, rgba(255, 241, 204, 0.3) 0%, transparent 70%); z-index: 0; }
@media (max-width: 900px) { .configurator { display: flex; flex-direction: column; padding: 1.5rem; text-align: center; } .preview-side { order: -1; width: 100%; margin-bottom: 1rem; height: 320px; } .bottle-zoom { transform: scale(0.85); } }
</style>