import { Agent } from "../agent/Agent";
import { Appointment } from "../appointment/Appointment";
import { Client } from "../client/Client";

export type Property = {
  address: string | null;
  agent?: Agent | null;
  appointments?: Array<Appointment>;
  client?: Client | null;
  createdAt: Date;
  description: string | null;
  id: string;
  listedDate: Date | null;
  price: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
