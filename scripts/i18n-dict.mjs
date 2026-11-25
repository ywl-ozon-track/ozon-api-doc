// ============================================================
// Ozon API 全量业务分类与专有名词中/俄/英映射字典
// ============================================================

export const CATEGORY_MAP = {
  // --- Seller API 分类 ---
  "APIkey": {
    zh: "API密钥与权限",
    ru: "Информация по API-ключу",
    en: "API Keys & Permissions",
    icon: "🔑"
  },
  "SellerInfo": {
    zh: "卖家店铺与入驻信息",
    ru: "Информация по кабинету продавца",
    en: "Seller Account & Profile",
    icon: "🏢"
  },
  "CategoryAPI": {
    zh: "商品类目与属性字典",
    ru: "Атрибуты и характеристики Ozon",
    en: "Categories & Attributes",
    icon: "📂"
  },
  "ProductAPI": {
    zh: "商品管理与创建更新",
    ru: "Загрузка и обновление товаров",
    en: "Products & Uploads",
    icon: "📦"
  },
  "BarcodeAPI": {
    zh: "商品条形码管理",
    ru: "Штрихкоды товаров",
    en: "Product Barcodes",
    icon: "🏷️"
  },
  "Prices&StocksAPI": {
    zh: "商品价格与库存",
    ru: "Цены и остатки товаров",
    en: "Prices & Stocks",
    icon: "💰"
  },
  "Promos": {
    zh: "官方促销与营销活动",
    ru: "Акции Ozon",
    en: "Promotions & Discounts",
    icon: "🎁"
  },
  "PricingStrategyAPI": {
    zh: "智能定价策略与竞品盯价",
    ru: "Стратегии ценообразования",
    en: "Pricing Strategies & Buybox",
    icon: "🎯"
  },
  "WarehouseAPI": {
    zh: "FBS/rFBS仓库管理",
    ru: "Работа со складами FBS и rFBS",
    en: "Warehouses (FBS & rFBS)",
    icon: "🏭"
  },
  "CarriageAPI": {
    zh: "FBS货包与容器运送",
    ru: "Работа с грузоместами FBS",
    en: "Freight & Containers (FBS)",
    icon: "🚛"
  },
  "Pass": {
    zh: "货车出入通行证",
    ru: "Пропуски на склад",
    en: "Warehouse Gate Passes",
    icon: "🎫"
  },
  "BrandAPI": {
    zh: "品牌资质认证",
    ru: "Сертификаты брендов",
    en: "Brand Certifications",
    icon: "⭐"
  },
  "CertificationAPI": {
    zh: "商品质量合格证",
    ru: "Сертификаты качества",
    en: "Quality Certificates",
    icon: "📜"
  },
  "FboPostingAPI": {
    zh: "FBO官方仓订单与发货",
    ru: "Заказы FBO",
    en: "FBO Orders & Postings",
    icon: "📦"
  },
  "FbsPostingAPI": {
    zh: "FBS卖家自发货订单",
    ru: "Заказы FBS",
    en: "FBS Orders & Postings",
    icon: "🚚"
  },
  "RfbsPostingAPI": {
    zh: "rFBS跨境直邮发货订单",
    ru: "Заказы rFBS",
    en: "rFBS Orders & Postings",
    icon: "✈️"
  },
  "OrderAPI": {
    zh: "通用订单管理",
    ru: "Управление заказами",
    en: "Order Management",
    icon: "📋"
  },
  "DeliveryAPI": {
    zh: "物流服务与配送规则",
    ru: "Доставка и логистика",
    en: "Delivery & Logistics",
    icon: "🛣️"
  },
  "CancelReasonAPI": {
    zh: "订单取消原因枚举",
    ru: "Причины отмены заказов",
    en: "Cancellation Reasons",
    icon: "❌"
  },
  "ReturnsAPI": {
    zh: "买家退货与逆向售后",
    ru: "Возвраты покупателей",
    en: "Returns & Refunds",
    icon: "↩️"
  },
  "FinanceAPI": {
    zh: "财务流水与结算报表",
    ru: "Финансы и отчёты",
    en: "Finance & Settlements",
    icon: "📊"
  },
  "AnalyticsAPI": {
    zh: "店铺经营数据分析",
    ru: "Аналитика продаж",
    en: "Analytics & Data Reports",
    icon: "📈"
  },
  "RatingAPI": {
    zh: "卖家评级与违规处罚",
    ru: "Рейтинги продавца",
    en: "Seller Ratings & Health",
    icon: "🏆"
  },
  "ReviewAPI": {
    zh: "商品买家评价与问答",
    ru: "Отзывы и вопросы покупателей",
    en: "Reviews & Questions",
    icon: "💬"
  },
  "ChatAPI": {
    zh: "买家客服消息会话",
    ru: "Чаты с покупателями",
    en: "Customer Support Chats",
    icon: "🗨️"
  },
  "NotificationAPI": {
    zh: "Webhook事件订阅通知",
    ru: "Webhook-уведомления",
    en: "Webhooks & Notifications",
    icon: "🔔"
  },
  "SupplyOrderFBO": {
    zh: "FBO官方仓备货送货单",
    ru: "Заявки на поставку FBO",
    en: "FBO Supply Orders",
    icon: "📥"
  },
  "DraftPickupFBP": {
    zh: "FBP揽收单草稿",
    ru: "Черновики FBP pick-up",
    en: "FBP Pick-up Drafts",
    icon: "📝"
  },
  "DeliveryFBPDraft": {
    zh: "FBP备货草稿",
    ru: "Черновики FBP",
    en: "FBP Drafts",
    icon: "📄"
  },
  "OrderDropOffFBP": {
    zh: "FBP自送点备货单",
    ru: "Поставки FBP drop-off",
    en: "FBP Drop-off Supplies",
    icon: "🏬"
  },
  "OrderPickupFBP": {
    zh: "FBP揽收备货单",
    ru: "Поставки FBP pick-up",
    en: "FBP Pick-up Supplies",
    icon: "📦"
  },
  "SupplyOrderActFBP": {
    zh: "FBP交接验收单",
    ru: "Акты приёмки FBP",
    en: "FBP Acceptance Acts",
    icon: "📑"
  },
  "Premium": {
    zh: "Premium买家高级客服",
    ru: "Premium-функционал",
    en: "Premium Features & Chat",
    icon: "💎"
  },

  // --- Performance API 分类 ---
  "Campaign": {
    zh: "广告推广计划与对象",
    ru: "Кампании и рекламируемые объекты",
    en: "Campaigns & Objects",
    icon: "📢"
  },
  "Statistics": {
    zh: "广告效果与转化统计",
    ru: "Статистика рекламы",
    en: "Advertising Statistics",
    icon: "📊"
  },
  "Ad": {
    zh: "CPC按点击付费推广",
    ru: "Оплата за клик (CPC)",
    en: "Cost-Per-Click (CPC) Ads",
    icon: "🖱️"
  },
  "Product": {
    zh: "CPC推广商品出价管理",
    ru: "Товары в Оплате за клик",
    en: "CPC Promoted Products",
    icon: "🛒"
  },
  "Search-Promo": {
    zh: "按成效订单付费广告 (CPO)",
    ru: "Оплата за заказ",
    en: "Search Promotion (CPO)",
    icon: "🔍"
  },
  "Vendor": {
    zh: "外部流量与品牌方分析",
    ru: "Аналитика внешнего трафика",
    en: "External Traffic Analytics",
    icon: "🌐"
  }
};

