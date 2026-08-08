import type { PreviewVariant } from "@/lib/projects";

function CommercePreview() {
  return (
    <div className="flex h-full w-full flex-col bg-[#f7f5f1] p-3 text-zinc-900">
      <div className="flex items-center justify-between">
        <div className="h-2 w-2 rounded-full bg-zinc-900" />
        <div className="flex gap-1.5">
          <div className="h-1 w-6 rounded-full bg-zinc-400" />
          <div className="h-1 w-6 rounded-full bg-zinc-400" />
          <div className="h-1 w-6 rounded-full bg-zinc-400" />
        </div>
        <div className="h-2 w-2 rounded-full border border-zinc-900" />
      </div>
      <div className="mt-3 grid flex-1 grid-cols-5 gap-3">
        <div className="col-span-3 flex flex-col justify-center gap-1.5">
          <div className="h-3 w-24 rounded bg-zinc-900" />
          <div className="h-1.5 w-16 rounded-full bg-zinc-400" />
          <div className="mt-1 flex h-4 w-10 items-center justify-center rounded-sm bg-zinc-900">
            <div className="h-1 w-4 rounded-full bg-zinc-200" />
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-center rounded-md bg-gradient-to-br from-rose-200 via-[#e9d7c6] to-[#cdb8a8]">
          <div className="h-12 w-12 rounded-full bg-zinc-900/15" />
        </div>
      </div>
      <div className="mt-3 grid flex-1 grid-cols-4 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex flex-col gap-1 rounded-sm border border-zinc-200 bg-white p-1.5"
          >
            <div className="h-8 flex-1 rounded-sm bg-gradient-to-br from-zinc-200 to-zinc-300" />
            <div className="h-1 w-8 rounded-full bg-zinc-500" />
            <div className="h-1 w-5 rounded-full bg-zinc-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SaaSPreview() {
  return (
    <div className="flex h-full w-full flex-col bg-[#0b0b0e] p-3 text-zinc-100">
      <div className="flex items-center justify-between">
        <div className="h-2 w-2 rounded-full bg-blue-400" />
        <div className="flex gap-1.5">
          <div className="h-1 w-5 rounded-full bg-zinc-700" />
          <div className="h-1 w-5 rounded-full bg-zinc-700" />
          <div className="h-1 w-5 rounded-full bg-zinc-700" />
        </div>
        <div className="h-2.5 w-8 rounded-sm bg-blue-500" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-1.5">
        <div className="h-3 w-32 rounded bg-zinc-100" />
        <div className="h-1.5 w-20 rounded-full bg-zinc-600" />
        <div className="mt-0.5 flex gap-1">
          <div className="h-3 w-9 rounded-sm bg-blue-500" />
          <div className="h-3 w-9 rounded-sm border border-zinc-700" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-sm border border-zinc-800 bg-[#141419] p-1.5"
          >
            <div className="h-1.5 w-6 rounded-full bg-zinc-500" />
            <div className="mt-1 h-1 w-10 rounded-full bg-zinc-700" />
          </div>
        ))}
      </div>
    </div>
  );
}

