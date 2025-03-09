const bannedItems = [
    'artifacts:everlasting_beef',
    'artifacts:eternal_steak',
    'relics:infinity_ham'
];

// 🔄 Remove banned items from player inventory when they load
ServerEvents.loaded(event => {
    const player = event.player;
    const inventory = player.getInventory();

    bannedItems.forEach(item => {
        if (inventory.count(item) > 0) {
            inventory.clear(item);
            player.tell(`§c[Server] Illegal item removed: ${item.replace('minecraft:', '')}`);
            console.log(`Removed banned item (ServerEvents.loaded): ${item}`);
        }
    });
});

// 🛑 Prevent banned items from being crafted
ServerEvents.recipes(event => {
    bannedItems.forEach(item => {
        event.remove({ output: item });
        console.log(`Removed banned item from recipe output: ${item}`);
    });
});

// ❌ Prevent right-clicking banned items
ItemEvents.rightClicked(event => {
    const player = event.player;
    const inventory = player.getInventory();
    const item = event.item;

    if (item && bannedItems.includes(item.id)) {
        event.cancel();
        inventory.clear(item);
        player.tell(`§c[Server] You cannot use ${item.id.replace('minecraft:', '')}!`);
        console.log(`Removed banned item (ItemEvents.rightClicked): ${item.id}`);
    }
});

// 🛑 Prevent players from picking up banned items
ItemEvents.canPickUp(event => {
    const player = event.player;
    const item = event.itemStack;

    if (item && bannedItems.includes(item.id)) {
        event.cancel();
        player.tell(`§c[Server] You cannot pick up ${item.id.replace('minecraft:', '')}!`);
        console.log(`Removed banned item (ItemEvents.canPickUp): ${item.id}`);
    }
});

// 🍗 Prevent eating banned food items
ItemEvents.foodEaten(event => {
    const player = event.player;
    const item = event.item;
    const inventory = player.getInventory();

    if (item && bannedItems.includes(item.id)) {
        event.cancel();
        inventory.clear(item);
        player.tell(`§c[Server] You cannot consume ${item.id.replace('minecraft:', '')}!`);
        console.log(`Removed banned food item (ItemEvents.foodEaten): ${item.id}`);
    }
});

ServerEvents.tick(event => {
    event.server.players.forEach(player => {
        const inventory = player.getInventory();
        const enderChest = player.getEnderChestInventory();
        const openContainer = player.openContainer;

        // Remove from player inventory
        bannedItems.forEach(item => {
            if (inventory.count(item) > 0) {
                inventory.clear(item);
                player.tell(`§c[Server] Illegal item removed: ${item}`);
                console.log(`Removed banned item (tick): ${item}`);
            }
        });

        // Remove from Ender Chest
        bannedItems.forEach(item => {
            if (enderChest.count(item) > 0) {
                enderChest.clear(item);
                console.log(`Removed banned item from Ender Chest: ${item}`);
            }
        });

        // ✅ Only check `openContainer` if it exists and is valid
        if (openContainer && openContainer.size) {
            for (let i = 0; i < openContainer.size(); i++) {
                let slotItem = openContainer.get(i);
                if (slotItem && bannedItems.includes(slotItem.id)) {
                    openContainer.set(i, null);  // ✅ Remove item safely
                    console.log(`Removed banned item from open container: ${slotItem.id}`);
                }
            }
        }
    });

    // Remove banned items from the world (dropped items)
    bannedItems.forEach(item => {
        event.server.runCommandSilent(`kill @e[type=item,nbt={Item:{id:"${item}"}}]`);
    });
});
