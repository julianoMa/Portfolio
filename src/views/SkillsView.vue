<script setup>
import { ref, onMounted } from "vue";

const skills = ref([
  { name: "HTML, CSS", level: "85%" },
  { name: "JavaScript", level: "75%" },
  { name: "PHP", level: "70%" },
  { name: "SQL", level: "80%" },
  { name: "Python", level: "90%" },
]);

const animated = ref(false);

onMounted(() => {
  setTimeout(() => {
    animated.value = true;
  }, 100);
});

const getBarWidth = (index) => {
  return animated.value ? skills.value[index].level : "0%";
};
</script>

<template>
  <div class="content">
    <section id="skills" class="active">
      <h2>Compétences</h2>
      <div id="skills-list">
        <div class="skill-bar" v-for="(skill, index) in skills" :key="index">
          <div class="skill-level" :style="{ width: getBarWidth(index) }">
            <span>{{ skill.name }} - {{ skill.level }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
