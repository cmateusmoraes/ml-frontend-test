import useSWR from "swr";

import { api } from "../services/api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useFetch<Data = any, Error = any>(url: string | null) {
  const { data, error, mutate } = useSWR<Data, Error>(
    url ? url : null,
    async (url: string) => {
      const response = await api.get(url);

      return response.data;
    },
  );

  return { data, error, mutate };
}
