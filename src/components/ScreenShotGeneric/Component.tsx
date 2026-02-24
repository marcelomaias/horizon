export default function ScreenShotGeneric() {
  return (
    <div
      className="relative max-w-[1000px] mx-auto"
      style={{ animation: 'screenshotRise 0.8s 0.4s cubic-bezier(0.22, 1, 0.36, 1) both' }}
    >
      <div className="bg-h-surface border border-h-border rounded-[0.875rem] overflow-hidden shadow-[var(--h-shadow-xl)]">
        {/* Browser chrome */}
        <div className="flex items-center gap-2.5 bg-h-surface-2 border-b border-h-border px-4 py-2.5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="text-[0.80rem] text-h-text-2 ml-2">
            🔒 horizonplatform.com/admin/collections/pages/home
          </div>
        </div>

        {/* Payload admin mockup */}
        <div className="grid grid-cols-[220px_1fr] min-h-[500px] bg-h-bg text-left">
          <aside className="bg-h-surface border-r border-h-border p-5 flex flex-col">
            <div className="px-4 pb-4 border-b border-h-border mb-3 font-serif text-base text-h-text flex items-center gap-2">
              <span className="w-5 h-5 rounded-[6px] bg-h-text inline-block" />
              Horizon
            </div>

            <div className="px-2 mb-4">
              <div className="text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-h-text-muted mb-2">
                Collections
              </div>
              <div className="px-2 py-1 rounded-md text-sm bg-h-accent-bg text-h-accent font-medium">
                <span className="inline-block w-4">📄</span> Pages
              </div>
              <div className="px-2 py-1 rounded-md text-sm text-h-text-2 mt-2">
                <span className="inline-block w-4">✍️</span> Posts
              </div>
              <div className="px-2 py-1 rounded-md text-sm text-h-text-2 mt-2">
                <span className="inline-block w-4">🖼️</span> Media
              </div>
            </div>

            <div className="px-2">
              <div className="text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-h-text-muted mb-2">
                Globals
              </div>
              <div className="px-2 py-1 rounded-md text-sm text-h-text-2">
                <span className="inline-block w-4">🔗</span> Header
              </div>
              <div className="px-2 py-1 rounded-md text-sm text-h-text-2 mt-2">
                <span className="inline-block w-4">📎</span> Footer
              </div>
            </div>
          </aside>

          <main className="flex flex-col text-left">
            <div className="flex items-center justify-between p-3.5 border-b border-h-border bg-h-surface">
              <div className="flex items-center gap-2 text-sm text-h-text-muted">
                Pages <span className="opacity-50">/</span>{' '}
                <strong className="font-medium">Home</strong>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 text-sm rounded-full border border-h-border text-h-text-2 bg-transparent">
                  Preview
                </button>
                <button className="px-3 py-1.5 text-sm rounded-full border border-h-border text-h-text-2 bg-transparent">
                  Save draft
                </button>
                <button className="px-3 py-1.5 text-sm rounded-full bg-h-text text-h-bg">
                  Publish
                </button>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-5">
              <section className="bg-h-surface border border-h-border rounded-md overflow-hidden text-left">
                <div className="flex items-center justify-between px-4 py-3 border-b border-h-border bg-h-surface-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.06em] text-h-text">
                    Layout Blocks
                  </span>
                  <span className="text-[0.7rem] bg-h-surface border border-h-border text-h-text-muted px-2 py-0.5 rounded-full">
                    5 blocks
                  </span>
                </div>

                <div className="p-3 flex flex-col gap-3">
                  <div className="flex items-center gap-3 p-3 bg-h-bg border border-h-border rounded-md border-h-accent bg-h-accent-bg">
                    <span className="text-sm text-h-text-muted">⠿</span>
                    <div className="w-7 h-7 rounded-[7px] bg-h-surface border border-h-border grid place-items-center">
                      🦸
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-h-text">Hero</div>
                      <div className="text-xs text-h-text-muted truncate">
                        Headline · Subheadline · 2 CTAs
                      </div>
                    </div>
                    <span className="text-xs bg-[#dcfce7] text-[#166534] px-2 py-0.5 rounded-full">
                      Published
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-h-bg border border-h-border rounded-md">
                    <span className="text-sm text-h-text-muted">⠿</span>
                    <div className="w-7 h-7 rounded-[7px] bg-h-surface border border-h-border grid place-items-center">
                      ☁️
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-h-text">Logo Cloud</div>
                      <div className="text-xs text-h-text-muted truncate">
                        6 logos · “Trusted by” label
                      </div>
                    </div>
                    <span className="text-xs bg-[#dcfce7] text-[#166534] px-2 py-0.5 rounded-full">
                      Published
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-h-bg border border-h-border rounded-md">
                    <span className="text-sm text-h-text-muted">⠿</span>
                    <div className="w-7 h-7 rounded-[7px] bg-h-surface border border-h-border grid place-items-center">
                      ⚡
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-h-text">Features Grid</div>
                      <div className="text-xs text-h-text-muted truncate">
                        3 cards · Icon + text layout
                      </div>
                    </div>
                    <span className="text-xs bg-[#dcfce7] text-[#166534] px-2 py-0.5 rounded-full">
                      Published
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-h-bg border border-h-border rounded-md">
                    <span className="text-sm text-h-text-muted">⠿</span>
                    <div className="w-7 h-7 rounded-[7px] bg-h-surface border border-h-border grid place-items-center">
                      💬
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-h-text">Testimonials</div>
                      <div className="text-xs text-h-text-muted truncate">
                        3 quotes · Avatar + name
                      </div>
                    </div>
                    <span className="text-xs bg-[#fef9c3] text-[#854d0e] px-2 py-0.5 rounded-full">
                      Draft
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-h-bg border border-h-border rounded-md">
                    <span className="text-sm text-h-text-muted">⠿</span>
                    <div className="w-7 h-7 rounded-[7px] bg-h-surface border border-h-border grid place-items-center">
                      🚀
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-h-text">CTA Banner</div>
                      <div className="text-xs text-h-text-muted truncate">
                        Headline · Primary button
                      </div>
                    </div>
                    <span className="text-xs bg-[#dcfce7] text-[#166534] px-2 py-0.5 rounded-full">
                      Published
                    </span>
                  </div>
                </div>

                <div className="m-0 mx-3 mt-3 border-2 border-dashed border-h-border-strong rounded-md p-3 text-sm text-h-text-muted cursor-pointer">
                  + Add block
                </div>
              </section>

              <aside className="flex flex-col gap-4">
                <div className="bg-h-surface border border-h-border rounded-md overflow-hidden">
                  <div className="px-3 py-2 border-b border-h-border text-[0.72rem] font-semibold text-h-text-2 bg-h-surface-2">
                    Page Settings
                  </div>
                  <div className="p-3">
                    <div>
                      <div className="text-xs font-medium text-h-text-2 mb-1">Title</div>
                      <input
                        className="w-full bg-h-bg border border-h-border rounded px-2 py-1 text-sm text-h-text outline-none"
                        defaultValue="Home"
                        readOnly
                      />
                    </div>
                    <div className="mt-3">
                      <div className="text-xs font-medium text-h-text-2 mb-1">Slug</div>
                      <input
                        className="w-full bg-h-bg border border-h-border rounded px-2 py-1 text-sm text-h-text outline-none"
                        defaultValue="/"
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-h-surface border border-h-border rounded-md overflow-hidden">
                  <div className="px-3 py-2 border-b border-h-border text-[0.72rem] font-semibold text-h-text-2 bg-h-surface-2">
                    Status
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-h-text-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] inline-block" />{' '}
                        Published
                      </div>
                      <div className="w-8 h-4 bg-green-500 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="bg-h-surface border border-h-border rounded-md overflow-hidden">
                  <div className="px-3 py-2 border-b border-h-border text-[0.72rem] font-semibold text-h-text-2 bg-h-surface-2">
                    SEO
                  </div>
                  <div className="p-3">
                    <div>
                      <div className="text-xs font-medium text-h-text-2 mb-1">Meta title</div>
                      <input
                        className="w-full bg-h-bg border border-h-border rounded px-2 py-1 text-sm text-h-text outline-none"
                        defaultValue="Horizon — Content Platform"
                        readOnly
                      />
                    </div>
                    <div className="mt-3">
                      <div className="text-xs font-medium text-h-text-2 mb-1">Meta description</div>
                      <input
                        className="w-full bg-h-bg border border-h-border rounded px-2 py-1 text-sm text-h-text outline-none"
                        defaultValue="Build and manage your site..."
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </main>
        </div>
        {/* end .pa */}
      </div>
      {/* end .browser-shell */}
    </div>
  )
}
