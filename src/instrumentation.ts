export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    try {
      const dns = await import("node:dns");
      if (typeof dns.setServers === "function") {
        dns.setServers(["8.8.8.8", "1.1.1.1"]);
      }
    } catch {
      // Ignore in restricted environments
    }
  }
}
