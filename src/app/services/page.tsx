import { services } from '@/lib/constants';

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">我们的服务</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            康翔幸运物流提供全方位的物流服务，满足您多样化的业务需求。
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {services.map((service) => (
              <a key={service.id} href={`/services/${service.id}`} className="group block">
                <div className="flex flex-col h-full bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:bg-blue-50 group-hover:scale-[1.02]">
                  <div className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <service.icon className="h-6 w-6 flex-none text-blue-600" aria-hidden="true" />
                    {service.title}
                  </div>
                  <div className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <ul className="mt-8 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3 text-sm text-gray-500">
                          <span className="h-1.5 w-1.5 mt-2.5 rounded-full bg-blue-600 flex-none" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
