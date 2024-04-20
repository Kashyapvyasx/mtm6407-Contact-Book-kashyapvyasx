import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ContactDetail from '../views/ContactDetail.vue';
import ContactForm from '../views/ContactForm.vue';
import EditContact from '../views/EditContact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/contact/:id', component: ContactDetail },
  { path: '/add-contact', component: ContactForm },
  { path: '/edit-contact/:id', component: EditContact }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
