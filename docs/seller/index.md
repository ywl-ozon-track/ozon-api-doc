---
title: "Ozon 卖家核心 API (Seller API)"
---

# Ozon 卖家核心 API (Seller API)

全面涵盖 Ozon 跨境开店所必需的商品刊登、价格与库存同步、订单履约发货、类目属性与财务结算等 480+ 个端点。

## 业务模块导航

| 模块分类 | 包含端点数 | 快速直达 |
| :--- | :--- | :--- |
| **🔑 API密钥与权限** | `1` 个接口 | [进入模块](/seller/apikey/post-v1-roles) |
| **🏢 卖家店铺与入驻信息** | `2` 个接口 | [进入模块](/seller/sellerinfo/post-v1-seller-info) |
| **📂 商品类目与属性字典** | `5` 个接口 | [进入模块](/seller/categoryapi/post-v1-description-category-tree) |
| **📦 商品管理与创建更新** | `21` 个接口 | [进入模块](/seller/productapi/post-v3-product-import) |
| **🏷️ 商品条形码管理** | `3` 个接口 | [进入模块](/seller/barcodeapi/post-v1-barcode-add) |
| **💰 商品价格与库存** | `11` 个接口 | [进入模块](/seller/pricesstocksapi/post-v2-products-stocks) |
| **🎁 官方促销与营销活动** | `16` 个接口 | [进入模块](/seller/promos/get-v1-actions) |
| **🎯 智能定价策略与竞品盯价** | `12` 个接口 | [进入模块](/seller/pricingstrategyapi/post-v1-pricing-strategy-competitors-list) |
| **🎫 货车出入通行证** | `7` 个接口 | [进入模块](/seller/pass/post-v1-pass-list) |
| **⭐ 品牌资质认证** | `1` 个接口 | [进入模块](/seller/brandapi/post-v1-brand-company-certification-list) |
| **📜 商品质量合格证** | `18` 个接口 | [进入模块](/seller/certificationapi/get-v1-product-certificate-accordance-types) |
| **🏭 FBS/rFBS仓库管理** | `10` 个接口 | [进入模块](/seller/warehouseapi/post-v1-warehouse-list) |
| **📌 FBOWarehouse** | `1` 个接口 | [进入模块](/seller/fbowarehouse/post-v1-warehouse-ozon-list) |
| **📌 PolygonAPI** | `7` 个接口 | [进入模块](/seller/polygonapi/post-v1-polygon-create) |
| **📌 FBO** | `16` 个接口 | [进入模块](/seller/fbo/post-v2-posting-fbo-list) |
| **📌 FboSupplyRequest** | `25` 个接口 | [进入模块](/seller/fbosupplyrequest/post-v1-cluster-list) |
| **📌 FBS&rFBSMarks** | `7` 个接口 | [进入模块](/seller/fbsrfbsmarks/post-v4-posting-fbs-ship) |
| **📌 DeliveryFBS** | `29` 个接口 | [进入模块](/seller/deliveryfbs/post-v1-carriage-create) |
| **📌 DeliveryrFBS** | `7` 个接口 | [进入模块](/seller/deliveryrfbs/post-v2-fbs-posting-tracking-number-set) |
| **📌 FBS** | `25` 个接口 | [进入模块](/seller/fbs/post-v3-posting-fbs-unfulfilled-list) |
| **📌 RFBSReturnsAPI** | `3` 个接口 | [进入模块](/seller/rfbsreturnsapi/post-v2-returns-rfbs-list) |
| **📌 CancellationAPI** | `3` 个接口 | [进入模块](/seller/cancellationapi/post-v2-conditional-cancellation-list) |
| **↩️ 买家退货与逆向售后** | `4` 个接口 | [进入模块](/seller/returnsapi/post-v1-returns-list) |
| **📌 ReturnAPI** | `8` 个接口 | [进入模块](/seller/returnapi/post-v1-returns-company-fbs-info) |
| **🗨️ 买家客服消息会话** | `3` 个接口 | [进入模块](/seller/chatapi/post-v1-chat-send-file) |
| **📌 SupplierAPI** | `4` 个接口 | [进入模块](/seller/supplierapi/post-v2-invoice-create-or-update) |
| **📌 ReportAPI** | `11` 个接口 | [进入模块](/seller/reportapi/post-v1-report-info) |
| **📈 店铺经营数据分析** | `3` 个接口 | [进入模块](/seller/analyticsapi/post-v2-analytics-stock-on-warehouses) |
| **📊 财务流水与结算报表** | `10` 个接口 | [进入模块](/seller/financeapi/post-v2-finance-realization) |
| **📌 Receipt** | `3` 个接口 | [进入模块](/seller/receipt/post-v1-receipts-get) |
| **📌 SellerRating** | `4` 个接口 | [进入模块](/seller/sellerrating/post-v1-rating-summary) |
| **📌 Digital** | `3` 个接口 | [进入模块](/seller/digital/post-v1-posting-digital-codes-upload) |
| **💬 商品买家评价与问答** | `12` 个接口 | [进入模块](/seller/reviewapi/post-v1-review-comment-create) |
| **📌 Questions&Answers** | `8` 个接口 | [进入模块](/seller/questionsanswers/post-v1-question-answer-create) |
| **📌 BetaMethod** | `24` 个接口 | [进入模块](/seller/betamethod/post-v1-analytics-manage-stocks) |
| **📌 SupplyOrderAPI** | `4` 个接口 | [进入模块](/seller/supplyorderapi/post-v1-supply-order-act-summary-get) |
| **📌 FBSWarehouseSetup** | `17` 个接口 | [进入模块](/seller/fbswarehousesetup/post-v1-warehouse-fbs-create-drop-off-list) |
| **📌 rFBSWarehouseSetup** | `7` 个接口 | [进入模块](/seller/rfbswarehousesetup/post-v1-warehouse-erfbs-aggregator-create) |
| **📌 SellerActions** | `18` 个接口 | [进入模块](/seller/selleractions/post-v1-seller-actions-create-discount) |
| **📌 PromosBeta** | `4` 个接口 | [进入模块](/seller/promosbeta/post-v1-actions-auto-add-products-list) |
| **📌 Notification** | `7` 个接口 | [进入模块](/seller/notification/post-v1-notification-set) |
| **📌 FBOTransport** | `14` 个接口 | [进入模块](/seller/fbotransport/post-v2-cargoes-get) |
| **📌 DraftDirectFBP** | `10` 个接口 | [进入模块](/seller/draftdirectfbp/post-v1-fbp-draft-direct-seller-dlv-create) |
| **📌 DraftDropOffFBP** | `8` 个接口 | [进入模块](/seller/draftdropofffbp/post-v1-fbp-draft-drop-off-create) |
| **📌 OrderDirectFBP** | `5` 个接口 | [进入模块](/seller/orderdirectfbp/post-v1-fbp-order-direct-cancel) |
| **📌 DeliveryFBP** | `11` 个接口 | [进入模块](/seller/deliveryfbp/post-v1-fbp-act-from-create) |
| **📝 FBP揽收单草稿** | `5` 个接口 | [进入模块](/seller/draftpickupfbp/post-v1-fbp-draft-pick-up-create) |
| **📄 FBP备货草稿** | `3` 个接口 | [进入模块](/seller/deliveryfbpdraft/post-v1-fbp-warehouse-list) |
| **🏬 FBP自送点备货单** | `3` 个接口 | [进入模块](/seller/orderdropofffbp/post-v1-fbp-order-drop-off-cancel) |
| **📦 FBP揽收备货单** | `2` 个接口 | [进入模块](/seller/orderpickupfbp/post-v1-fbp-order-pick-up-cancel) |
| **🚛 FBS货包与容器运送** | `13` 个接口 | [进入模块](/seller/carriageapi/post-v1-carriage-container-create) |
| **💎 Premium买家高级客服** | `10` 个接口 | [进入模块](/seller/premium/post-v1-chat-send-message) |
| **❌ 订单取消原因枚举** | `3` 个接口 | [进入模块](/seller/cancelreasonapi/post-v1-cancel-reason-list) |
| **🛣️ 物流服务与配送规则** | `5` 个接口 | [进入模块](/seller/deliveryapi/post-v1-delivery-check) |
| **📋 通用订单管理** | `4` 个接口 | [进入模块](/seller/orderapi/post-v1-order-cancel) |
| **📦 FBO官方仓订单与发货** | `3` 个接口 | [进入模块](/seller/fbopostingapi/post-v1-posting-cancel) |
