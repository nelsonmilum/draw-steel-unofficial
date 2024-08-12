/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/draw-steel-unofficial/templates/actor/parts/actor-ancestry.hbs',
    'systems/draw-steel-unofficial/templates/actor/parts/actor-career.hbs',
    'systems/draw-steel-unofficial/templates/actor/parts/actor-class.hbs',
    'systems/draw-steel-unofficial/templates/actor/parts/actor-complication.hbs',
    'systems/draw-steel-unofficial/templates/actor/parts/actor-culture.hbs',
    'systems/draw-steel-unofficial/templates/actor/parts/actor-effects.hbs',
    'systems/draw-steel-unofficial/templates/actor/parts/actor-features.hbs',
    'systems/draw-steel-unofficial/templates/actor/parts/actor-items.hbs',
    'systems/draw-steel-unofficial/templates/actor/parts/actor-kit.hbs',
    'systems/draw-steel-unofficial/templates/actor/parts/actor-spells.hbs',
    // Item partials
    'systems/draw-steel-unofficial/templates/item/parts/item-effects.hbs',
  ]);
};
