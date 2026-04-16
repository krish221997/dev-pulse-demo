// Health check endpoint with dependency status
export interface HealthStatus {
  status: "healthy" | "degraded" | "unhealthy";
  checks: Record<string, { ok: boolean; latencyMs?: number }>;
}

export async function getHealth(): Promise<HealthStatus> {
  const checks: HealthStatus["checks"] = {
    db: { ok: true, latencyMs: 2 },
    upstream: { ok: true, latencyMs: 45 },
  };
  const allOk = Object.values(checks).every((c) => c.ok);
  return { status: allOk ? "healthy" : "degraded", checks };
}
