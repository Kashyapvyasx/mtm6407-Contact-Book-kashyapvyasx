<template>
    <div class="container">
      <input v-model="search" placeholder="Search contacts" class="search-input" />
      <button @click="addNewContact" class="add-button">Add Contact</button>
  
      <div class="contact-list">
        <div
          v-for="contact in filteredContacts"
          :key="contact.id"
          @click="selectContact(contact.id)"
          class="contact-card"
        >
          <h3>{{ contact.firstName }} {{ contact.lastName }}</h3>
          <p>{{ contact.email }}</p>
          <p>{{ contact.contactNumber }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { computed, ref } from 'vue';
  import { useContacts } from '../composables/useContacts';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const { contacts } = useContacts();
      const search = ref('');
      const router = useRouter();
  
      const filteredContacts = computed(() => {
        return contacts.value.filter(c =>
          (`${c.firstName} ${c.lastName}`).toLowerCase().includes(search.value.toLowerCase())
        );
      });
  
      function selectContact(id) {
        router.push(`/contact/${id}`);
      }
  
      function addNewContact() {
        router.push('/add-contact');
      }
  
      return { search, filteredContacts, selectContact, addNewContact };
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  .search-input, .add-button {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
  }
  
  .add-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .add-button:hover {
    background-color: #45a049;
  }
  
  .contact-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .contact-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    margin: 10px;
    width: calc(33% - 20px);
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    cursor: pointer;
  }
  
  .contact-card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
  
  h3 {
    color: #333;
  }
  
  p {
    color: #666;
    font-size: 14px;
    margin: 5px 0;
  }
  </style>
  