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

    schema.keywords = new fields.SchemaField({
      area: new fields.BooleanField(),
      attack: new fields.BooleanField(),
      magic: new fields.BooleanField(),
      melee: new fields.BooleanField(),
      psionic: new fields.BooleanField(),
      ranged: new fields.BooleanField(),
      resistance: new fields.BooleanField(),
      weapon: new fields.BooleanField(),
    });

    schema.type = new fields.SchemaField({
      trigger: new fields.BooleanField(),
      maneuver: new fields.BooleanField(),
      free: new fields.BooleanField(),
      captain: new fields.StringField({ required: false, blank: true }),
    });

    schema.distance = new fields.SchemaField({
      melee: new fields.NumberField({ ...requiredInteger, initial: 0 }),
      ranged: new fields.NumberField({ ...requiredInteger, initial: 0 }),
      area: new fields.SchemaField({
        aura: new fields.NumberField({ ...requiredInteger, initial: 0 }),
        burst: new fields.NumberField({ ...requiredInteger, initial: 0 }),
        cube: new fields.NumberField({ ...requiredInteger, initial: 0 }),
        line: new fields.SchemaField({
          length: new fields.NumberField({ ...requiredInteger, initial: 0 }),
          widthandheight: new fields.NumberField({ ...requiredInteger, initial: 0 }),
        }),
        wall: new fields.NumberField({ ...requiredInteger, initial: 0 }),
        special: new fields.StringField({ required: false, blank: true }),
      }),
      self: new fields.BooleanField(),
    });

    schema.target = new fields.SchemaField({
      creature: new fields.SchemaField({
        qty: new fields.NumberField({ ...requiredInteger, initial: 0 }),
        all: new fields.BooleanField(),
      }),
      object: new fields.SchemaField({
        qty: new fields.NumberField({ ...requiredInteger, initial: 0 }),
        all: new fields.BooleanField(),
      }),
      enemy: new fields.SchemaField({
        qty: new fields.NumberField({ ...requiredInteger, initial: 0 }),
        all: new fields.BooleanField(),
      }),
      ally: new fields.SchemaField({
        qty: new fields.NumberField({ ...requiredInteger, initial: 0 }),
        all: new fields.BooleanField(),
      }),
      self: new fields.SchemaField({
        qty: new fields.NumberField({ ...requiredInteger, initial: 0 }),
        all: new fields.BooleanField(),
      }),

    });    

    return schema;
  }
}


