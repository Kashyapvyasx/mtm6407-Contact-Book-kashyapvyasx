
import { ref } from 'vue';

const contacts = ref([]);

function fetchContacts() {
  const storedContacts = localStorage.getItem('contacts');
  if (storedContacts) {
    contacts.value = JSON.parse(storedContacts);
  } else {
    contacts.value = [
      {
        id: '1',
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
        contactNumber: '123-456-7890',
        address: '123 Maple Street, Anytown, AT 12345',
        jobDetails: 'Software Developer at TechCorp',
        hobbies: 'Reading, Hiking'
      },
      {
        id: '2',
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@example.com',
        contactNumber: '987-654-3210',
        address: '456 Oak Avenue, Othertown, OT 98765',
        jobDetails: 'Marketing Manager at SalesCo',
        hobbies: 'Golfing, Painting'
      },
      {
        id: '3',
        firstName: 'Alice',
        lastName: 'Johnson',
        email: 'alice.johnson@example.com',
        contactNumber: '555-2368',
        address: '789 Birch Path, Cleartown, CT 12399',
        jobDetails: 'Accountant at Numbers Inc.',
        hobbies: 'Knitting, Chess'
      },
      {
        id: '4',
        firstName: 'Bob',
        lastName: 'Willson',
        email: 'bob.marley@example.com',
        contactNumber: '222-4668',
        address: '1010 Coconut Blvd, Sunnytown, ST 87654',
        jobDetails: 'Musician',
        hobbies: 'Music, Soccer'
      },
      {
        id: '5',
        firstName: 'Clara',
        lastName: 'Oswald',
        email: 'clara.oswald@example.com',
        contactNumber: '999-8888',
        address: '2468 Clock St, Timetown, TT 10101',
        jobDetails: 'Teacher at History High',
        hobbies: 'Travel, Writing'
      },
      {
        id: '6',
        firstName: 'David',
        lastName: 'Tennant',
        email: 'david.tennant@example.com',
        contactNumber: '123-9876',
        address: '1357 Space Loop, Gallifrey, GF 90909',
        jobDetails: 'Actor',
        hobbies: 'Acting, Reading'
      },
      {
        id: '7',
        firstName: 'Emma',
        lastName: 'Watson',
        email: 'emma.watson@example.com',
        contactNumber: '321-7654',
        address: '242 Baker Street, London, LDN 12345',
        jobDetails: 'Actress',
        hobbies: 'Activism, Writing'
      }      
    ];
    localStorage.setItem('contacts', JSON.stringify(contacts.value));
  }
}

function saveContact(contact) {
  if (contact.id) {
    const index = contacts.value.findIndex(c => c.id === contact.id);
    if (index !== -1) {
      contacts.value[index] = contact;
    } else {
      contacts.value.push(contact);
    }
  } else {
    contact.id = Date.now().toString();
    contacts.value.push(contact);
  }
  localStorage.setItem('contacts', JSON.stringify(contacts.value));
}

function findContact(id) {
  return contacts.value.find(c => c.id === id);
}

function deleteContact(id) {
  contacts.value = contacts.value.filter(c => c.id !== id);
  localStorage.setItem('contacts', JSON.stringify(contacts.value));
}

fetchContacts();

export function useContacts() {
  return {
    contacts,
    saveContact,
    findContact,
    deleteContact
  };
}
