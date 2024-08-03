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

    schema.traits = new fields.SchemaField({
      first: new fields.StringField({ required: true, blank: true }),
      second: new fields.StringField({ required: false, blank: true }),
      third: new fields.StringField({ required: false, blank: true }),
    })

    schema.role = new fields.StringField ({ required: true, blank: true })
    schema.captain = new fields.StringField ({ required: true, initial: "true" })

    return schema;
  }

  prepareDerivedData() {
    // Loop through ability scores, and add their labels to our sheet output.
    for (const key in this.abilities) {
      // Handle ability label localization.
      this.abilities[key].label =
        game.i18n.localize(CONFIG.DRAW_STEEL.abilities[key]) ?? key;
    }

    // Loop through Attributes, and add their labels to our sheet output.
    for (const key in this.attributes) {
      // Handle ability label localization.
      this.attributes[key].label =
        game.i18n.localize(CONFIG.DRAW_STEEL.attributes[key]) ?? key;
    };

    this.stamina.winded = Math.floor(this.stamina.max / 2);
  }
}
