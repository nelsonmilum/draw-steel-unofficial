import DrawSteelActorBase from "./actor-base.mjs";

export default class DrawSteelNPC extends DrawSteelActorBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.ev = new fields.SchemaField ({
      value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
    });

    schema.freestrike = new fields.SchemaField ({
      value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
    });

    schema.role = new fields.SchemaField(Object.keys(CONFIG.DRAW_STEEL.creatureroles).reduce((obj, crole) => {
      obj[crole] = new fields.SchemaField({
        value: new fields.BooleanField({initial: false}),
        label: new fields.StringField({ required: true, blank: true })
      });
      return obj;
    }, {}));

    return schema
  }

  prepareDerivedData() {

    // Handle ability label localization.
    for (const key in this.abilities) {
      this.abilities[key].label = game.i18n.localize(CONFIG.DRAW_STEEL.abilities[key]) ?? key;
    }
    for (const key in this.attributes) {
      this.attributes[key].label = game.i18n.localize(CONFIG.DRAW_STEEL.attributes[key]) ?? key;
    }
    for (const key in this.immunities) {
      this.immunities[key].label = game.i18n.localize(CONFIG.DRAW_STEEL.immunities[key]) ?? key;
    }
    for (const key in this.weaknesses) {
      this.weaknesses[key].label = game.i18n.localize(CONFIG.DRAW_STEEL.weaknesses[key]) ?? key;
    }
    for (const key in this.role) {
      this.role[key].label = game.i18n.localize(CONFIG.DRAW_STEEL.creatureroles[key]) ?? key;
    }
  }
}