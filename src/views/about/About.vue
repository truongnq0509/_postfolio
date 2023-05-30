<script setup>
import { ref } from "vue";

const info = ref([
	{
		icon: "bx-map",
		name: "Cổ Nhuế 2, Bắc Từ Liêm, Hà Nội",
	},
	{
		icon: "bx-phone",
		name: "0343559069",
	},
	{
		icon: "bx-calendar",
		name: "05/09/2003",
	},
	{
		icon: "bx-envelope",
		name: "truongmoba157@gmail.com",
	},
	{
		icon: "bxl-github",
		name: "https://github.com/truongnq0509",
	},
	{
		icon: "bxl-facebook-circle",
		name: "https://facebook.com/truong0509",
	},
]);
</script>

<template>
	<section class="about section">
		<div class="about__container container grid">
			<div class="about__card animate__animated animate__bounce animate__fadeInUp">
				<ul class="about__list">
					<li class="about__item">
						<span class="about__desc">
							<i class="bx bx-check-double about__icon"></i> Hiện tại tôi đang là sinh viên năm cuối
							chuyên ngành công nghệ thông tin của một trường cao đẳng, đang muốn tìm vị trí thực tập
							front-end developer tại hà nội
						</span>
					</li>
					<li class="about__item">
						<span class="about__desc">
							<i class="bx bx-check-double about__icon"></i> Tuy chưa có kinh nghiệm làm việc thực tế,
							nhưng qua việc làm những dự án nhỏ cũng đã giúp tôi nắm được những kiến thức cơ bản: HTML,
							CSS, Javascript và cách làm việc với framework (React, Vue)
						</span>
					</li>
				</ul>
			</div>
			<div class="about__card animate__animated animate__bounce animate__fadeInDown">
				<ul class="about__list">
					<li
						class="about__item"
						v-for="(item, index) in info"
						:key="index"
					>
						<i :class="['bx', 'about__icon', item.icon]"></i>
						<span class="about__desc">{{ item.name }}</span>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<style scoped>
.about__container {
	grid-template-columns: 600px repeat(1, 1fr);
	padding-top: 5.5rem;
	column-gap: 3rem;
}

.about__card {
	padding: 2rem 1.5rem;
	background-color: var(--container-color);
	border-radius: 0.5rem;
}

.about__item {
	margin-top: 1rem;
	color: var(--title-color);
	display: flex;
	align-items: center;
	gap: 6px;
}

.about__icon {
	font-size: 1.2rem;
}

/* ======Breakpoints======= */

/* For  Large devices */
@media screen and (max-width: 992px) {
	.about__container {
		grid-template-columns: 1fr;
		row-gap: 2.5rem;
	}
}

@media screen and (max-width: 576px) {
}

@media screen and (max-width: 350px) {
}
</style>
