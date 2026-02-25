export default function PayloadAdminMockup() {
  return (
    <div
      className="hidden md:flex w-full max-w-[1200px] bg-[#111111] border border-[#1e1e1e] rounded-xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.7),0_8px_32px_rgba(0,0,0,0.5)] "
      style={{ animation: 'screenshotRise 0.8s 0.4s cubic-bezier(0.22, 1, 0.36, 1) both' }}
    >
      {/* ═══════════════════════
          LEFT — ADMIN PANEL
      ═══════════════════════ */}
      <div className="w-[460px] shrink-0 bg-[#111111] border-r border-[#1e1e1e] flex flex-col overflow-hidden text-left">
        {/* Tab bar */}
        <div className="flex border-b border-[#1e1e1e] px-5 shrink-0">
          <div className="py-3.5 mr-6 text-[13px] font-medium text-[#e8e8e8] cursor-pointer border-b-2 border-[#e8e8e8]">
            Content
          </div>
          <div className="py-3.5 mr-6 text-[13px] font-medium text-[#555555] cursor-pointer border-b-2 border-transparent">
            SEO
          </div>
        </div>

        {/* Layout header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2.5 shrink-0">
          <span className="text-[13px] font-semibold text-[#e0e0e0]">
            Layout<span className="text-violet-400">*</span>
          </span>
          <div className="flex items-center gap-3.5">
            <span className="text-[11.5px] text-[#555555] cursor-pointer hover:text-[#aaaaaa] transition-colors">
              Collapse All
            </span>
            <span className="text-[11.5px] text-[#555555] cursor-pointer hover:text-[#aaaaaa] transition-colors">
              Show All
            </span>
            <span className="text-[13px] text-[#555555] cursor-pointer hover:text-[#aaaaaa] transition-colors">
              ···
            </span>
          </div>
        </div>

        {/* Scrollable blocks */}
        <div className="flex-1 overflow-y-auto px-4 pb-5 [scrollbar-width:thin] [scrollbar-color:#2e2e2e_transparent]">
          {/* ── BLOCK CARD ── */}
          <div className="border border-[#272727] hover:border-[#3a3a3a] rounded-md overflow-hidden mb-2 transition-colors duration-150 group/card">
            {/* Block header */}
            <div className="flex items-center gap-2.5 px-3 py-2.5 bg-[#191919] hover:bg-[#222222] border-b border-[#272727] hover:border-b-[#333333] cursor-pointer select-none transition-all duration-150 group/header">
              <span className="text-[#444444] text-[10px] leading-none cursor-grab">⠿</span>
              <span className="text-[11px] font-semibold text-[#4a4a4a] min-w-[18px]">01</span>

              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#212121] group-hover/header:bg-[#2a2a2a] border border-[#2e2e2e] group-hover/header:border-[#3a3a3a] rounded px-2 py-0.5 text-[11px] font-medium text-[#888888] group-hover/header:text-[#aaaaaa] transition-all duration-150">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 opacity-80" />
                Hero Home
              </div>

              <span className="text-[12.5px] font-medium text-[#cccccc] group-hover/header:text-[#e0e0e0] flex-1 transition-colors duration-150">
                Hero block
              </span>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-[12px] text-[#555555] px-1 py-0.5 rounded cursor-pointer hover:bg-[#2a2a2a] hover:text-[#cccccc] transition-all duration-150">
                  ···
                </span>
                <span className="text-[9px] text-[#555555]">▲</span>
              </div>
            </div>

            {/* Block body */}
            <div className="bg-[#161616] px-2 pt-1 pb-0">
              {/* ── HEADING FIELD (RichText) ── */}
              <div className="rounded-md px-2.5 py-2.5 pb-3 hover:bg-white/[0.035] transition-colors duration-150 group/field">
                <span className="block text-[11px] font-semibold text-[#9a9a9a] mb-2 tracking-[0.01em]">
                  Heading
                </span>

                {/* Toolbar */}
                <div className="flex items-center gap-1 bg-[#242424] group-hover/field:bg-[#2a2a2a] border border-[#313131] group-hover/field:border-[#3d3d3d] border-b-0 rounded-t px-2 py-1.5 transition-all duration-150">
                  <div className="flex items-center gap-1.5 bg-[#1e1e1e] border border-[#333333] rounded px-2 py-0.5 text-[11px] text-[#888888] cursor-pointer min-w-[100px]">
                    <span className="text-[9px] text-[#555555] font-mono">H1</span>
                    <span>Heading 1</span>
                    <span className="ml-auto text-[8px] text-[#555555]">▾</span>
                  </div>
                  <div className="w-px h-3.5 bg-[#333333] mx-1" />
                  <button className="w-6 h-6 flex items-center justify-center rounded text-[11px] font-bold text-[#666666] hover:bg-[#2e2e2e] hover:text-[#cccccc] transition-all duration-150 border-none bg-transparent cursor-pointer">
                    B
                  </button>
                  <button className="w-6 h-6 flex items-center justify-center rounded text-[11px] italic font-semibold text-[#e8e8e8] bg-[#333333] transition-all duration-150 border-none cursor-pointer">
                    I
                  </button>
                  <button className="w-6 h-6 flex items-center justify-center rounded text-[11px] underline text-[#666666] hover:bg-[#2e2e2e] hover:text-[#cccccc] transition-all duration-150 border-none bg-transparent cursor-pointer">
                    U
                  </button>
                  <div className="w-px h-3.5 bg-[#333333] mx-1" />
                  <button className="w-6 h-6 flex items-center justify-center rounded text-[11px] text-[#666666] hover:bg-[#2e2e2e] hover:text-[#cccccc] transition-all duration-150 border-none bg-transparent cursor-pointer">
                    ⛓
                  </button>
                </div>

                {/* Content area */}
                <div className="bg-[#1e1e1e] group-hover/field:bg-[#242424] border border-[#313131] group-hover/field:border-[#3d3d3d] rounded-b px-3 py-3.5 min-h-[88px] transition-all duration-150">
                  <p className="text-[17px] font-bold text-[#e8e8e8] leading-[1.3] tracking-[-0.02em] text-center">
                    Your marketing site,
                    <br />
                    <em className="italic font-semibold text-[#7a7a7a]">fully in your hands</em>
                  </p>
                </div>

                <p className="text-[10.5px] text-[#4a4a4a] mt-1.5 leading-relaxed">
                  Use italic text for the styled second line (e.g. &lt;em&gt;fully in your
                  hands&lt;/em&gt;)
                </p>
              </div>

              {/* ── SUBTEXT FIELD ── */}
              <div className="rounded-md px-2.5 py-2.5 pb-3 hover:bg-white/[0.035] transition-colors duration-150 group/field">
                <span className="block text-[11px] font-semibold text-[#9a9a9a] mb-2">Subtext</span>
                <textarea
                  readOnly
                  defaultValue="Horizon is a headless content platform that lets marketing teams create, edit, and publish pages — without waiting on developers."
                  className="w-full bg-[#1e1e1e] group-hover/field:bg-[#242424] border border-[#313131] group-hover/field:border-[#3d3d3d] rounded px-2.5 py-2 text-[12.5px] font-light text-[#b0b0b0] leading-relaxed resize-none min-h-[80px]  outline-none transition-all duration-150"
                />
              </div>

              {/* ── PRIMARY BUTTON LABEL FIELD ── */}
              <div className="rounded-md px-2.5 py-2.5 pb-3.5 hover:bg-white/[0.035] transition-colors duration-150 group/field">
                <span className="block text-[11px] font-semibold text-[#9a9a9a] mb-2">
                  Primary Button Label
                </span>
                <input
                  readOnly
                  defaultValue="Start building free"
                  className="w-full bg-[#1e1e1e] group-hover/field:bg-[#242424] border border-[#313131] group-hover/field:border-[#3d3d3d] rounded px-2.5 py-2 text-[12.5px] text-[#b0b0b0]  outline-none transition-all duration-150"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════
          RIGHT — LIVE PREVIEW
      ═══════════════════════ */}
      <div className="flex-1 bg-[#0d0d0d] flex flex-col overflow-hidden">
        {/* Nav */}
        <div className="flex items-center justify-between px-5 py-2.5 border-b border-[#1e1e1e] bg-[#111111] shrink-0">
          <span className="text-[15px] font-bold text-[#e8e8e8] tracking-[-0.02em]">Horizon</span>
          <nav className="flex items-center gap-[22px]">
            {['Demo', 'Posts', 'Contact'].map((link) => (
              <span
                key={link}
                className="text-[13px] text-[#555555] cursor-pointer hover:text-[#888888] transition-colors duration-150"
              >
                {link}
              </span>
            ))}
          </nav>
          <div className="w-7 h-7 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[13px] text-[#555555] cursor-pointer hover:bg-[#1e1e1e] hover:text-[#888888] transition-all duration-150">
            ☽
          </div>
        </div>

        {/* Preview body */}
        <div className="flex-1 overflow-y-auto flex flex-col items-center px-10 pt-[60px] pb-10">
          {/* Hero */}
          <div className="text-center max-w-[500px] w-full mb-12">
            <h1 className="text-[34px] font-bold text-[#e8e8e8] leading-[1.15] tracking-[-0.035em] mb-[18px] ">
              Your marketing site,
              <br />
              <em className="italic font-semibold text-[#5a5a5a]">fully in your hands</em>
            </h1>
            <p className="text-[13.5px] text-[#5a5a5a] leading-[1.7] max-w-[400px] mx-auto mb-7 font-light">
              Horizon is a headless content platform that lets marketing teams create, edit, and
              publish pages — without waiting on developers.
            </p>
            <div className="flex items-center justify-center gap-2.5">
              <button className="bg-[#e8e8e8] text-[#0d0d0d] px-[22px] py-[11px] rounded-full text-[13px] font-semibold border-none cursor-pointer hover:opacity-90 transition-opacity duration-150">
                Start building free
              </button>
              <button className="bg-transparent text-[#666666] px-[22px] py-[11px] rounded-full text-[13px] font-medium border border-[#2e2e2e] cursor-pointer hover:bg-[#1e1e1e] hover:text-[#999999] transition-all duration-150">
                Explore the demo →
              </button>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="w-full max-w-[520px] text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#333333] mb-5">
              Trusted by modern product teams
            </p>
            <div className="grid grid-cols-3 gap-y-4 gap-x-8">
              {[
                { icon: '◉', name: 'Amsterdam' },
                { icon: '◈', name: 'Colorado' },
                { icon: '☁', name: 'Cloud' },
                { icon: '◎', name: 'monochrome' },
                { icon: '✛', name: 'Swiss' },
                { icon: '~', name: 'theo' },
              ].map(({ icon, name }) => (
                <div
                  key={name}
                  className="flex items-center justify-center gap-1.5 text-[#333333] text-[12px] font-medium"
                >
                  <div className="w-4 h-4 rounded bg-[#1e1e1e] border border-[#2a2a2a] flex items-center justify-center text-[9px]">
                    {icon}
                  </div>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
