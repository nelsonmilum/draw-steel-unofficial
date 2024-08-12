import DrawSteelItemBase from "./item-base.mjs";

export default class DrawSteelAncestry extends DrawSteelItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    //Default Physical attributes that every ancestry gets.
    schema.physical = new fields.SchemaField({
      siz: new fields.NumberField({ ...requiredInteger, initial: 1 }),
      wgt: new fields.NumberField({ ...requiredInteger, initial: 4 }),
      rch: new fields.NumberField({ ...requiredInteger, initial: 1 }),
      spd: new fields.NumberField({ ...requiredInteger, initial: 5 })
    })

    //Devils have their Fiend points, this may apply to other Ancestries in the future?
    schema.featurePoints = new fields.NumberField({ ...requiredInteger, initial: 3 })
  
    return schema;
  }

  prepareDerivedData() {
  }
}