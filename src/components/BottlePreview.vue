<template>
  <div class="bottle-wrapper">
    <div class="floor-shadow"></div>

    <div class="bottle-canvas">
      <div class="part cap" :style="{ backgroundColor: state.cap }">
        <div class="gloss"></div>
        <div class="inner-shadow"></div>
      </div>
      
      <div class="part body" :style="{ backgroundColor: state.body }">
        <div class="gloss"></div>
        <div class="inner-shadow"></div>
        
        <div class="logo-container">
          <img src="/logo.png" alt="Logo" class="bottle-logo highlight-logo" />
        </div>
      </div>
      
      <div class="part bottom" :style="{ backgroundColor: state.bottom }">
        <div class="gloss"></div>
        <div class="inner-shadow"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { bottleState as state } from '../store';
</script>

<style scoped>
.bottle-wrapper {
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bottle-canvas {
  position: relative;
  width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
}

.part {
  width: 100%;
  position: relative;
  transition: background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.05);
}

.gloss {
  position: absolute;
  top: 0; left: 10%; width: 22%; height: 100%;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent);
  z-index: 5;
}

.inner-shadow {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.1) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.15) 100%);
  z-index: 4;
}

.cap { height: 52px; width: 90px; border-radius: 18px 18px 8px 8px; margin-bottom: 5px; }
.body { height: 240px; width: 165px; border-radius: 18px; margin-bottom: 4px; display: flex; align-items: center; justify-content: center; }
.bottom { height: 80px; width: 165px; border-radius: 10px 10px 50px 50px; }

.logo-container {
  z-index: 20;
  width: 95px;
  display: flex;
  justify-content: center;
}

.highlight-logo {
  width: 100%;
  height: auto;
  display: block;
  filter: drop-shadow(0 1px 3px rgba(0,0,0,0.2)); 
}

.floor-shadow {
  position: absolute;
  bottom: 0px; width: 130px; height: 12px;
  background: rgba(0,0,0,0.1); filter: blur(8px); border-radius: 50%;
}

@media (max-width: 768px) {
  .bottle-canvas { width: 140px; }
  .body { height: 190px; width: 135px; }
  .cap { width: 75px; height: 45px; }
  .bottom { width: 135px; height: 70px; }
  .logo-container { width: 70px; }
}
</style>