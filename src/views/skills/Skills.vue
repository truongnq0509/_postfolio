<script setup>
import SkillItem from "./SkillItem.vue";
import { ref } from "vue";

const skills = ref([
	{
		title: "Front-End",
		languae: ["HTML", "CSS", "Javascript", "Tailwind", "Boostrap", "Typescript", "React", "Vue"],
	},
	{
		title: "Back-End",
		languae: ["Nodejs", "Mongoodb"],
	},
	{
		title: "Tools",
		languae: ["Postman", "Git"],
	},
]);
</script>

<template>
	<section
		class="skills section"
		id="skills"
	>
		<div class="skills__container container grid">
			<skill-item
				v-for="(skill, index) in skills"
				:key="index"
				:skill="skill"
				:index="index"
			/>
		</div>
	</section>
</template>

<style scoped>
.skills__container {
	grid-template-columns: repeat(3, 1fr);
	padding-top: 5.5rem;
	column-gap: 2rem;
}

.skills__content {
	background-color: var(--container-color);
	padding: 2rem 1.5rem;
	border-radius: 0.5rem;
}

@media screen and (max-width: 992px) {
	.skills__container {
		grid-template-columns: max-content;
		row-gap: 2rem;
	}
}

@media screen and (max-width: 576px) {
	.skills__container {
		grid-template-columns: 1fr;
	}

	.skills__content {
		padding: 1.5rem;
	}
}
</style>
