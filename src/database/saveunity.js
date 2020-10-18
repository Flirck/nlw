function saveunity(db, unity) {
    return db.run(`
        INSERT INTO units (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "${unity.lat}",
            "${unity.lng}",
            "${unity.name}",
            "${unity.about}",
            "${unity.whatsapp}",
            "${unity.images}",
            "${unity.instructions}",
            "${unity.opening_hours}",
            "${unity.open_on_weekends}"
        );
 `);
}

module.exports = saveunity;