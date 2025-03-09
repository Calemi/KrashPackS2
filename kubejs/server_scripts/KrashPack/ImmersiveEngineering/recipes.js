ServerEvents.recipes(event => {
	event.remove({ id: 'immersiveengineering:blastfurnace/steel' });
	event.remove({ id: 'immersiveengineering:blastfurnace/steel_block' });

	event.custom({"type": "immersiveengineering:blast_furnace","input": {"tag": "c:dusts/iron"},"result": {"item": "mekanism:enriched_iron"},"slag": {"tag": "c:slag"},"time": 1200});
	event.custom({"type": "immersiveengineering:blast_furnace","input": {"tag": "c:ingots/iron"},"result": {"item": "mekanism:enriched_iron"},"slag": {"tag": "c:slag"},"time": 1200});
	event.custom({"type": "immersiveengineering:blast_furnace","input": {"item": "mekanism:enriched_iron"},"result": {"tag": "c:dusts/steel"},"slag": {"tag": "c:slag"},"time": 1200});
  
});
