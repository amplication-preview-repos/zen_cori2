import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type PropertyUpdateInput = {
  address?: string | null;
  agent?: AgentWhereUniqueInput | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  client?: ClientWhereUniqueInput | null;
  description?: string | null;
  listedDate?: Date | null;
  price?: number | null;
  status?: "Option1" | null;
};
