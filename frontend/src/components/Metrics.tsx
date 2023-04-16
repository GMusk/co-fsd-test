import { useQuery } from "@tanstack/react-query";

async function getMetrics() {
  const res = await fetch("http://localhost:3000/metrics");
  if (res.status !== 200) {
    throw new Error("Server Failure");
  }
  return res.text();
}

export function Metrics() {
  const { isLoading, data } = useQuery({
    queryKey: ["metrics"],
    queryFn: getMetrics,
    refetchInterval: 30000,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <pre>{data}</pre>
    </div>
  );
}
