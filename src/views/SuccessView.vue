<template>
  <div class="success-page">
    <div class="sun-glow-aura"></div>
    <div class="summary-card">
      <div class="icon-header">🐢</div>
      <h1>It's beautiful!</h1>
      <p class="subtitle">Your <strong>Sunnee Kids</strong> canteen is ready. <br> Together we protect our oceans.</p>

      <div class="final-display">
        <div class="preview-side">
          <div class="soft-glow-inner"></div>
          <BottlePreview class="final-bottle" />
        </div>
      </div>

      <div class="btn-container">
        <button @click="showModal = true" class="btn-confirm">Confirm and Order 🛒</button>
        <button @click="goBack" class="btn-edit">Edit colors</button>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="modal-pop">
        <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
          <div class="modal-box">
            <div class="modal-icon">🌊</div>
            <h2>Thank you, little hero!</h2>
            <p>Your order has been received. Together we are cleaning the ocean!</p>
            <button @click="closeAndReset" class="btn-home">Back to Home</button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { resetBottle } from '../store';
import BottlePreview from '../components/BottlePreview.vue';

const router = useRouter();
const showModal = ref(false);
const goBack = () => router.push('/configurator/3');
const closeAndReset = () => { showModal.value = false; resetBottle(); router.push('/'); };
</script>

<style scoped>
.success-page { min-height: 90vh; display: flex; align-items: center; justify-content: center; background: #fffdf9; position: relative; overflow: hidden; padding: 1.5rem; }
.sun-glow-aura { position: absolute; top: -10%; right: -10%; width: 150%; height: 600px; background: radial-gradient(circle, rgba(255, 213, 79, 0.1) 0%, transparent 70%); filter: blur(60px); z-index: 0; }
.summary-card { background: white; padding: 2.5rem; border-radius: 50px; text-align: center; max-width: 480px; width: 100%; box-shadow: 0 20px 50px rgba(46, 125, 50, 0.05); border: 1px solid #f9f9f9; z-index: 1; }
h1 { color: #2E7D32; font-size: 2.4rem; font-weight: 900; margin: 0; }
.subtitle { color: #555; font-size: 1rem; margin: 1rem 0 1.5rem 0; }
.modal-icon, .icon-header { font-size: 3rem; margin-bottom: 0.5rem; }
.final-display { margin: 1rem 0; display: flex; justify-content: center; width: 100%; }
.preview-side { position: relative; display: flex; justify-content: center; align-items: center; width: 100%; height: 350px; }
.soft-glow-inner { position: absolute; width: 100%; height: 100%; background: radial-gradient(circle, rgba(255, 241, 204, 0.4) 0%, transparent 70%); z-index: 0; }
.final-bottle { transform: scale(0.9); z-index: 1; }
.btn-container { display: flex; flex-direction: column; gap: 0.8rem; }
.btn-confirm { background: #2E7D32; color: white; border: none; padding: 1.1rem; border-radius: 50px; font-weight: 800; cursor: pointer; }
.btn-edit { background: white; color: #2E7D32; border: 2px solid #E8F5E9; padding: 0.9rem; border-radius: 50px; font-weight: 800; cursor: pointer; }
.modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.3); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 9999; }
.modal-box { background: white; padding: 3rem; border-radius: 40px; text-align: center; max-width: 400px; width: 85%; }
.btn-home { background: #FFA000; color: white; border: none; padding: 1rem 2rem; border-radius: 50px; font-weight: 800; margin-top: 1.5rem; cursor: pointer; }
.modal-pop-enter-active, .modal-pop-leave-active { transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
.modal-pop-enter-from, .modal-pop-leave-to { opacity: 0; transform: scale(0.8) translateY(20px); }
</style>