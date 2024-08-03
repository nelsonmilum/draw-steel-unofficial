import DrawSteelActorBase from "./actor-base.mjs";

export default class DrawSteelNPC extends DrawSteelActorBase {
  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.ev = new fields.NumberField({
      ...requiredInteger,
      initial: 1,
      min: 0,
    });

    return schema;
  }

  prepareDerivedData() {
    // Loop through ability scores, and add their labels to our sheet output.
    for (const key in this.abilities) {
      // Handle ability label localization.
      this.abilities[key].label =
        game.i18n.localize(CONFIG.DRAW_STEEL.abilities[key]) ?? key;
    }
    this.stamina.winded = Math.floor(this.stamina.max / 2);
  }
}
