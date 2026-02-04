'use client';

import { Phone, Mail, QrCode } from 'lucide-react';

export function FloatingContact() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {/* WeChat Button */}
      <div className="relative group">
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto origin-right scale-95 group-hover:scale-100">
          <div className="bg-white p-2 rounded-lg shadow-xl border border-gray-100 w-32 h-32 flex items-center justify-center">
            {/* Placeholder for QR Code */}
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-xs text-gray-400 text-center">
              <img src="/images/wechat-qr.jpg" alt="微信二维码" className="w-full h-full object-contain" />
            </div>
          </div>
          {/* Arrow */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-t border-r border-gray-100"></div>
        </div>
        
        <button className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg text-white hover:bg-green-600 transition-all duration-300 hover:scale-110">
          <QrCode className="w-6 h-6" />
        </button>
      </div>

      {/* Phone Button */}
      <div className="relative group">
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto origin-right scale-95 group-hover:scale-100">
          <div className="bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-100 whitespace-nowrap text-gray-800 font-semibold flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-500" />
            +86 131-6803-9023
          </div>
          {/* Arrow */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-t border-r border-gray-100"></div>
        </div>
        
        <button className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full shadow-lg text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110">
          <Phone className="w-6 h-6" />
        </button>
      </div>

      {/* Email Button */}
      <div className="relative group">
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto origin-right scale-95 group-hover:scale-100">
          <div className="bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-100 whitespace-nowrap text-gray-800 font-semibold flex items-center gap-2">
            <Mail className="w-4 h-4 text-orange-500" />
            alan@consentlogistics.com 
          </div>
          {/* Arrow */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-t border-r border-gray-100"></div>
        </div>
        
        <button className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full shadow-lg text-white hover:bg-orange-600 transition-all duration-300 hover:scale-110">
          <Mail className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
