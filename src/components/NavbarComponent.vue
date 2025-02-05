<template>
  <nav>
    <router-link
        to="/"
        class="nav-btn"
        :class="{ active: $route.path === '/' }"
    >
      <svg viewBox="0 0 24 24" width="16" height="16">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67
         0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
      A propos
    </router-link>

    <router-link
        to="/projects"
        class="nav-btn"
        :class="{ active: $route.path === '/projects' }"
    >
      <svg viewBox="0 0 24 24" width="16" height="16">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11
        0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0
        1.11.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6
        0h-4V4h4v2z"/>
      </svg>
      Projets
    </router-link>

    <router-link
        to="/skills"
        class="nav-btn"
        :class="{ active: $route.path === '/skills' }"
    >
      <svg viewBox="0 0 24 24" width="16" height="16">
        <path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7
         c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0
         1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4
         6H7V7h10v10z"/>
      </svg>
      Compétences
    </router-link>

    <router-link
        to="/contact"
        class="nav-btn"
        :class="{ active: $route.path === '/contact' }"
    >
      <svg viewBox="0 0 24 24" width="16" height="16">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99
        2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9
        2-2V6c0-1.1-.9-2-2-2zm0 4-8
        5-8-5V6l8 5 8-5v2z"/>
      </svg>
      Contact
    </router-link>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.nav-btn {
  text-decoration: none; /* Supprime le soulignement */
}

.nav-btn:hover,
.nav-btn.active {
  text-decoration: none; /* Assure que le soulignement ne revient pas au survol */
}
</style>
