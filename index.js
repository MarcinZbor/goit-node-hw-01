import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.log(allContacts);

    case "get":
      const contact = await getContactById(id);
      return console.log(contact);

    case "add":
      const newContact = await addContact(name, email, phone);
      return console.log(newContact);

    case "remove":
      const removedContact = await removeContact(id);
      return console.log(removedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const contactsArray = hideBin(process.argv);
const { argv } = yargs(contactsArray);

invokeAction(argv);
