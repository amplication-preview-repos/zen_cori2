import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentCreateInput = {
  agent?: AgentWhereUniqueInput | null;
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
  description?: string | null;
  property?: PropertyWhereUniqueInput | null;
  status?: "Option1" | null;
  time?: Date | null;
};