function StudioPreview() {
  return (
    <div className="flex h-full w-full flex-col bg-[#101010] p-3 text-zinc-100">
      <div className="flex items-center justify-between">
        <div className="text-[9px] font-semibold tracking-[0.2em]">STUDIO</div>
        <div className="flex gap-1.5">
          <div className="h-1 w-5 rounded-full bg-zinc-600" />
          <div className="h-1 w-5 rounded-full bg-zinc-600" />
          <div className="h-1 w-5 rounded-full bg-zinc-600" />
        </div>
      </div>
      <div className="mt-2 text-[16px] font-semibold leading-[0.95] tracking-tight">
        Selected<br />work
      </div>
      <div className="mt-2 grid flex-1 grid-cols-5 gap-1.5">
        <div className="col-span-2 rounded-sm bg-gradient-to-b from-zinc-700 to-zinc-800" />
        <div className="col-span-3 grid grid-rows-2 gap-1.5">
          <div className="rounded-sm bg-gradient-to-b from-zinc-800 to-[#0e0e0e]" />
          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded-sm bg-gradient-to-b from-[#2a2a2e] to-[#17171a]" />
            <div className="rounded-sm bg-gradient-to-b from-amber-200/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FintechPreview() {
  return (
    <div className="flex h-full w-full flex-col bg-[#0a0f0d] p-3 text-zinc-100">
      <div className="flex items-center justify-between">
        <div className="h-2 w-2 rounded-full bg-emerald-400" />
        <div className="flex gap-1.5">
          <div className="h-1 w-5 rounded-full bg-zinc-700" />
          <div className="h-1 w-5 rounded-full bg-zinc-700" />
          <div className="h-1 w-5 rounded-full bg-zinc-700" />
        </div>
        <div className="h-2 w-2 rounded-full border border-emerald-400" />
      </div>
      <div className="mt-2 h-3 w-28 rounded bg-zinc-100" />
      <div className="mt-2 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-sm border border-zinc-800 bg-[#0f1512] p-1.5">
            <div className="h-2 w-8 rounded bg-zinc-200" />
            <div className="mt-1 h-1 w-6 rounded-full bg-emerald-400/70" />
          </div>
        ))}
      </div>
      <div className="mt-2 flex flex-1 items-end gap-1 rounded-sm border border-zinc-800 bg-[#0f1512] p-2">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-emerald-400/80"
            style={{ height: `${25 + ((i * 17) % 60)}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function RestaurantPreview() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#1a1209] text-zinc-100">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(234,179,8,0.35) 0%, rgba(120,53,15,0.55) 55%, #140d06 100%)",
        }}
      />
      <div className="relative flex items-center justify-between p-3">
        <div className="text-[9px] font-semibold tracking-[0.18em]">LE GRILL</div>
        <div className="flex gap-1.5">
          <div className="h-1 w-4 rounded-full bg-zinc-400/70" />
          <div className="h-1 w-4 rounded-full bg-zinc-400/70" />
        </div>
      </div>
      <div className="relative flex flex-1 flex-col justify-end gap-1 p-3">
        <div className="h-3 w-24 rounded bg-zinc-100" />
        <div className="h-1.5 w-16 rounded-full bg-zinc-400/80" />
        <div className="mt-1 flex h-3.5 w-11 items-center justify-center rounded-sm bg-amber-500">
          <div className="h-1 w-5 rounded-full bg-[#1a1209]" />
        </div>
      </div>
    </div>
  );
}

function WebAppPreview() {
  return (
    <div className="flex h-full w-full flex-col bg-[#0b0b0f] text-zinc-100">
      <div className="flex flex-1">
        <div className="flex w-8 flex-col gap-1.5 border-r border-zinc-800/80 p-1.5">
          <div className="h-2 w-2 rounded-sm bg-violet-400" />
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-1 w-4 rounded-full bg-zinc-700" />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-1.5 p-2">
          <div className="flex items-center justify-between">
            <div className="h-2 w-12 rounded bg-zinc-600" />
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-sm border border-zinc-700" />
              <div className="h-2 w-2 rounded-sm border border-zinc-700" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-sm border border-zinc-800 bg-[#12121a] p-1.5">
                <div className="h-2 w-6 rounded bg-zinc-300" />
                <div className="mt-1 h-1 w-4 rounded-full bg-violet-400/70" />
              </div>
            ))}
          </div>
          <div className="flex-1 rounded-sm border border-zinc-800 bg-[#12121a] p-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="mb-1 flex items-center justify-between border-b border-zinc-800/70 pb-1"
              >
                <div className="h-1 w-8 rounded-full bg-zinc-600" />
                <div className="h-1 w-4 rounded-full bg-zinc-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectPreview({ variant }: { variant: PreviewVariant }) {
  return (
    <div className="flex aspect-[4/3] w-full flex-col overflow-hidden rounded-lg border border-line/70 bg-surface">
      <div className="flex h-6 shrink-0 items-center gap-2 border-b border-line/70 bg-[#0e0e0e] px-2.5">
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
        </div>
        <div className="mx-auto flex h-3.5 w-24 items-center justify-center rounded-full bg-zinc-800/80">
          <div className="h-0.5 w-14 rounded-full bg-zinc-600" />
        </div>
        <div className="w-5" />
      </div>
      <div className="min-h-0 flex-1">
        {variant === "commerce" ? <CommercePreview /> : null}
        {variant === "saas" ? <SaaSPreview /> : null}
        {variant === "studio" ? <StudioPreview /> : null}
        {variant === "fintech" ? <FintechPreview /> : null}
        {variant === "restaurant" ? <RestaurantPreview /> : null}
        {variant === "webapp" ? <WebAppPreview /> : null}
      </div>
    </div>
  );
}
