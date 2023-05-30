<script setup>
import { ref } from "vue";

const toggle = ref(false);
const activeNav = ref("home");
</script>

<template>
	<header class="header scroll-header">
		<nav class="nav container">
			<a
				href="index.html"
				class="nav__logo"
			>
				NQT
			</a>

			<div :class="['nav__menu', toggle ? 'show-menu' : '']">
				<ul class="nav__list grid">
					<li class="nav__item">
						<router-link
							:to="{
								path: '/',
								params: {},
							}"
							:class="['nav__link', activeNav === 'hom' && 'active-link']"
							@click="activeNav = 'home'"
						>
							<i class="uil uil-estate nav__icon"></i> Trang Chủ
						</router-link>
					</li>
					<li class="nav__item">
						<router-link
							:to="{
								path: '/about',
								params: {},
							}"
							:class="['nav__link', activeNav === 'about' && 'active-link']"
							@click="activeNav = 'about'"
						>
							<i class="uil uil-user nav__icon"></i> Thông Tin
						</router-link>
					</li>
					<li class="nav__item">
						<router-link
							:to="{
								path: '/my-skill',
								params: {},
							}"
							:class="['nav__link', activeNav === 'my-skill' && 'active-link']"
							@click="activeNav = 'my-skill'"
						>
							<i class="uil uil-file-alt nav__icon"></i>Kỹ Năng</router-link
						>
					</li>
					<li class="nav__item">
						<router-link
							:to="{
								path: '/projects',
								params: {},
							}"
							:class="['nav__link', activeNav === 'projects' && 'active-link']"
							@click="activeNav = 'projects'"
						>
							<i class="uil uil-briefcase-alt nav__icon"></i>Dự Án
						</router-link>
					</li>
					<li class="nav__item">
						<router-link
							:to="{
								path: '/contact',
								params: {},
							}"
							:class="['nav__link', activeNav === 'contact' && 'active-link']"
							@click="activeNav = 'contact'"
						>
							<i class="uil uil-message nav__icon"></i> Liên Hệ
						</router-link>
					</li>
				</ul>
				<i
					class="uil uil-times nav__close"
					@click="toggle = !toggle"
				></i>
			</div>

			<div
				class="nav__toggle"
				@click="toggle = !toggle"
			>
				<i class="uil uil-apps"></i>
			</div>
		</nav>
	</header>
</template>

<style scoped>
.header {
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: var(--z-fixed);
	background: var(--bg-color-1);
}

.nav {
	height: calc(var(--header-height) + 1.5rem);
	display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 1rem;
}
.nav__logo,
.nav__toggle {
	color: var(--title-color);
	font-weight: var(--font-medium);
}
.nav__list {
	display: flex;
	column-gap: 2rem;
}
.nav__link {
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: var(--small-font-size);
	color: var(--title-color);
	font-weight: var(--font-medium);
	transition: 0.3s;
}

.nav__close,
.nav__toggle,
.nav__icon {
	display: none;
}

/* active link */
.active-link,
.nav__link:hover {
	color: var(--title-color-dark);
}

.scroll-header {
	box-shadow: 0 -1px 4px rgba(--text-color-dark);
}
/* change background header */
.scroll-header {
	box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
}
/* ======Breakpoints======= */
@media screen and (max-width: 768px) {
	.header {
		top: initial;
		bottom: 0;
	}
	.nav {
		height: var(--header-height);
	}
	.nav__menu {
		position: fixed;
		bottom: -100%;
		left: 0;
		width: 100%;
		background-color: var(--body-color);
		padding: 2rem 1.5rem 4rem;
		box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
		border-radius: 1.5rem 1.5rem 0 0;
		transition: 0.3s;
	}

	/* Show menu */
	.show-menu {
		bottom: 0;
	}
	.nav__list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}
	.nav__icon {
		font-size: 1.2rem;
	}
	.nav__close {
		position: absolute;
		right: 1.3rem;
		bottom: 0.5rem;
		font-size: 1.5rem;
		cursor: pointer;
		color: var(--title-color);
	}
	.nav__close:hover {
		color: var(--title-color-dark);
	}
	.nav__toggle {
		font-size: 1.2rem;
		cursor: pointer;
	}
	.nav__icon,
	.nav__close,
	.nav__toggle {
		display: block;
	}
}
@media screen and (max-width: 350px) {
	.nav__menu {
		padding: 2rem 0.25rem 4rem;
	}
	.nav__list {
		column-gap: 0;
	}
}
</style>
