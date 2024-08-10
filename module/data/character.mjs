import DrawSteelActorBase from "./actor-base.mjs";

export default class DrawSteelCharacter extends DrawSteelActorBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    // Iterate over Skills names and create a new SchemaField for each.
    schema.skills = new fields.SchemaField ({
      crafting: new fields.SchemaField(Object.keys(CONFIG.DRAW_STEEL.craftingskills).reduce((obj, cskill) => {
        obj[cskill] = new fields.SchemaField({
          value: new fields.BooleanField({initial: false}),
          label: new fields.StringField({ required: true, blank: true })
        });
        return obj;
    }, {})),
      exploration: new fields.SchemaField(Object.keys(CONFIG.DRAW_STEEL.explorationskills).reduce((obj, eskill) => {
        obj[eskill] = new fields.SchemaField({
          value: new fields.BooleanField({initial: false}),
          label: new fields.StringField({ required: true, blank: true })
        });
        return obj;
      }, {})),
      interpersonal: new fields.SchemaField(Object.keys(CONFIG.DRAW_STEEL.interpersonalskills).reduce((obj, iskill) => {
        obj[iskill] = new fields.SchemaField({
          value: new fields.BooleanField({initial: false}),
          label: new fields.StringField({ required: true, blank: true })
        });
        return obj;
      }, {})),
      intrigue: new fields.SchemaField(Object.keys(CONFIG.DRAW_STEEL.intrigueskills).reduce((obj, inskill) => {
        obj[inskill] = new fields.SchemaField({
          value: new fields.BooleanField({initial: false}),
          label: new fields.StringField({ required: true, blank: true })
        });
        return obj;
      }, {})),
      lore: new fields.SchemaField(Object.keys(CONFIG.DRAW_STEEL.loreskills).reduce((obj, lskill) => {
        obj[lskill] = new fields.SchemaField({
          value: new fields.BooleanField({initial: false}),
          label: new fields.StringField({ required: true, blank: true })
        });
        return obj;
      }, {}))
    });

    schema.recoveries = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 1, min: 0 }),
      max: new fields.NumberField({ ...requiredInteger, initial: 0 }),
    });

    schema.victories = new fields.SchemaField ({
      value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
    });

    return schema;
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
    for (const key in this.skills.crafting) {
      this.skills.crafting[key].label = game.i18n.localize(CONFIG.DRAW_STEEL.craftingskills[key]) ?? key;
    }
    for (const key in this.skills.exploration) {
      this.skills.exploration[key].label = game.i18n.localize(CONFIG.DRAW_STEEL.explorationskills[key]) ?? key;
    }
    for (const key in this.skills.interpersonal) {
      this.skills.interpersonal[key].label = game.i18n.localize(CONFIG.DRAW_STEEL.interpersonalskills[key]) ?? key;
    }
    for (const key in this.skills.intrigue) {
      this.skills.intrigue[key].label = game.i18n.localize(CONFIG.DRAW_STEEL.intrigueskills[key]) ?? key;
    }
    for (const key in this.skills.lore) {
      this.skills.lore[key].label = game.i18n.localize(CONFIG.DRAW_STEEL.loreskills[key]) ?? key;
    }

    this.recoveries.max = Math.floor(this.stamina.max / 3);
    this.stamina.winded = Math.floor(this.stamina.max / 2);
  }

  getRollData() {
    const data = {};

    // Copy the ability scores to the top level, so that rolls can use
    // formulas like `@mgt.value + 4`.
    if (this.abilities) {
      for (let [k,v] of Object.entries(this.abilities)) {
        data[k] = foundry.utils.deepClone(v);
      }
    }

    data.lvl = this.attributes.lvl.value;

    return data
  }
}