<script setup>
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
	<div class="app">
		<the-header />
		<div class="main"><slot /></div>
	</div>
</template>
