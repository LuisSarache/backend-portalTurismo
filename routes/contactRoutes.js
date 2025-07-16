const express = require('express');
const router = express.Router();
const contact = require('../controllers/contactController');

// Criar contato
router.post('/', contact.createContact);

// Listar todos os contatos
router.get('/', contact.listContacts);

module.exports = router;
