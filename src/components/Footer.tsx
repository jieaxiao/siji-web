import Link from 'next/link';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">页脚</h2>
      <div className="mx-auto max-w-[1200px] px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <Globe className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold tracking-tight text-white">康翔幸运物流</span>
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              连接全球，传递信任。为您提供高效、安全、可靠的国际物流解决方案。
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">服务项目</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/services#sea" className="text-sm leading-6 text-gray-300 hover:text-white">海运服务</Link>
                  </li>
                  <li>
                    <Link href="/services#air" className="text-sm leading-6 text-gray-300 hover:text-white">空运服务</Link>
                  </li>
                  <li>
                    <Link href="/services#land" className="text-sm leading-6 text-gray-300 hover:text-white">陆运及铁路</Link>
                  </li>
                  <li>
                    <Link href="/services#warehouse" className="text-sm leading-6 text-gray-300 hover:text-white">仓储配送</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">公司</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white">关于我们</Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-sm leading-6 text-gray-300 hover:text-white">资讯中心</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">联系我们</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">联系方式</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-center gap-2 text-sm leading-6 text-gray-300">
                    <Phone className="h-4 w-4" />
                    <span>+86 131-6803-9023</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm leading-6 text-gray-300">
                    <Mail className="h-4 w-4" />
                    <span>alan@consentlogistics.com </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm leading-6 text-gray-300">
                    <MapPin className="h-4 w-4 mt-1" />
                    <span>中国广东省深圳市宝安区怀德社区</span>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">关注我们</h3>
                <div className="mt-6">
                    <div className="bg-white p-2 rounded-lg w-32 h-32 flex items-center justify-center">
                         {/* 替换为实际的微信二维码图片 */}
                         {/* <div className="w-full h-full bg-gray-200 flex flex-col items-center justify-center text-gray-500 text-xs text-center">
                            <span className="mb-1">微信二维码</span>
                            <span className="scale-75">扫码咨询</span>
                         </div> */}
                         <img src="/images/wechat-qr.jpg" alt="微信二维码" className="w-full h-full object-contain" />
                    </div>
                    <p className="mt-2 text-xs text-gray-400">扫描二维码添加官方微信</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; {new Date().getFullYear()} 康翔幸运物流有限公司. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
