<script setup>
import Social from "../../components/Social.vue";
import BaseData from "./BaseData.vue";
</script>

<template>
	<section class="home section">
		<div class="home__container container grid">
			<div class="home__content grid">
				<social />
				<div class="home__img animate__animated animate__bounce animate__fadeInDown"></div>
				<base-data />
			</div>
		</div>
	</section>
</template>

<style scoped>
.home__container {
	row-gap: 7rem;
}

.home__content {
	grid-template-columns: 116px repeat(2, 1fr);
	padding-top: 5.5rem;
	column-gap: 2rem;
	align-items: center;
}

.home__img {
	background-color: #333333;
	width: 300px;
	box-shadow: inset 0 0 0 6px rgba(0, 0, 0, 0.1);
	height: 300px;
	order: 1;
	justify-self: center;
	order: 1;
	justify-self: center;
	animation: profile_animate 8s ease-in-out infinite;
}

@keyframes profile_animate {
	0% {
		border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
	}
	50% {
		border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
	}
	100% {
		border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
	}
}

@media screen and (max-width: 992px) {
	.home__content {
		grid-template-columns: 100px repeat(2, 1fr);
		column-gap: 1.25rem;
	}

	.home__img {
		box-shadow: inset 0 0 0 8px rgb(255 255 255 / 30%);
	}
}

@media screen and (max-width: 768px) {
	.home__content {
		grid-template-columns: 0.5fr 3fr;
		padding-top: 3.5rem;
	}

	.home__img {
		order: initial;
		justify-self: initial;
		box-shadow: inset 0 0 0 8px rgb(255 255 255 / 30%);
		width: 200px;
		height: 200px;
	}
}

@media screen and (max-width: 350px) {
	.home__img {
		width: 180px;
		height: 180px;
	}
}
</style>
