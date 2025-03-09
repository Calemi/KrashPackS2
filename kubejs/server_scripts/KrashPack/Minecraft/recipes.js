ServerEvents.recipes(event => {
	event.remove({ id: 'minecraft:flint_and_steel' });

    event.shaped('minecraft:flint_and_steel', [
            "S  ",
            " F ",
            "   "
        ], {
            S: '#c:ingots/steel',
            F: 'minecraft:flint'
        }
    )
	
	    event.shaped('minecraft:flint_and_steel', [
            " S ",
            "  F",
            "   "
        ], {
            S: '#c:ingots/steel',
            F: 'minecraft:flint'
        }
    )
	
	    event.shaped('minecraft:flint_and_steel', [
            "   ",
            "S  ",
            " F  "
        ], {
            S: '#c:ingots/steel',
            F: 'minecraft:flint'
        }
    )
	
	    event.shaped('minecraft:flint_and_steel', [
            "   ",
            " S ",
            "  F"
        ], {
            S: '#c:ingots/steel',
            F: 'minecraft:flint'
        }
    )

	
});
