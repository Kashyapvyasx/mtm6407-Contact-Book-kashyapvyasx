<template>
    <form @submit.prevent="submitForm">
      <div class="field">
        <label for="firstName">First Name:</label>
        <input id="firstName" v-model="contact.firstName" required />
      </div>
      <div class="field">
        <label for="lastName">Last Name:</label>
        <input id="lastName" v-model="contact.lastName" required />
      </div>
      <div class="field">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="contact.email" required />
      </div>
      <div class="field">
        <label for="contactNumber">Contact Number:</label>
        <input id="contactNumber" v-model="contact.contactNumber" required />
      </div>
      <div class="field">
        <label for="address">Address:</label>
        <input id="address" v-model="contact.address" required />
      </div>
      <div class="field">
        <label for="jobDetails">Job Details:</label>
        <input id="jobDetails" v-model="contact.jobDetails" />
      </div>
      <div class="field">
        <label for="hobbies">Hobbies:</label>
        <input id="hobbies" v-model="contact.hobbies" />
      </div>
      <button type="submit" class="btn-save">Save Contact</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useContacts } from '../composables/useContacts';
  
  export default {
    props: {
      id: {
        type: String,
        default: null
      },
    },
    setup(props) {
      const router = useRouter();
      const { saveContact, findContact } = useContacts();
      const contact = ref({
        id: props.id,
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        address: '',
        jobDetails: '',
        hobbies: ''
      });
  
      if (props.id) {
        const existingContact = findContact(props.id);
        if (existingContact) {
          contact.value = { ...existingContact };
        }
      }
  
      function submitForm() {
        saveContact(contact.value);
        router.push('/');
      }
  
      return {
        contact,
        submitForm
      };
    }
  }
  </script>
  
  <style scoped>
  .field label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }
  
  .field input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn-save {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-save:hover {
    background-color: #45a049;
  }
  </style>
  