const Database = require('./db');
const saveunity = require('./saveunity');

Database.then(async db => {

    await saveunity(db, {
        lat: "-27.222633",
        lng: "-49.6455874",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "986718901",
        images: ["https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

        "https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 19h até 8h",
        open_on_weekends: "0"
    },)


    //consultar todos os dados da tabela units
   const selectunits = await db.all("SELECT * FROM units")
   console.log(selectunits)

    //consultar somente 1 unity, pelo id
    const unity = await db.all('SELECT * FROM units WHERE id = "2"')
    console.log(unity)

    //deletar dado da tabelas
    //console.log(await db.run("DELETE FROM units WHERE id = '2'"))
})