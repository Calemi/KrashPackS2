ServerEvents.recipes(event => {

event.custom({"type": "extendedcrafting:shaped_table","pattern": [
    "  I  ",
    "L C L",
    "LRTRL",
    "LRERL",
    "UHHHU"
  ],
  "key": {
    "I": {"item": "mekanism:basic_induction_cell"},
	"C": {"item": "twilightforest:lamp_of_cinders"},
	"L": {"tag": "c:dusts/lithium"},
	"R": {"item": "mekanism:hdpe_rod"},
	"E": {"item": "minecraft:elytra"},
	"H": {"item": "mekanism:hdpe_sheet"},
	"U": {"tag": "c:circuits/ultimate"},
	"T": {"item": "mekanism:basic_chemical_tank"}
  },
  "result": {
    "id": "mekanism:jetpack"
  }
})

event.custom({"type": "extendedcrafting:shaped_table","pattern": [
    "AABB ",
    "ABCDB",
    " CECA",
    " F   ",
    "F    "
  ],
  "key": {
    "A": {
      "item": "mekanism:alloy_reinforced"
    },
    "B": {
      "item": "mekanism:hdpe_sheet"
    },
    "C": {
      "tag": "c:alloys/ultimate"
    },
    "D": {
      "item": "mekanism:basic_induction_provider"
    },
    "E": {
      "tag": "c:circuits/ultimate"
    },
    "F": {
      "item": "mekanism:ingot_refined_obsidian"
    }
  },
  "result": {
    "id": "mekanism:atomic_disassembler"
  }
})


});