import { Ship, Plane, Truck, Warehouse, PackageCheck, FileCheck, ShoppingCart, Container } from 'lucide-react';

export const services = [
  {
    id: 'sea',
    title: '海运专线 (Sea Freight Line)',
    description: '提供美加、欧洲、东南亚等全球主要港口的海运专线服务。整箱拼箱任选，船期稳定，舱位充足，价格极具竞争力。',
    features: ['美森快船', '以星快船', '普船专线', '整柜/散货拼箱'],
    icon: Ship,
    content: `
      <h2>海运专线服务详情</h2>
      <p>我们的海运专线服务致力于为客户提供高效、经济的全球海运解决方案。无论您是大型企业还是中小卖家，我们都能为您提供定制化的海运服务。</p>
      <h3>服务优势</h3>
      <ul>
        <li><strong>广泛的网络覆盖</strong>：覆盖全球主要港口，包括美西、美东、欧洲基本港、东南亚各港口等。</li>
        <li><strong>灵活的运输方式</strong>：提供整箱(FCL)和拼箱(LCL)服务，满足不同货量的运输需求。</li>
        <li><strong>稳定的船期</strong>：与MAERSK, COSCO, MSC, CMA CGM, EVERGREEN等知名船公司深度合作，确保舱位充足。</li>
        <li><strong>全程可视化</strong>：提供全程货物追踪服务，让您随时掌握货物动态。</li>
      </ul>
      <h3>主要航线</h3>
      <ul>
        <li><strong>美线快船</strong>：美森(Matson)、以星(ZIM)等快船服务，时效媲美空运，价格更优。</li>
        <li><strong>欧线直达</strong>：直达汉堡、鹿特丹、安特卫普等欧洲基本港，转运全欧。</li>
        <li><strong>东南亚专线</strong>：覆盖越南、泰国、马来西亚、新加坡等国家，天天有船。</li>
      </ul>
    `
  },
  {
    id: 'air',
    title: '空运专线 (Air Freight Line)',
    description: '针对高时效货物推出的空运专线服务，直飞全球主要机场。时效快，渠道稳，可接各类普货及敏货。',
    features: ['欧美空派', '东南亚专线', '包机服务', '24小时极速出货'],
    icon: Plane,
    content: `
      <h2>空运专线服务详情</h2>
      <p>当时间成为关键因素时，我们的空运专线是您的最佳选择。我们整合全球优质航空资源，为您提供快速、安全的空运服务。</p>
      <h3>服务特色</h3>
      <ul>
        <li><strong>极速时效</strong>：欧美主要城市3-5个工作日送达，东南亚次日达。</li>
        <li><strong>多渠道选择</strong>：提供直飞、转飞等多种方案，平衡时效与成本。</li>
        <li><strong>特殊货物处理</strong>：具备危险品、超大件、鲜活货物等特殊货物的操作资质和经验。</li>
        <li><strong>报关清关</strong>：专业的报关团队，确保货物快速通关。</li>
      </ul>
    `
  },
  {
    id: 'express',
    title: '快递专线 (Express Line)',
    description: '整合DHL、UPS、FedEx等国际快递资源，为您提供门到门的高效快递服务。全程可追踪，安全有保障。',
    features: ['全球特快', '经济快递', '小货专线', '门到门签收'],
    icon: Truck,
    content: `
      <h2>快递专线服务详情</h2>
      <p>我们是DHL, UPS, FedEx, TNT等国际快递巨头的一级代理，为您提供折扣优惠的官方服务体验。</p>
      <h3>服务亮点</h3>
      <ul>
        <li><strong>门到门服务</strong>：上门取件，送货上门，全程无忧。</li>
        <li><strong>价格优势</strong>：享受官方公布价的超低折扣，降低您的物流成本。</li>
        <li><strong>全球通达</strong>：覆盖全球220多个国家和地区。</li>
        <li><strong>小货首选</strong>：适合样品、文件、小包裹的快速寄递。</li>
      </ul>
    `
  },
  {
    id: 'ddp',
    title: '双清包税 (DDP Service)',
    description: '一站式双清包税服务，为您解决繁琐的清关和税务问题。一口价全包，无隐形消费，让您省心省力。',
    features: ['欧美双清', '东南亚双清', '关税预付', '清关能力强'],
    icon: FileCheck,
    content: `
      <h2>双清包税服务详情</h2>
      <p>双清包税（DDP）是我们的一项特色服务，旨在为客户解决国际贸易中最头疼的清关和税务问题。</p>
      <h3>服务内容</h3>
      <ul>
        <li><strong>出口报关</strong>：负责国内出口报关的所有手续。</li>
        <li><strong>目的港清关</strong>：负责目的国的进口清关，处理各类查验。</li>
        <li><strong>代缴关税</strong>：代缴目的国进口关税和增值税，一口价全包。</li>
        <li><strong>派送到门</strong>：清关完成后，安排卡车或快递派送到指定地址。</li>
      </ul>
    `
  },
  {
    id: 'ecommerce',
    title: '电商小包 (E-commerce Packet)',
    description: '专为跨境电商卖家打造的小包专线服务。挂号/平邮可选，妥投率高，适合轻小件商品发货。',
    features: ['全程追踪', '时效稳定', '价格低廉', '覆盖全球'],
    icon: ShoppingCart,
    content: `
      <h2>电商小包服务详情</h2>
      <p>针对eBay, Wish, AliExpress, Amazon等平台卖家的轻小件商品，我们推出了高性价比的电商小包服务。</p>
      <h3>产品优势</h3>
      <ul>
        <li><strong>覆盖面广</strong>：通达全球大部分国家和地区。</li>
        <li><strong>计费灵活</strong>：按克计费，无首重，大大降低物流成本。</li>
        <li><strong>妥投率高</strong>：提供挂号服务，全程可追踪，妥投率高达99%。</li>
        <li><strong>时效稳定</strong>：与各国邮政深度合作，优先处理，优先派送。</li>
      </ul>
    `
  },
  {
    id: 'warehouse',
    title: '海外仓一件代发 (Dropshipping)',
    description: '在美国、欧洲等地自建或合作海外仓，提供仓储、分拣、包装、一件代发及退换货处理等全方位服务。',
    features: ['本土发货', '节省运费', '提升体验', '退货无忧'],
    icon: Warehouse,
    content: `
      <h2>海外仓一件代发详情</h2>
      <p>海外仓是跨境电商发展的必然趋势。利用我们的海外仓资源，您可以实现本土化运营，提升客户体验。</p>
      <h3>核心功能</h3>
      <ul>
        <li><strong>头程运输</strong>：负责将货物从国内运输至海外仓库。</li>
        <li><strong>仓储管理</strong>：提供安全、干燥的仓储环境，先进的WMS系统管理库存。</li>
        <li><strong>一件代发</strong>：接收订单指令，快速分拣、打包、发货。</li>
        <li><strong>退换货处理</strong>：接收买家退货，进行质检、重新上架或销毁。</li>
      </ul>
    `
  },
  {
    id: 'clearance',
    title: '清提派 (Clearance & Delivery)',
    description: '提供目的港清关、码头提柜及尾程派送服务。专业的清关团队和卡车车队，确保货物快速送达。',
    features: ['快速清关', '码头提货', '卡车派送', '亚马逊FBA送仓'],
    icon: PackageCheck,
    content: `
      <h2>清提派服务详情</h2>
      <p>如果您有自己的头程物流渠道，只需我们提供目的港服务，我们同样乐意效劳。</p>
      <h3>服务流程</h3>
      <ul>
        <li><strong>清关</strong>：预清关模式，货物到港前即完成清关申报。</li>
        <li><strong>提柜</strong>：拥有自有卡车车队，第一时间从码头提柜。</li>
        <li><strong>拆柜/分拣</strong>：在监管仓或普通仓进行拆柜、分拣作业。</li>
        <li><strong>派送</strong>：根据指令派送至亚马逊仓库、海外仓或私人地址。</li>
      </ul>
    `
  },
  {
    id: 'fba',
    title: 'FBA头程 (FBA First Leg)',
    description: '提供从国内发货至亚马逊FBA仓库的头程物流服务。海运、空运、铁运多种渠道可选，全程可视化追踪。',
    features: ['FBA海运', 'FBA空运', '私人地址派送', '贴标换标'],
    icon: Container,
    content: `
      <h2>FBA头程服务详情</h2>
      <p>作为亚马逊SPN服务商，我们深知FBA卖家的痛点。我们提供专业的FBA头程物流，助您不仅货通全球，更要货通亚马逊。</p>
      <h3>服务保障</h3>
      <ul>
        <li><strong>预约入仓</strong>：熟悉亚马逊各仓库的入仓规则，无需担心拒收。</li>
        <li><strong>时效承诺</strong>：多种时效渠道可选，满足补货需求。</li>
        <li><strong>增值服务</strong>：提供贴标、换标、换箱等增值服务。</li>
        <li><strong>赔偿机制</strong>：完善的丢失、破损赔偿机制，保障货物安全。</li>
      </ul>
    `
  },
];