<template>
  <div class="home-wrapper">
    <div class="sun-glow-soft"></div>
    <div class="home-header">
      <h1>An island of adventures, <br><span>in your hand.</span></h1>
    </div>

    <div class="home-preview">
      <div class="preview-side floating-anim">
        <div class="soft-glow-inner"></div>
        <BottlePreview class="home-bottle-zoom" />
      </div>
    </div>

    <div class="home-cta">
      <p class="description">
        Every <strong>Sunnee Kids</strong> canteen is crafted from recycled marine plastic. 
        A unique design for the little guardians of the ocean.
      </p>
      <button @click="startFresh" class="btn-start">Start Now 🌊</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { resetBottle, bottleState, COLORS } from '../store';
import BottlePreview from '../components/BottlePreview.vue';

const router = useRouter();
let interval = null;

onMounted(() => {
  interval = setInterval(() => {
    bottleState.cap = COLORS[Math.floor(Math.random() * COLORS.length)];
    bottleState.body = COLORS[Math.floor(Math.random() * COLORS.length)];
    bottleState.bottom = COLORS[Math.floor(Math.random() * COLORS.length)];
  }, 2500);
});

onUnmounted(() => { if (interval) clearInterval(interval); });
const startFresh = () => { resetBottle(); router.push('/configurator/1'); };
</script>

<style scoped>

.home-wrapper {
  min-height: 90vh; display: grid; padding: 0 10%; align-items: center;
  grid-template-areas: "header preview" "cta preview";
  grid-template-columns: 1fr 1fr; background: #fffef9; position: relative; overflow: hidden;
}
.sun-glow-soft { position: absolute; top: -10%; right: -5%; width: 700px; height: 700px; background: radial-gradient(circle, rgba(255, 241, 204, 0.4) 0%, transparent 70%); filter: blur(60px); z-index: 0; }
h1 { font-size: 3.5rem; color: #2E7D32; font-weight: 900; grid-area: header; align-self: end; line-height: 1.1; z-index: 1; }
h1 span { color: #FFA000; }
.home-cta { grid-area: cta; align-self: start; margin-top: 2rem; z-index: 1; }
.description { font-size: 1.2rem; color: #555; max-width: 450px; margin-bottom: 2.5rem; line-height: 1.6; }
.btn-start { background: #2E7D32; color: white; padding: 1.2rem 3.5rem; border-radius: 50px; border: none; font-size: 1.2rem; font-weight: 800; cursor: pointer; box-shadow: 0 10px 20px rgba(46, 125, 50, 0.2); transition: 0.3s; }
.home-preview { grid-area: preview; display: flex; justify-content: center; align-items: center; z-index: 2; }
.preview-side { position: relative; display: flex; justify-content: center; align-items: center; width: 100%; min-height: 500px; }
.soft-glow-inner { position: absolute; width: 120%; height: 120%; background: radial-gradient(circle, rgba(255, 241, 204, 0.3) 0%, transparent 70%); z-index: 0; }
.home-bottle-zoom { transform: scale(1.1); z-index: 1; }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
.floating-anim { animation: float 5s ease-in-out infinite; }
@media (max-width: 900px) { .home-wrapper { display: flex; flex-direction: column; text-align: center; padding: 4rem 1.5rem; } .home-header { order: 1; } .home-preview { order: 2; height: 380px; } .home-bottle-zoom { transform: scale(0.85); } .home-cta { order: 3; } }
</style>