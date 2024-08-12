import DrawSteelItemBase from "./item-base.mjs";

export default class DrawSteelComplication extends DrawSteelItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    // Benefit - Maybe modify a stat

    // Drawback - maybe a stat, maybe a narrative... dealer's choice.
  
    return schema;
  }

  prepareDerivedData() {
  }
}