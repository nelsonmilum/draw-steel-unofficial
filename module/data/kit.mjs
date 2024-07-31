import DrawSteelFeature from "./feature.mjs";

export default class DrawSteelKit extends DrawSteelFeature {
  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    schema.mwdmod = new fields.SchemaField({
      low: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      med: new fields.NumberField({ ...requiredInteger, initial: 0 }),
      high: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
    });
    schema.rwdmod = new fields.SchemaField({
      low: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      med: new fields.NumberField({ ...requiredInteger, initial: 0 }),
      high: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
    });
    schema.madmod = new fields.SchemaField({
      low: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      med: new fields.NumberField({ ...requiredInteger, initial: 10 }),
      high: new fields.NumberField({ ...requiredInteger, initial: 10, min: 0 })
    });
    schema.area = new fields.SchemaField({
      mod: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
    });
    schema.distance = new fields.SchemaField({
      mod: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
    });
    schema.reach = new fields.SchemaField({
      mod: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
    });
    schema.stability = new fields.SchemaField({
      mod: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
    });
    schema.stamina = new fields.SchemaField({
      mod: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
    });
    schema.speed = new fields.SchemaField({
      mod: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
    });
    schema.mobility = new fields.SchemaField({
      description: new fields.StringField({ required: true, blank: true })
    });
  }
}