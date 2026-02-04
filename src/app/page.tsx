'use client';

import Link from 'next/link';
import { ArrowRight, Ship, Plane, Truck, Package, Clock, ShieldCheck, Globe, Users, Building2, BarChart3, CheckCircle2, Warehouse, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-blue-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 opacity-90 z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay z-0 opacity-40" />
        
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl mb-6">
              <span className="block mb-2">康翔幸运物流</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-300">
                连接全球，传递信任
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100 max-w-3xl mx-auto font-medium">
              专业的国际物流服务商，为您提供海运、空运、陆运及仓储一站式解决方案。
              <br className="hidden sm:block" />
              无论货物去往何处，我们都全力以赴，确保安全准时送达。
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link
              href="/contact"
              className="rounded-full bg-blue-500 px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-blue-400 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              立即获取报价
            </Link>
            <Link 
              href="/services" 
              className="rounded-full bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-bold text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              探索我们的服务 <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12 opacity-70"
          >
            {[
              { label: '覆盖国家', value: '100+' },
              { label: '全球网点', value: '500+' },
              { label: '年处理量', value: '50k+ TEU' },
              { label: '客户满意度', value: '99.8%' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">全方位服务</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              满足您多样化的国际物流需求
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              从传统的货运代理到复杂的供应链管理，康翔幸运物流提供灵活、高效的定制化解决方案。
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: '国际海运 (Ocean Freight)',
                description: '提供全球主要港口的整箱（FCL）和拼箱（LCL）服务。与马士基、中远海运等知名船公司深度合作，舱位充足，价格优势明显。',
                icon: Ship,
                features: ['整箱/拼箱', '特种柜运输', '门到门服务']
              },
              {
                title: '国际空运 (Air Freight)',
                description: '针对高时效货物，提供快速可靠的空运服务。覆盖全球主要机场，包括包机服务、鲜活货物运输及危险品操作。',
                icon: Plane,
                features: ['快速订舱', '包机服务', '机场地面操作']
              },
              {
                title: '多式联运 (Multimodal)',
                description: '整合海运、空运、铁路及公路资源，为您规划最优运输路线。中欧班列、中亚班列等铁路运输服务，平衡时效与成本。',
                icon: Truck,
                features: ['中欧班列', '公铁联运', '海铁联运']
              },
              {
                title: '仓储配送 (Warehousing)',
                description: '全球主要港口及内陆城市拥有现代化仓库，提供货物存储、分拣、包装、贴标及一件代发服务，助您优化库存管理。',
                icon: Warehouse,
                features: ['保税仓储', '库存管理', '电商物流']
              },
              {
                title: '报关报检 (Customs)',
                description: '专业的关务团队，熟悉各国进出口政策及法规。提供高效的进出口报关、商检代理及关务咨询服务，降低查验风险。',
                icon: FileCheck,
                features: ['进出口报关', '原产地证', '关务咨询']
              },
              {
                title: '供应链方案 (Solutions)',
                description: '根据客户行业特性，量身定制端到端的供应链解决方案。涵盖采购物流、生产物流及销售物流，提升供应链整体效率。',
                icon: Package,
                features: ['项目物流', '供应链金融', '物流咨询']
              },
            ].map((service) => (
              <div key={service.title} className="group relative flex flex-col bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold leading-7 text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="mt-4 flex-auto text-base leading-7 text-gray-600">{service.description}</p>
                <ul className="mt-6 space-y-2 border-t border-gray-100 pt-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">核心优势</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              为什么选择康翔幸运物流？
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              我们深知物流对您业务的重要性。因此，我们致力于提供卓越的服务体验，成为您最值得信赖的合作伙伴。
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: '全球化网络布局',
                  description: '我们的代理网络遍布全球100多个国家和地区，无论您的货物在世界的哪个角落，我们都能提供本地化的专业服务和支持。',
                  icon: Globe,
                },
                {
                  name: '专业的服务团队',
                  description: '拥有经验丰富的物流专家团队，为您提供一对一的专属客服。快速响应您的需求，解决运输过程中遇到的任何问题。',
                  icon: Users,
                },
                {
                  name: '全程可视化追踪',
                  description: '采用先进的物流信息系统，实现货物全程可视化追踪。您可以随时随地掌握货物动态，让物流运输更加透明、可控。',
                  icon: BarChart3,
                },
                {
                  name: '安全与合规保障',
                  description: '严格遵守国际运输法规和标准，完善的风险控制体系。为您的货物提供全方位的安全保障，让您无后顾之忧。',
                  icon: ShieldCheck,
                },
                {
                  name: '灵活的定制方案',
                  description: '不拘泥于标准服务，我们根据您的货物特性、时效要求及预算，为您量身定制最具性价比的物流解决方案。',
                  icon: Building2,
                },
                {
                  name: '极具竞争力的价格',
                  description: '依托强大的集采能力和与各大船司、航司的良好合作关系，我们为您提供极具市场竞争力的运价，有效降低您的物流成本。',
                  icon: CheckCircle2,
                },
              ].map((feature) => (
                <div key={feature.name} className="flex flex-col pl-4 border-l-4 border-blue-100 hover:border-blue-600 transition-colors duration-300">
                  <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-gray-900">
                    <feature.icon className="h-6 w-6 flex-none text-blue-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Partners / Trust Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-12">深受全球客户信赖</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center justify-center h-20 bg-white/10 rounded-lg text-xl font-bold tracking-wider hover:bg-white/20 transition-colors">MAERSK</div>
             <div className="flex items-center justify-center h-20 bg-white/10 rounded-lg text-xl font-bold tracking-wider hover:bg-white/20 transition-colors">COSCO</div>
             <div className="flex items-center justify-center h-20 bg-white/10 rounded-lg text-xl font-bold tracking-wider hover:bg-white/20 transition-colors">MSC</div>
             <div className="flex items-center justify-center h-20 bg-white/10 rounded-lg text-xl font-bold tracking-wider hover:bg-white/20 transition-colors">CMA CGM</div>
             <div className="flex items-center justify-center h-20 bg-white/10 rounded-lg text-xl font-bold tracking-wider hover:bg-white/20 transition-colors">EVERGREEN</div>
          </div>
          <p className="mt-12 text-gray-400 text-sm">
            我们与全球主要船公司及航空公司保持长期战略合作，为您争取最优运价。
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">常见问题</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              您可能关心的问题
            </p>
          </div>
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            {[
              {
                q: '如何获取国际物流报价？',
                a: '您可以通过点击网站上的“获取报价”按钮，填写相关货物信息（如品名、重量、体积、起运港、目的港等），我们的客服人员会在1小时内为您提供详细报价。'
              },
              {
                q: '康翔幸运物流提供门到门服务吗？',
                a: '是的，我们提供全球范围内的门到门（DDU/DDP）服务。无论是在中国发货还是海外进口，我们都能安排拖车报关、海运/空运、目的港清关及派送的全流程服务。'
              },
              {
                q: '货物运输过程中如何查询状态？',
                a: '我们会为您提供专属的运单号，您可以通过我们的客服团队或即将在网站上线的查询系统，实时掌握货物的运输状态和预计到达时间。'
              },
              {
                q: '你们可以处理危险品或超大件货物吗？',
                a: '可以。我们拥有专业的危险品操作资质和特种柜（开顶柜、框架柜）运输经验，可以安全合规地处理各类特殊货物的运输需求。'
              },
            ].map((faq) => (
              <div key={faq.q} className="py-8">
                <dt className="text-lg font-semibold leading-7 text-gray-900">{faq.q}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.a}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-blue-600 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                准备好优化您的供应链了吗？
              </h2>
              <p className="mt-4 text-lg leading-8 text-blue-100">
                立即联系康翔幸运物流，体验专业、高效、省心的国际物流服务。我们的专家团队随时待命，为您解答疑问。
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <Link
                  href="/contact"
                  className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  立即咨询
                </Link>
                <Link href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-100 flex items-center">
                  了解更多关于我们 <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <Phone className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-white">电话咨询</dt>
                <dd className="mt-2 leading-7 text-blue-100">
                  +86 131-6803-9023
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <Mail className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-white">邮件联系</dt>
                <dd className="mt-2 leading-7 text-blue-100">
                  alan@consentlogistics.com 
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper icons
import { Phone, Mail } from 'lucide-react';
