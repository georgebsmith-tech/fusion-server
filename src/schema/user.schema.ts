import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ _id: false })
class Address {
  @Prop()
  country: string;

  @Prop()
  address: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  zipCode: string;
}

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ unique: true, lowercase: true, required: true })
  email: string;

  @Prop()
  phone: string;

  @Prop()
  password: string;

  @Prop()
  referalCode: string;

  @Prop({ default: false })
  isVerified: boolean;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  company: string;

  @Prop()
  about: string;

  @Prop()
  location: string;

  @Prop()
  timeZone: string;

  @Prop({ type: Address })
  address: Address;
}

export const UserSchema = SchemaFactory.createForClass(User);
