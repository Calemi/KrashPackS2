ServerEvents.recipes(event => {
    event.remove({ id: 'mekanismgenerators:generator/wind' });
	event.remove({ id: 'mekanismgenerators:solar_panel' });
	event.remove({ id: 'mekanismgenerators:generator/solar' });
	event.remove({ id: 'mekanismgenerators:generator/advanced_solar' });
	event.remove({ id: 'mekanismgenerators:turbine/blade' });

    event.shaped('mekanismgenerators:wind_generator', [
            " O ",
            "OAO",
            "ECE"
        ], {
            A: '#mekanism:alloys/reinforced',
            C: '#c:circuits/advanced',
            E: 'mekanism:energy_tablet',
            O: 'railcraft:turbine_blade'
        }
    )
	
	event.shaped('mekanismgenerators:solar_panel', [
            "CGC",
            "ACA",
            "OOO"
        ], {
            A: '#mekanism:alloys/infused',
            G: '#c:glass_blocks',
            C: '#c:dusts/coal',
            O: '#c:ingots/osmium'
        }
    )
	
	event.shaped('mekanismgenerators:solar_generator', [
            "SSS",
            "AIA",
            "OTO"
        ], {
			T: 'mekanism:energy_tablet',
			O: '#c:ingots/osmium',
            A: '#mekanism:alloys/infused',
            I: '#c:ingots/steel',
            S: 'mekanismgenerators:solar_panel'
        }
    )
	
	
	event.shaped('mekanismgenerators:advanced_solar_generator', [
            "SAS",
            "SAS",
            "III"
        ], {
            A: '#mekanism:alloys/reinforced',
            I: '#c:ingots/steel',
            S: 'mekanismgenerators:solar_generator'
        }
    )
	
	event.shaped('mekanismgenerators:turbine_blade', [
            " B ",
            "BAB",
            " B "
        ], {
            A: '#mekanism:alloys/infused',
            B: 'railcraft:turbine_blade'
        }
    )
	
});
