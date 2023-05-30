<template>
	<div class="social">
		<a
			href="https://www.instagram.com/"
			class="social__icon animate__animated animate__bounce animate__fadeInUp"
			target="_blank"
		>
			<i class="uil uil-instagram"></i>
		</a>
		<a
			href="https://facebook.com/truong0509"
			class="social__icon animate__animated animate__bounce animate__fadeInUp"
			target="_blank"
		>
			<i class="uil uil-facebook"></i>
		</a>
		<a
			href="https://github.com/truongnq0509"
			class="social__icon animate__animated animate__bounce animate__fadeInUp"
			target="_blank"
		>
			<i class="uil uil-github-alt"></i>
		</a>
	</div>
</template>

<style scoped>
.social {
	display: grid;
	grid-template-columns: max-content;
	row-gap: 1rem;
}

.social__icon {
	font-size: 1.25rem;
	color: var(--title-color);
}

.social__icon:hover {
	color: var(--title-color-dark);
}
</style>
