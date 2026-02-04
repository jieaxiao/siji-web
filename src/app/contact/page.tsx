import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">联系我们</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            无论您有任何疑问或需求，我们的团队随时为您提供帮助。
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="rounded-2xl bg-gray-50 p-10">
            <h3 className="text-base font-semibold leading-7 text-gray-900">联系方式</h3>
            <dl className="mt-8 space-y-6 text-sm leading-6 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">地址</span>
                  <MapPin className="h-6 w-5 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>中国广东省深圳市宝安区怀德社区<br />康翔幸运物流大厦</dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">电话</span>
                  <Phone className="h-6 w-5 text-gray-400" aria-hidden="true" />
                </dt>
                <dd><a className="hover:text-gray-900" href="tel:+86 131-6803-9023">+86 131-6803-9023</a></dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">邮箱</span>
                  <Mail className="h-6 w-5 text-gray-400" aria-hidden="true" />
                </dt>
                <dd><a className="hover:text-gray-900" href="mailto:alan@consentlogistics.com ">alan@consentlogistics.com </a></dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">营业时间</span>
                  <Clock className="h-6 w-5 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>周一至周五: 9:00 - 18:00</dd>
              </div>
            </dl>
            
            <div className="mt-10 border-t border-gray-200 pt-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900 mb-6">官方微信</h3>
                <div className="bg-white p-4 rounded-xl shadow-sm inline-block border border-gray-100">
                  <img src="/images/wechat-qr.jpg" alt="微信二维码" className="w-40 h-40 object-contain" />
                </div>
                <p className="mt-4 text-sm text-gray-500">
                    扫描二维码添加客服微信，获取实时报价和咨询服务。
                </p>
            </div>
          </div>

          {/* Contact Form */}
          <form action="#" method="POST" className="flex flex-col gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">姓名</label>
              <div className="mt-2.5">
                <input type="text" name="name" id="name" autoComplete="name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">电子邮箱</label>
              <div className="mt-2.5">
                <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">留言内容</label>
              <div className="mt-2.5">
                <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <button type="submit" className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              发送消息
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
