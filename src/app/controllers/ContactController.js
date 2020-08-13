const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(req, res) {
    const contacts = await ContactRepository.findAll();

    return res.json(contacts);
  }

  async show(req, res) {
    const { id } = req.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) return res.status(404).json({ error: 'Contact not found' });

    return res.json(contact);
  }

  store() {}

  update() {}

  async delete(req, res) {
    const { id } = req.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) return res.status(404).json({ error: 'Contact not found' });

    await ContactRepository.delete(id);

    return res.sendStatus(204);
  }
}

module.exports = new ContactController();
