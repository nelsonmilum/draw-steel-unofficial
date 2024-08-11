import DrawSteelActorBase from "./actor-base.mjs";

export default class DrawSteelEnvironmentalEffect extends DrawSteelActorBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.vpcost = new fields.SchemaField ({
      value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
    });

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
  }
}