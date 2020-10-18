const Database = require("./database/db");
const saveunity = require("./database/saveunity");

module.exports = {
  index(req, res) {
    const city = req.query.city;
    return res.render("index");
  },

  async unity(req, res) {
    const id = req.query.id;

    try {
      const db = await Database;
      const results = await db.all(
        `SELECT * FROM units WHERE id = "${id}"`
      );
      const unity = results[0];

      unity.images = unity.images.split(",");
      unity.firstImage = unity.images[0];

      if (unity.open_on_weekends == "0") {
        unity.open_on_weekends = false;
      } else {
        unity.open_on_weekends = true;
      }

      return res.render("unity", { unity });
    } catch (err) {
      console.log(err);
      return res.send("Erro no banco de dados!");
    }
  },

  //lista todos orfatos cadastrados no banco e renderiza no mapa
  async units(req, res) {
    try {
      const db = await Database;
      const units = await db.all("SELECT * FROM units");
      return res.render("units", { units });
    } catch (err) {
      console.log(err);
      return res.send("Erro no banco de dados!");
    }
  },

  createunity(req, res) {
    return res.render("create-unity");
  },

  async saveunity(req, res) {
    const fields = req.body;

    //validar se todos os campos estão preenchidos
    if (Object.values(fields).includes("")) {
      return res.send("Todos os campos devem ser preenchidos!");
    }

    try {
      //salvar um formulário
      const db = await Database;
      await saveunity(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      });

      //redirecionamento
      return res.redirect("/units");
    } catch (err) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },
};
