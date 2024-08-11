import DrawSteelItemBase from "./item-base.mjs";

export default class DrawSteelCulture extends DrawSteelItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();
  
    return schema;
  }

  prepareDerivedData() {
  }
}