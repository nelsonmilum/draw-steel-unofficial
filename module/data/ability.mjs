import DrawSteelItemBase from "./item-base.mjs";

export default class DrawSteelAbility extends DrawSteelItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    schema.description = new fields.StringField({ required: true, blank: true });

    schema.resource = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 0 }),
      name: new fields.StringField({ required: false, blank: true }),
    });

    return schema;
  }
}