// 俄语高频动词/短语翻译规则表
const RU_PHRASE_RULES = [
  [/^Получить список ролей и методов по API-ключу/i, "获取当前 API 密钥对应的权限角色与支持方法列表"],
  [/^Информация о кабинете продавца/i, "获取卖家个人中心与公司入驻档案信息"],
  [/^Информация о подключении Ozon Доставки/i, "查询 Ozon 官方物流（Ozon Delivery）开通与签约状态"],
  [/^Дерево категорий и типов товаров/i, "获取 Ozon 全量商品类目与类型树形结构"],
  [/^Список характеристик категории/i, "获取指定类目下商品必填与选填属性规格列表"],
  [/^Создать или обновить товар/i, "创建新商品或批量更新已有商品信息"],
  [/^Узнать статус добавления или обновления товара/i, "查询商品异步创建或批量修改任务的处理状态"],
  [/^Обновить количество товаров на складах/i, "批量更新指定仓库的商品可用库存数量"],
  [/^Информация о количестве товаров/i, "查询商品在各仓库的当前库存与在途明细"],
  [/^Список акций/i, "获取 Ozon 平台当前生效或即将开始的官方促销活动列表"],
  [/^Список доступных для акции товаров/i, "查询可报名参加指定促销活动的候选商品列表"],
  [/^Список конкурентов/i, "获取用于智能盯价对比的竞品店铺与竞争对手列表"],
  [/^Список стратегий/i, "获取当前配置的商品自动定价与竞价策略列表"],
  [/^Создать грузоместо/i, "创建 FBS 出货集装箱/托盘/货包（Carriage Container）"],
  [/^Наполнить грузоместо отправлениями/i, "将已配货订单包裹添加至指定 FBS 货包容器中"],
  [/^Сгенерировать акт приёмки/i, "生成仓库入库交接验收单（Act of Acceptance）"],
  [/^Получить статус генерации акта приёмки/i, "查询交接验收单生成进度与下载地址"],
  [/^Список кампаний/i, "获取广告推广营销活动列表"],
  [/^Статистика по кампании/i, "查询指定广告营销计划的曝光、点击与花费报表"],
  [/^Рассчитать минимальный бюджет кампании/i, "智能测算广告推广计划所需的最低日预算与出价推荐"],
  [/^Создать кампанию с оплатой за клики/i, "创建 CPC 按点击计费的商品推广计划"],
  [/^Добавить товары в кампанию/i, "向指定广告推广计划中添加参与推广的商品"],
  [/^Обновить ставки товаров/i, "批量修改广告计划中各商品的竞价出价（Bids）"],
  [/^Список товаров в продвижении в оплате за заказ/i, "获取按成交付费（CPO）广告中正在推广的商品清单"],
  [/^Рекомендованные ставки для товаров/i, "获取系统基于实时大盘竞价推荐的优质出价参考"],
  [/^Отчёт с аналитикой внешнего трафика/i, "申请导出外部渠道导流投放分析数据报告"],

  // 通用高频词模式匹配
  [/^Список\s+(.+)/i, (_, item) => `获取${translateNoun(item)}列表`],
  [/^Получить\s+(.+)/i, (_, item) => `获取${translateNoun(item)}`],
  [/^Создать\s+(.+)/i, (_, item) => `创建${translateNoun(item)}`],
  [/^Обновить\s+(.+)/i, (_, item) => `更新${translateNoun(item)}`],
  [/^Удалить\s+(.+)/i, (_, item) => `删除${translateNoun(item)}`],
  [/^Отменить\s+(.+)/i, (_, item) => `取消${translateNoun(item)}`],
  [/^Проверить\s+(.+)/i, (_, item) => `检查与验证${translateNoun(item)}`],
  [/^Информация\s+о\s+(.+)/i, (_, item) => `查询${translateNoun(item)}详情`],
  [/^Информация\s+по\s+(.+)/i, (_, item) => `查询${translateNoun(item)}`]
];

