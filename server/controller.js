module.exports = {
  create: (req, res) => {
    const dbInstance = req.app.get("db");
    // use req.query if you are using queries in the url
    const { name, price, image_url } = req.query;
    dbInstance
      .create_product([name, price, image_url])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  },

  getAll: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_inventory()
      .then(products => res.status(200).send(products))
      .catch(() => res.status(500).send());
  },

  deleteById: (req, res) => {
    const dbInstance = req.app.get("db");
    const { product_id } = req.query;

    dbInstance
      .delete_by_id([product_id])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  }
};
