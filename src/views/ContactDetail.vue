<template>
    <div class="contact-details">
      <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
      <p><strong>Email:</strong> {{ contact.email }}</p>
      <p><strong>Contact Number:</strong> {{ contact.contactNumber }}</p>
      <p><strong>Address:</strong> {{ contact.address }}</p>
      <p><strong>Job Details:</strong> {{ contact.jobDetails }}</p>
      <p><strong>Hobbies:</strong> {{ contact.hobbies }}</p>
      <router-link :to="'/edit-contact/' + contact.id" class="btn-edit">Edit</router-link>
      <button @click="deleteContact" class="btn-delete">Delete</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { useContacts } from '../composables/useContacts';
  
  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
      const { findContact, deleteContact } = useContacts();
      const contact = ref(findContact(route.params.id));
  
      function removeContact() {
        deleteContact(contact.value.id);
        router.push('/');
      }
  
      return { contact, deleteContact: removeContact };
    }
  }
  </script>
  
  <style scoped>
  .contact-details {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    text-align: center;
  }
  
  .btn-edit, .btn-delete {
    padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 4px;
    margin-top: 20px;
    cursor: pointer;
  }
  
  .btn-edit {
    background-color: #ff9800; 
  }
  
  .btn-edit:hover {
    background-color: #fb8c00; 
  }
  
  .btn-delete {
    background-color: #f44336; 
    margin-left: 10px;
  }
  
  .btn-delete:hover {
    background-color: #d32f2f;
  }
  
  h2, p {
    margin: 10px 0;
  }
  </style>
  