const NOUN_MAP = {
  "заказов": "订单",
  "заказе": "订单信息",
  "заказа": "订单",
  "отправлений": "发货包裹",
  "отправления": "发货包裹",
  "товаров": "商品",
  "товара": "商品",
  "товаре": "商品",
  "складов": "仓库",
  "складах": "仓库",
  "складе": "仓库",
  "ценах": "价格",
  "цен": "商品价格",
  "остатков": "库存剩余",
  "остатках": "库存",
  "акциях": "促销活动",
  "акций": "促销活动",
  "пропусков": "出入通行证",
  "пропуска": "出入通行证",
  "сертификатов": "认证证书",
  "брендов": "品牌",
  "категорий": "商品类目",
  "характеристик": "属性规格",
  "штрихкодов": "条形码",
  "клиентов": "客户信息",
  "чатов": "客服聊天",
  "сообщений": "消息",
  "возвратов": "退货订单",
  "выплат": "结款账单",
  "отчётов": "数据报表",
  "статистики": "统计数据"
};

function translateNoun(nounPhrase) {
  let res = nounPhrase.trim();
  for (const [ru, zh] of Object.entries(NOUN_MAP)) {
    if (res.toLowerCase().includes(ru)) {
      return zh;
    }
  }
  return res;
}

export function translateSummary(summary, lang = 'zh') {
  if (!summary) return lang === 'zh' ? '无接口描述' : 'No description provided';
  if (lang === 'ru') return summary;
  if (lang === 'en') {
    // 基础英化或保留原意
    return summary;
  }

  // 中文翻译规则匹配
  for (const [rule, replacer] of RU_PHRASE_RULES) {
    if (rule.test(summary)) {
      if (typeof replacer === 'function') {
        return summary.replace(rule, replacer);
      }
      return replacer;
    }
  }

  return summary;
}
