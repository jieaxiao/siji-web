export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">关于康翔幸运物流</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            康翔幸运物流（Kangxiang Lucky Logistics）是一家致力于为全球客户提供卓越物流解决方案的领先企业。自成立以来，我们始终秉承“连接全球，传递信任”的使命，不断拓展业务领域，优化服务流程。
          </p>
        </div>

        {/* Links */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-10">
            <a href="#vision">公司愿景 <span aria-hidden="true">&rarr;</span></a>
            <a href="#values">核心价值观 <span aria-hidden="true">&rarr;</span></a>
            <a href="#history">发展历程 <span aria-hidden="true">&rarr;</span></a>
            <a href="#team">专业团队 <span aria-hidden="true">&rarr;</span></a>
          </div>

          {/* Stats */}
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-600">全球覆盖国家/地区</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">100+</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-600">年处理集装箱量</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">50,000+ TEU</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-600">全球合作伙伴</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">500+</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-600">客户满意度</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">99.8%</dd>
            </div>
          </dl>
        </div>
        
        {/* Mission & Vision */}
        <div id="vision" className="mt-16 border-t border-gray-200 pt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">我们的使命</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              通过创新的物流解决方案和卓越的客户服务，为客户创造价值，促进全球贸易的繁荣与发展。我们致力于消除贸易壁垒，让货物在全球范围内的流动更加顺畅、高效。
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">我们的愿景</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              成为全球最值得信赖的智慧物流服务商。我们希望通过技术赋能和网络优化，构建一个开放、共享、共赢的物流生态圈，让每一份托付都得到完美的交付。
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div id="values" className="mt-16 pt-16 border-t border-gray-200">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-12">核心价值观</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold text-blue-600 mb-4">客户至上</h4>
              <p className="text-gray-600">我们始终将客户的需求放在首位，想客户之所想，急客户之所急，用心服务每一个环节。</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold text-blue-600 mb-4">诚信务实</h4>
              <p className="text-gray-600">诚实守信是我们立足之本。我们坚持实事求是，信守承诺，以真诚赢得客户的信任。</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold text-blue-600 mb-4">创新进取</h4>
              <p className="text-gray-600">我们拥抱变化，敢于创新。不断探索新技术、新模式，持续提升服务效率和质量。</p>
            </div>
          </div>
        </div>

        {/* History */}
        <div id="history" className="mt-16 pt-16 border-t border-gray-200">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-12">发展历程</h3>
            <div className="relative border-l border-gray-200 ml-4 space-y-12">
                <div className="relative pl-8">
                    <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-blue-600 ring-4 ring-white"></span>
                    <h4 className="text-lg font-bold text-gray-900">2026年</h4>
                    <p className="mt-1 text-gray-600">公司全面启动数字化转型战略，新一代智能物流系统上线。</p>
                </div>
                <div className="relative pl-8">
                    <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-gray-300 ring-4 ring-white"></span>
                    <h4 className="text-lg font-bold text-gray-900">2024年</h4>
                    <p className="mt-1 text-gray-600">拓展欧洲、北美海外仓业务，实现跨境电商物流全链路覆盖。</p>
                </div>
                <div className="relative pl-8">
                    <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-gray-300 ring-4 ring-white"></span>
                    <h4 className="text-lg font-bold text-gray-900">2020年</h4>
                    <p className="mt-1 text-gray-600">获得“国家AAAA级物流企业”认证，年货运量突破新高。</p>
                </div>
                <div className="relative pl-8">
                    <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-gray-300 ring-4 ring-white"></span>
                    <h4 className="text-lg font-bold text-gray-900">2015年</h4>
                    <p className="mt-1 text-gray-600">康翔幸运物流在深圳成立，开启国际物流服务征程。</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
