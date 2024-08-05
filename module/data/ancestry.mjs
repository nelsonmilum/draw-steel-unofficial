import DrawSteelItemBase from "./item-base.mjs";

export default class DrawSteelAncestry extends DrawSteelItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    schema.description = new fields.StringField({ required: true, blank: true });

    schema.resource = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 0 }),
      name: new fields.StringField({ required: false, blank: true }),
    });
    // Iterate over phisicals names and create a new SchemaField for each.
    schema.physicals = new fields.SchemaField(
      Object.keys(CONFIG.DRAW_STEEL.physicals).reduce((obj, physical) => {
        obj[physical] = new fields.SchemaField({
          value: new fields.NumberField({
            ...requiredInteger,
            initial: 0,
            min: 0,
          }),
          label: new fields.StringField({ required: true, blank: true }),
        });
        return obj;
      }, {})
    );

    return schema;
  }

  prepareDerivedData () {
    // Loop through Attributes, and add their labels to our sheet output.
    for (const key in this.physicals) {
      // Handle ability label localization.
      this.attributes[key].label =
        game.i18n.localize(CONFIG.DRAW_STEEL.physicals[key]) ?? key;
    };
  }
}


