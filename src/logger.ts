// Structured JSON logger with request ID propagation
export interface LogContext {
  requestId?: string;
  userId?: string;
  platform?: string;
  [key: string]: unknown;
}

export function log(level: "info" | "warn" | "error", msg: string, ctx: LogContext = {}) {
  console.log(JSON.stringify({
    ts: new Date().toISOString(),
    level,
    msg,
    ...ctx,
  }));
}
