import DrawSteelItemBase from "./item-base.mjs";

export default class DrawSteelHeroicAbility extends DrawSteelItemBase {
  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    schema.value = new fields.SchemaField({
      cost: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      keywords: new fields.StringField({ required: true, blank: true }),
      type: new fields.StringField({ required: true, blank: true }),
      distance: new fields.StringField({ required: true, blank: true }),
      target: new fields.StringField({ required: true, blank: true }),
    });

    return schema;
  }
}