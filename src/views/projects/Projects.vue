<script setup>
import { ref } from "vue";

const projects = ref([
	{
		name: "Thinkpro",
		thumbnail: "thinkpro.png",
		live: "https://thinkpro-zeta.vercel.app",
		code: "https://github.com/truongnq0509/thinkpro-clone.git",
		desc: "Thinkpro là một website thương mại điện tử. Với các tính năng chính: authentication và authorization, tìm kiếm, lọc sản phẩm, đặt hàng, thanh toán momo(develop), tương thích trên mọi thiết bị,...",
		technogory: ["#react", "#redux-toolkit", "#nodejs", "#mongodb", "..."],
	},
	{
		name: "Dev-Music",
		thumbnail: "dev-music.png",
		live: "https://dev-music-zeta.vercel.app",
		code: "https://github.com/truongnq0509/dev-music.git",
		desc: "Dev Music là một website nghe nhạc. Với các tính năng chính: tìm kiếm, lọc bài hát - video, đăng nhập bằng google, thêm bài hát yêu thích, tương thích trên mọi thiết bị,...",
		technogory: ["#react", "#redux", "#nodejs", "#mongodb", "..."],
	},
	{
		name: "Trường Đép",
		thumbnail: "truong-dep.png",
		live: "https://dev-music-zeta.vercel.app",
		code: "https://github.com/truongnq0509/dev-music.git",
		desc: "Đây là một dự án được tôi phát triển quá trình vừa học, vừa làm khi tiếp cận với một framework mới đó là Vuejs",
		technogory: ["#vue", "#vue-router", "#animation.css", "..."],
	},
]);

const url = (name) => {
	return new URL(`../../assets/${name}`, import.meta.url).href;
};
</script>

<template>
	<section
		class="projects section"
		id="projects"
	>
		<div class="projects__box container grid">
			<div
				class="projects__card"
				v-for="(project, index) in projects"
				:key="index"
			>
				<div class="projects__img animate__animated animate__bounce animate__fadeIn">
					<img
						:src="url(project.thumbnail)"
						alt="thumbnail"
					/>
				</div>
				<a
					:href="project.live"
					class="projects__title animate__animated animate__bounce animate__fadeInUp"
				>
					{{ project.name }}
				</a>
				<div class="projects__desc animate__animated animate__bounce animate__fadeInUp">
					{{ project.desc }}
				</div>
				<div class="projects__button animate__animated animate__bounce animate__fadeInUp">
					<a
						:href="project.live"
						class="button buttom--flex"
						>Live <i class="bx bx-right-arrow-alt icon"></i
					></a>
					<a
						:href="project.code"
						class="button buttom--flex"
						>Code <i class="bx bx-right-arrow-alt icon"></i
					></a>
				</div>
				<div class="projects__techgory animate__animated animate__bounce animate__fadeInUp">
					<span
						v-for="(item, index) in project.technogory"
						:key="index"
						>{{ item }}</span
					>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.projects__box {
	grid-template-columns: repeat(2, 1fr);
	padding-top: 5.5rem;
	column-gap: 2rem;
}

.projects__card {
	padding: 1.5rem;
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	background-color: #fff;
}

.projects__title {
	font-size: 1.25rem;
	font-weight: var(--font-medium);
	margin-top: var(--mb-1-5);
	display: block;
	color: var(--title-color);
}

.projects__img {
	width: 100%;
	height: 230px;
	border-radius: 0.25rem;
	overflow: hidden;
}

.projects__img > img {
	width: 100%;
	height: 100%;
	object-fit: contain;
	border-radius: 0.25rem;
}

.projects__desc {
	font-size: 14px;
	font-weight: var(--font-medium);
	margin: 1rem 0;
	color: var(--title-color);
	flex: 1 1 0%;
}

.projects__button {
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 1rem;
}

.projects__button > a {
	display: flex;
	align-items: center;
	gap: 4px;
	height: 42px;
	font-size: 14px;
	color: var(--container-color);
}

.icon {
	font-size: 1rem;
	animation: run linear 1.2s infinite;
}

@keyframes run {
	0% {
		transform: translateX(8px);
	}
	50% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(8px);
	}
}

.projects__techgory {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.projects__techgory > span {
	display: block;
	border-radius: 0.25rem;
	font-size: 12px;
	padding: 0.25rem 0.5rem;
	color: var(--container-color);
	background-color: var(--title-color);
}

@media screen and (max-width: 992px) {
	.projects__box {
		grid-template-columns: repeat(2, 1fr);
		row-gap: 2rem;
	}
}

@media screen and (max-width: 576px) {
	.projects__box {
		grid-template-columns: 1fr;
	}

	.skills__content {
		padding: 1.5rem;
	}
}
</style>
