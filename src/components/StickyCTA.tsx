'use client'

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A120C] via-[#1A120C]/95 to-[#1A120C]/80 backdrop-blur-md" />
      <div className="absolute inset-0 border-t border-[#1E3A8A]/40" />
      <div className="relative container-x py-3 md:py-3.5">
        <div className="flex gap-2.5 md:gap-3 max-w-[760px] mx-auto">
          <a
            href="https://t.me/dampay1"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex-1 flex items-center justify-center gap-1.5 md:gap-2 py-3.5 md:py-4 bg-gradient-to-br from-[#37AEE2] to-[#1E96C8] text-white rounded-xl md:rounded-2xl text-[12px] md:text-[15px] font-bold whitespace-nowrap shadow-[0_8px_24px_rgba(34,158,217,0.35)] hover:brightness-[1.05] active:scale-[0.98] transition-all overflow-hidden"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff" className="shrink-0 md:w-[18px] md:h-[18px]">
              <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
            </svg>
            텔레그램 상담
          </a>
          <a
            href="sms:01029181929"
            className="relative flex-1 flex items-center justify-center gap-1.5 md:gap-2 py-3.5 md:py-4 bg-gradient-to-br from-[#16A34A] to-[#15803D] text-white rounded-xl md:rounded-2xl text-[12px] md:text-[15px] font-bold whitespace-nowrap shadow-[0_8px_24px_rgba(22,163,74,0.35)] hover:brightness-[1.05] active:scale-[0.98] transition-all overflow-hidden"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 md:w-[18px] md:h-[18px]">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 10h.01M12 10h.01M16 10h.01" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            문자 문의
          </a>
          <a
            href="tel:01029181929"
            className="relative flex-1 flex items-center justify-center gap-1.5 md:gap-2 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-[12px] md:text-[15px] font-bold text-white whitespace-nowrap bg-gradient-to-r from-[#B45309] via-[#EA580C] to-[#F59E0B] animate-glow-pulse overflow-hidden"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 md:w-[18px] md:h-[18px]">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0122 16.92z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            전화 상담
          </a>
        </div>
      </div>
    </div>
  )
}
