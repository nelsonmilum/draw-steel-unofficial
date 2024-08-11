import DrawSteelItemBase from "./item-base.mjs";

export default class DrawSteelComplication extends DrawSteelItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();
  
    return schema;
  }

  prepareDerivedData() {
  }
}