LootJS.modifiers(event => {
    event.removeGlobalModifiers("artifacts:inject/entities/cow"); // Block Artifacts' cow injection
});

LootJS.modifiers(event => {
    event.addEntityModifier("minecraft:cow") // Target cows
        .removeLoot("artifacts:everlasting_beef"); // Remove Everlasting Beef from loot
});

LootJS.modifiers(event => {
    event.addEntityModifier("minecraft:mooshroom") // Target mooshrooms
        .removeLoot("artifacts:everlasting_beef"); // Remove Everlasting Beef from loot
});
