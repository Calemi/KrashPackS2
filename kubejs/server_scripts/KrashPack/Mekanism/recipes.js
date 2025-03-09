ServerEvents.recipes(event => {
	event.remove({ id: 'mekanism:digital_miner' });
    event.remove({ id: 'mekanism:steel_casing' });
	event.remove({ id: 'mekanism:jetpack' });
	event.remove({ id: 'mekanism:atomic_disassembler' });
	event.remove({ id: 'mekanism:solar_neutron_activator' });
	event.remove({ id: 'mekanism:processing/iron/enriched' });
	event.remove({ id: 'mekanism:processing/iron/enriched_dust' });
	event.remove({ id: 'mekanism:processing/steel/enriched_iron_to_dust' });
	event.remove({ id: 'mekanism:module_gravitational_modulating_unit' });
	event.remove({ id: 'mekanism:portable_teleporter' });
	event.remove({ id: 'mekanism:teleporter' });
	event.remove({ id: 'mekanism:teleporter_frame' });

    event.shaped('mekanism:steel_casing', [
            "OGO",
            "GSG",
            "OGO"
        ], {
            S: '#c:storage_blocks/steel',
            G: '#c:glass_blocks/cheap',
            O: '#c:ingots/osmium'
        }
    )
	
	    event.shaped('mekanism:solar_neutron_activator', [
            "BAB",
            "CDC",
            "EEE"
        ], {
            A: 'mekanismgenerators:solar_panel',
            B: 'mekanism:hdpe_sheet',
			C: '#c:circuits/ultimate',
			D: 'mekanism:steel_casing',
			E: '#c:ingots/bronze'
        }
    )
	
	    event.shaped('mekanism:module_gravitational_modulating_unit', [
            "ANA",
            "IMI",
            "PJP"
        ], {
            A: '#c:alloys/ultimate',
            N: 'minecraft:nether_star',
            I: 'mekanism:ultimate_induction_provider',
			M: 'mekanism:module_base',
			P: 'mekanism:pellet_antimatter',
			J: 'mekanism:jetpack_armored'
        }
    )
	
});
