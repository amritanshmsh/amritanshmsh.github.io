'use client';

import { useState, useEffect } from 'react';
import Status from "@/components/Status";
import Time from "@/components/Time";
import { LANYARD_API_URL } from "@/util";

export default function StatusPill() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchStatus() {
      const res = await fetch(LANYARD_API_URL);
      const json = await res.json();
      if (!cancelled) setData(json.data);
    }

    fetchStatus();
    const id = setInterval(fetchStatus, 15_000);
    return () => { cancelled = true; clearInterval(id); };
  }, []);

  if (!data) return null;

  return (
    <aside className="flex flex-col gap-2 text-sm font-semibold md:flex-row md:gap-y-0 dark:text-gray-400">
      <Status initialData={data}>
        <Time />
      </Status>
    </aside>
  );
}
