import DrawSteelItemBase from "./item-base.mjs";

export default class DrawSteelFeature extends DrawSteelItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    schema.description = new fields.StringField({ required: true, blank: true });

    schema.hresource = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 1 }),
      name: new fields.StringField({ required: true, blank: true }),
    });

    return schema;
  }
}


