import DrawSteelActorBase from "./actor-base.mjs";

export default class DrawSteelCharacter extends DrawSteelActorBase {
  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.recoveries = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 1, min: 0 }),
      max: new fields.NumberField({ ...requiredInteger, initial: 0 }),
    });

    schema.victories = new fields.SchemaField ({
      value: new fields.NumberField({ ...requiredInteger, initial: 1, min: 0 }),
    })

    return schema;
  }

  prepareDerivedData() {
    // Loop through ability scores, and add their labels to our sheet output.
    for (const key in this.abilities) {
      // Handle ability label localization.
      this.abilities[key].label =
        game.i18n.localize(CONFIG.DRAW_STEEL.abilities[key]) ?? key;
    }

    this.recoveries.max = Math.floor(this.stamina.max / 3);
    this.stamina.winded = Math.floor(this.stamina.max / 2);
  }

  getRollData() {
    const data = {};

    // Copy the ability scores to the top level, so that rolls can use
    // formulas like `@mgt.value + 4`.
    if (this.abilities) {
      for (let [k, v] of Object.entries(this.abilities)) {
        data[k] = foundry.utils.deepClone(v);
      }
    }

    data.lvl = this.attributes.level.value;

    return data;
  }
}
