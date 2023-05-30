import { createRouter, createWebHistory } from "vue-router";


const routes = [
	{
		path: "/",
		name: "home",
		component: () => import('@/views/home/Home.vue')
	},
	{
		path: "/about",
		name: "about",
		component: () => import('@/views/about/About.vue')
	},
	{
		path: "/my-skill",
		name: "my-skill",
		component: () => import('@/views/skills/Skills.vue')
	},
	{
		path: "/projects",
		name: "projects",
		component: () => import('@/views/projects/Projects.vue')
	},
	{
		path: "/contact",
		name: "contact",
		component: () => import('@/views/contact/Contact.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router