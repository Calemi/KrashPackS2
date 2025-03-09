ServerEvents.recipes(event => {
    // Remove recipes from the Plushies mod
    event.remove({ id: 'plushies:zombie_plushie' });
	event.remove({ id: 'plushies:skeleton_plushie' });

});
