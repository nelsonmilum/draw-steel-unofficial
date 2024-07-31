import DrawSteelItemBase from "./item-base.mjs";

export default class DrawSteelKit extends DrawSteelItemBase {
  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    schema.kit = new fields.SchemaField({
      //Main
      type: new fields.StringField({ required: true, blank: true }),
      equipment: new fields.StringField({ required: true, blank: true }),

      //Modifiers
      area: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      stability: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      distance: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      stamina: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      reach: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      speed: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      mobility: new fields.StringField({ required: true, blank: true }),

      //Damage tiers
      meleeweapondmg: new fields.SchemaField({
        low: new fields.NumberField({ ...requiredInteger, initial: 0}),
        mid: new fields.NumberField({ ...requiredInteger, initial: 0}),
        top: new fields.NumberField({ ...requiredInteger, initial: 0})
      }),
      rangedweapondmg: new fields.SchemaField({
        low: new fields.NumberField({ ...requiredInteger, initial: 0}),
        mid: new fields.NumberField({ ...requiredInteger, initial: 0}),
        top: new fields.NumberField({ ...requiredInteger, initial: 0})
      }),
      magicdmg: new fields.SchemaField({
        low: new fields.NumberField({ ...requiredInteger, initial: 0}),
        mid: new fields.NumberField({ ...requiredInteger, initial: 0}),
        top: new fields.NumberField({ ...requiredInteger, initial: 0})
      })
    });

    return schema;
  }
}