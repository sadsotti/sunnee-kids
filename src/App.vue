<template>
  <div class="app-container">
    <nav class="navbar">
      <router-link to="/" class="logo-link">
        <img src="/logo.png" alt="Sunnee Kids" class="logo-img" />
        <div class="brand-text">
          Sunnee <span>Kids</span>
        </div>
      </router-link>
      
      <div class="mission">🌿 100% Recycled Marine Plastic</div>
    </nav>

    <main class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="footer">
      <div class="footer-content">
        <p>© 2026 <strong>Sunnee Kids</strong>. All rights reserved.</p>
        <p class="credits">
          Second project developed for the <strong>start2impact Vue.js Course</strong>. 
          Made by <span>Lorenzo Sottile</span> with ♡
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-container { display: flex; flex-direction: column; min-height: 100vh; background: #fffdf5; }
.content { flex: 1; }

.navbar { 
  display: flex; justify-content: space-between; padding: 1rem 8%; 
  background: #fffdf5; align-items: center; border-bottom: 2px solid #FFF1CC;
  position: sticky; top: 0; z-index: 100;
}

.logo-link { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; }
.logo-img { height: 55px; width: auto; }
.brand-text { font-weight: 900; font-size: 1.6rem; color: #2E7D32; margin-left: 10px; }
.brand-text span { color: #FFA000; }

.mission { 
  display: flex; align-items: center; justify-content: center;
  font-size: 0.85rem; font-weight: 800; color: #2E7D32; background: #E8F5E9; 
  padding: 0 25px; height: 42px; border-radius: 30px; white-space: nowrap;
}

.footer { background: #fffdf5; border-top: 1px solid #FFF1CC; padding: 2rem 1rem; text-align: center; }
.footer p { margin: 0.4rem 0; color: #708090; font-size: 0.9rem; }
.footer strong, .credits span { color: #2E7D32; font-weight: 800; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 600px) {
  .brand-text { display: none; }
  .mission { font-size: 0.75rem; padding: 0 15px; height: 36px; }
}
</style>