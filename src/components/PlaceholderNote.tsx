export default function PlaceholderNote({ text }: { text: string }) {
  return (
    <div className="border border-dashed border-terracotta/40 bg-terracotta/5 rounded px-5 py-4 mb-8">
      <p className="text-terracotta text-sm font-sans font-medium flex items-center gap-2">
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        {text}
      </p>
    </div>
  );
}
