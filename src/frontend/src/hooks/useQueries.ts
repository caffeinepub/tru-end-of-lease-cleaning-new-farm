import { useMutation } from "@tanstack/react-query";
import type { ServiceType } from "../backend.d";
import { useActor } from "./useActor";

export function useSubmitEnquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      email: string;
      serviceType: ServiceType;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitEnquiry(
        data.name,
        data.phone,
        data.email,
        data.serviceType,
        data.message,
      );
    },
  });
}
