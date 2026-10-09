// Version and build time, set at build time in next.config.mjs.
export default function BuildInfo() {
  const version = process.env.APP_VERSION;
  const builtAt = process.env.APP_BUILD_TIME ?? "";
  return (
    <span className="hidden sm:inline font-mono text-[10px] text-ink-400">
      {version} · built{" "}
      <time dateTime={builtAt}>{builtAt.slice(0, 16).replace("T", " ")} UTC</time>
    </span>
  );
}
