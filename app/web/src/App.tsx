import { stories } from "./stories";

const nav = ["首页", "发现", "书架", "榜单", "创作"] as const;

export default function App() {
  return (
    <div className="min-h-screen bg-[#07060c] text-zinc-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#07060c]/90 backdrop-blur">
        <div className="flex h-14 items-center gap-4 px-4 sm:gap-6 sm:px-5">
          <a href="#top" className="shrink-0 text-lg font-semibold tracking-tight text-white">
            Isek.ai
          </a>
          <nav className="flex min-w-0 flex-1 items-center gap-4 overflow-x-auto text-sm text-zinc-400 sm:gap-6">
            {nav.map((label) => (
              <a
                key={label}
                href={`#${label}`}
                className={
                  label === "首页"
                    ? "shrink-0 text-zinc-100"
                    : "shrink-0 transition-colors hover:text-zinc-100"
                }
                aria-current={label === "首页" ? "page" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="shrink-0 rounded-md bg-violet-600 px-3.5 py-1.5 text-sm font-medium text-white transition-colors hover:bg-violet-500"
          >
            登录
          </button>
        </div>
      </header>

      <main id="top" className="px-4 py-4 sm:px-5 sm:py-5">
        <h1 className="sr-only">Isek.ai 首页</h1>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
          {stories.map((story) => (
            <li key={story.title}>
              <article className="relative aspect-[3/4] overflow-hidden rounded-md">
                <img
                  src={story.cover}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/10" aria-hidden="true" />
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background:
                      "repeating-linear-gradient(135deg, transparent 0 14px, rgba(255,255,255,0.03) 14px 15px)",
                  }}
                  aria-hidden="true"
                />
                <span className="pointer-events-none absolute -right-1 bottom-10 select-none text-6xl font-black leading-none text-white/10 sm:text-7xl">
                  {story.mark}
                </span>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent px-2.5 pb-2.5 pt-16">
                  <h2 className="text-[13px] font-black leading-tight tracking-tight text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.85)] sm:text-sm">
                    {story.title}
                  </h2>
                  <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-zinc-300 [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
                    {story.hook}
                  </p>
                  <p className="mt-1.5 text-[10px] text-zinc-400">第{story.chapter}章</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
