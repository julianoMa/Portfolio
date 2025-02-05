<script setup>
import { ref } from "vue";

const projects = ref([
  {
    name: "Portfolio",
    description: "La version de mon portfolio que vous voyez actuellement, plutôt sympa non? ;)",
    stack: ["HTML", "CSS", "Javascript"],
    date: "Février 2025",
    git: "https://github.com/julianoMa/Portfolio",
  },
  {
    name: "Ecoledirecte Terminal Client",
    description: "Un script python permettant d'utiliser le site de Pronote via le terminal.",
    stack: ["Python"],
    date: "Mai 2024",
    git: "https://github.com/julianoMa/ecoledirecte-terminal-client",
  },
]);

const selectedProject = ref(null);

const selectProject = (index) => {
  selectedProject.value = projects.value[index];
};

const closeProjectDetails = () => {
  selectedProject.value = null;
};
</script>

<template>
  <div class="content">
    <section id="projects" class="active">
      <h2>Projets</h2>

      <!-- Liste de projets -->
      <div class="project-grid">
        <div
            class="project-card"
            v-for="(project, index) in projects"
            :key="index"
            @click="selectProject(index)"
        >
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <p class="project-date">Date: {{ project.date }}</p>
        </div>
      </div>

      <!-- Détails d'un projet -->
      <div
          id="project-details"
          v-if="selectedProject"
          @click.self="closeProjectDetails"
          style="display: block; background-color: #262626; padding: 20px; margin-top: 20px;"
      >
        <h3>{{ selectedProject.name }}</h3>
        <p>{{ selectedProject.description }}</p>
        <p>Technos: {{ selectedProject.stack.join(", ") }}</p>
        <p>Date: {{ selectedProject.date }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
