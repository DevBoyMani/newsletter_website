export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#FAFAFA] flex items-center justify-center">
      <div className="flex items-center gap-3 text-[#01261E]">
        <span className="h-6 w-6 animate-spin rounded-full border-2 border-[#01261E] border-t-transparent" />
        Loading…
      </div>
    </div>
  );
}
