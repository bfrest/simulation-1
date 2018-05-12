module.exports = {
  getAll: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_inventory()
      .then(products => res.status(200).send(products))
      .catch(() => res.status(500).send());
  },

  create: (req, res) => {
    const dbInstance = req.app.get("db");
    const { name, description, price, image_url } = req.body;

    dbInstance
      .create_product([name, description, price, image_url])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  }
};
