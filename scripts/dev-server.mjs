import { createServer } from "node:http";
import { createReadStream, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const port = Number(process.env.PORT ?? 4173);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8"
};

const server = createServer((request, response) => {
  const url = new URL(request.url ?? "/", `http://${request.headers.host}`);
  const pathname = decodeURIComponent(url.pathname);
  const safePath = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const requestedPath = resolve(join(root, safePath));
  const filePath = requestedPath.startsWith(root) ? requestedPath : join(root, "index.html");
  const target = resolveTarget(filePath);

  if (!target) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "content-type": contentTypes[extname(target)] ?? "application/octet-stream",
    "cache-control": "no-store"
  });
  createReadStream(target).pipe(response);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`钱就是钱 running at http://127.0.0.1:${port}/`);
});

function resolveTarget(path) {
  try {
    const stats = statSync(path);
    if (stats.isDirectory()) return join(path, "index.html");
    if (stats.isFile()) return path;
  } catch {
    return null;
  }

  return null;
}
