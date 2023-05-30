<script setup>
import { defineProps } from "vue";

const { skill, index } = defineProps({
	skill: {
		type: Object,
		default: {},
	},
	index: {
		type: Number,
		default: 0,
	},
});
</script>

<template>
	<div
		:class="[
			'skills__content',
			'animate__animated',
			'animate__bounce',
			index % 2 != 0 ? 'animate__fadeInUp' : 'animate__fadeInDown',
		]"
	>
		<h3 class="skills__title">{{ skill?.title }}</h3>
		<div class="skills__box">
			<div class="skills__group">
				<div
					class="skills__data"
					v-for="(item, index) in skill?.languae"
					:key="index"
				>
					<i class="bx bx-badge-check"></i>
					<div>
						<h3 class="skills__name">{{ item }}</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.skills__title {
	font-size: var(--normal-font-size);
	font-weight: var(--font-medium);
	text-align: center;
	margin-bottom: var(--mb-1-5);
}

.skills__box {
	display: flex;
	justify-content: center;
	column-gap: 2.5rem;
}

.skills__group {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: flex-start;
	row-gap: 1rem;
	column-gap: 1rem;
}

.skills__data {
	display: flex;
	column-gap: 0.5rem;
}

.skills .bx-badge-check {
	font-size: 1rem;
	color: var(--title-color);
}

.skills__name {
	font-size: var(--normal-font-size);
	font-weight: var(--font-medium);
	line-height: 18px;
}

@media screen and (max-width: 350px) {
	.skills__box {
		column-gap: 1.25rem;
	}

	.skills__name {
		font-size: var(--small-font-size);
	}
}
</style>
