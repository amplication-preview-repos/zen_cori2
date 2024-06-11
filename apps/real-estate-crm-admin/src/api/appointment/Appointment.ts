import { Agent } from "../agent/Agent";
import { Client } from "../client/Client";
import { Property } from "../property/Property";

export type Appointment = {
  agent?: Agent | null;
  client?: Client | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  property?: Property | null;
  status?: "Option1" | null;
  time: Date | null;
  updatedAt: Date;
};
