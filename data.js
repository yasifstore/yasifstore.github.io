const rawKK = [
    ["New! Purple Cloud Series", "Taro Milk", 19000, 26000, "https://huawei-food-cms.grab.com/compressed_webp/items/IDITE20260920180754023277/photo/647e9992b61141ebb43de133bc56883a_1789927674874643305.webp"],
    ["New! Purple Cloud Series", "Taro Cloud Milk Tea", 19000, 26000, "https://huawei-food-cms.grab.com/compressed_webp/items/IDITE20260920180754031890/photo/7184937c9b8f4259bddc0be50cbef1c3_1789927674970992687.webp"],
    ["New! Purple Cloud Series", "Taro Cloud Latte", 22000, 29000, "https://huawei-food-cms.grab.com/compressed_webp/items/IDITE20260920180755017639/photo/dcc3312a11f344a58bc613f118aba0c1_1789927675058487238.webp"],
    ["New! Purple Cloud Series", "Taro Cloud Matcha", 22000, 29000, "https://huawei-food-cms.grab.com/compressed_webp/items/IDITE20260920180755023032/photo/bc6769f94a174b5682e3d486ded69ec5_1789927675142991260.webp"],
    ["New! Purple Cloud Series", "Triple Cheese Bagel", 18000, null, "https://huawei-food-cms.grab.com/compressed_webp/items/IDITE20260920180755041715/photo/42c9580a14394075a2151c5b6de3bb87_1789927675333325696.webp"],
    ["New! Purple Cloud Series", "Beef & Cheese Jalapeño Bagel", 20000, null, "https://huawei-food-cms.grab.com/compressed_webp/items/IDITE20260920180755039489/photo/92f0475155424dab9fd828c576cbf654_1789927675231176738.webp"],
    ["New! Purple Cloud Series", "Double Choco Bagel", 18000, null, "https://huawei-food-cms.grab.com/compressed_webp/items/IDITE20260920180755051126/photo/0a296ff2b5b64ba9ab0295a2e162d6bd_1789927675406069828.webp"],
    ["New! Peanut Butter Panini Series", "Strawberry Peanut Butter Panini", 19000, null, "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/488620eb-5dd3-4877-9d03-f4652661bddf_cf1f5223-2ae2-4ca9-9532-a7de6a627976.png?auto=format"],
    ["New! Peanut Butter Panini Series", "Choco Peanut Butter Panini", 19000, null, "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/7ae04064-cd68-4ba3-a91e-6953e36fdd07_99da46d8-6aab-4ccf-955a-633e6b0f78ce.png?auto=format"],
    ["New! Peanut Butter Panini Series", "Classic Peanut Butter Panini", 17000, null, "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/6fb31336-1e1e-4c2a-ac05-9ffa508a4a4f_f792539b-e273-48cf-8cc7-899a03fa1217.png?auto=format"],
    ["A SIP OF SUNSHINE Series", "Korean Banana Latte", 23000, 31000, "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/7d187951-6b63-4211-bf39-80061ef4d43f_05de3344-307d-41b5-8408-e35125781e95.png?auto=format"],
    ["A SIP OF SUNSHINE Series", "Banana Americano", 19000, 27000, "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/a82e993d-0ebb-48d7-ab76-06fc85e2a1b1_4b4df068-dbe8-4943-b3e0-3ccd970eb69a.png?auto=format"],
    ["A SIP OF SUNSHINE Series", "Banana Choco", 24000, 32000, "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/ecd706f5-cd63-4082-9121-7ccb9a9c34d3_2b9756b6-19d3-4811-aabe-114fbb5d2fe2.png?auto=format"],
    ["A SIP OF SUNSHINE Series", "Bananachoco Soft Baked Cookie", 18000, null, "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/7d39bb8b-19ec-4d8c-aa6c-e7942b916b74_e71c8ac9-3078-4a9c-aaf2-e741a3da6a29.png?auto=format"],
    ["A SIP OF SUNSHINE Series", "Oatmeal Raisin Soft Baked Cookie", 18000, null, "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/0919f58b-6e46-4091-917e-850f39461d4e_b92639bf-dd7d-4e4a-a1fd-46f4d940075a.png?auto=format"],
    ["A SIP OF SUNSHINE Series", "Sweet Honey Soft Baked Cookie", 17000, null, "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/b11d7349-c66c-491c-85b6-145593d20427_10a2ce53-442a-4408-ad47-bd6fd5df22c7.png?auto=format"],
    ["Coffee","Americano",17000,22000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193130067701/detail/a67cc828_bfab17b25c46ffa.webp"],
    ["Coffee","Avocado Coffee",28000,38000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250703074725012544/detail/4ceae86b_c9778ae7145062a.webp"],
    ["Coffee","Butterscotch Aren Latte",20000,27000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193127015676/detail/ad0dbfe5_cc6de456af98b49.webp"],
    ["Coffee","Butterscotch Kenangan Frappe", 30000, 40000, "https://food-cms.grab.com/compressed_webp/items/IDITE20250701082015016768/detail/63a3f71e_c158a0c20395877.webp"],
    ["Coffee","Butterscotch Sea Salt Latte",25000,33000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193129017472/detail/a3ebb563_895267a518f2978.webp"],
    ["Coffee","Cafe Malt Latte",23000,30000,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/20737db3-3d79-409d-be0e-4e2d25b7f2d3_31e7f50a-1561-9ba1-6a85-b77979cf8b66.png?auto=format"],
    ["Coffee","Cappuccino",22000,29000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193131040855/detail/8e5c4d82_c25681b0cfec532.webp"],
    ["Coffee","Caramel Latte",26000,34000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193126060859/detail/e9ddffc4_ecba1398e652979.webp"],
    ["Coffee","Caramel Macchiato",28000,38000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250812051421027652/detail/ae93796d_404b2968cc0722e.webp"],
    ["Coffee","Creamy Aren Latte",22000,31000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250701081956023314/detail/55494d68_fc905469e7d1ef2.webp"],
    ["Coffee","Dua Shot Iced Shaken",28000,38000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193128078742/detail/ee46dfe5_590f16c24cee913.webp"],
    ["Coffee","Dua Shot OG Aren",25000,32000,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/30dca2fe-f397-4f16-b7a9-1b2001d192b9_6bd9ab79-c96e-4a49-853a-15ce6eb1d08c.png?auto=format"],
    ["Coffee","Hazelnut Latte",26000,34000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193125023318/detail/f2220ce9_a2140e6cbaf588b.webp"],
    ["Coffee","Kopi Kenangan Mantan",19000,25000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250812051422019174/detail/5b10a373_2aec27ffffdc9e8.webp"],
    ["Coffee","Kopi Kenangan Mantan Frappe",27000,34000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250701082014010059/detail/9c56be81_1e18627861ae747.webp"],
    ["Coffee","Kopi Susu Black Aren",21000,30000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193125060247/detail/0ff58d8c_63797561bee87b9.webp"],
    ["Coffee","Latte",22000,29000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193132012856/detail/4a8f13ae_00ff4874930fcd7.webp"],
    ["Coffee","Matcha Espresso",26000,35000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193127069282/detail/c7fbb5f5_127f022392f087e.webp"],
    ["Coffee","Mocha Latte",28000,null,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193128023892/detail/acd94dd5_8e866cccfaca696.webp"],
    ["Coffee","OG Aren Speculoos Latte",21000,28000,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/2dc61af2-87e4-4c58-9728-75d863dd2fd8_e3051f91-0f13-48df-ba37-6bf89299b3b6.png?auto=format"],
    ["Coffee","Oatside Kopi Kenangan Mantan",22000,28000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193109043175/detail/796b24e6_616d14a5728d1ff.webp"],
    ["Coffee","Oatside Latte",25000,32000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193109060320/detail/ced81934_3fd8d7f1e3af821.webp"],
    ["Coffee","Pistachio Aren Latte",19000,26000,"https://food-cms.grab.com/compressed_webp/items/IDITE20251123181919056205/detail/924b3315_c4b1b6cce555736.webp"],
    ["Coffee","Spanish Latte",19000,27000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250812051421018408/detail/4983790e_326fedae12ba368.webp"],
    ["Coffee","Vanilla Latte",26000,34000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193130027096/detail/e6f61022_eda82d03ffa2627.webp"],
    ["Non-Coffee","Avocado Caramel",28000,38000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193147016654/detail/559de687_d0ce7a477821c37.webp"],
    ["Non-Coffee","Avocado Milk",24000,34000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193148086543/detail/fd59074d_5395c2fe71dbaa7.webp"],
    ["Non-Coffee","Babyccino",19000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/a634c949-7157-43db-8a06-b598fac741c0_1a9cbab0-cfe8-4442-a56b-5b276a9c889a_Babyccino.jpeg?auto=format"],
    ["Non-Coffee","Butterscotch Sea Salt Crumble",22000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/c035cfad-b164-4982-86e1-cdc7a33595d5_7be23137-13e7-5f63-ccc8-cad9d4e77421.png?auto=format"],
    ["Non-Coffee","Caramel Dutch Choco",28000,38000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193147027174/detail/4f5681cb_210431f9a61ba2a.webp"],
    ["Non-Coffee","Dutch Choco Kenangan Frappe",29000,36000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193136043965/detail/ea2dbc86_126e1df53b45103.webp"],
    ["Non-Coffee","Dutch Chocolate",26000,36000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193147045449/detail/0df98805_89002bfb5c998ee.webp"],
    ["Non-Coffee","Fresh Lemonade",null,17000,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/c5667775-7849-43b6-979c-10c5e0285cda_76a8abe7-b326-5a87-76bb-f5c2fed5ea31.png?auto=format"],
    ["Non-Coffee","Hazelnut Choco Milk Tea",22000,29000,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/c5d54390-97e7-4e2a-af34-a6e23277e1eb_ad97caaf-7a0d-7d50-d961-65e06d62f732.png?auto=format"],
    ["Non-Coffee","Hazelnut Dutch Choco",28000,38000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193150086778/detail/eeb3ea66_480ec21d725419f.webp"],
    ["Non-Coffee","Kenangan Milk Tea",21000,27000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193148039827/detail/913c22df_7a5d83a501603ae.webp"],
    ["Non-Coffee","Lemon Black Tea",17000,24000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193146074669/detail/d00f8fc0_559cbb576177a27.webp"],
    ["Non-Coffee","Matcha Kenangan Frappe",32000,42000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250701094127019837/detail/0f153e11_0676d2b60eddce1.webp"],
    ["Non-Coffee","Matcha Latte",25000,32000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193148076389/detail/73f28968_165e37fca0da957.webp"],
    ["Non-Coffee","Milk Oreo Crumble",26000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/a15fd431-d33f-45d2-9524-6eb6d914489f_31770136-f420-e0eb-6c9e-080daa295cd6.png?auto=format"],
    ["Non-Coffee","Milo Dinosaurus",23000,30000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193150052617/detail/a01a6a96_8bdd0e248c5d36d.webp"],
    ["Non-Coffee","OG Aren Milky Speculoos",23000,30000,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/fbf34f86-d20e-4aa7-bf89-c4eaebb954bf_09105e95-57dc-479d-8206-fd1d005a3ca8.png?auto=format"],
    ["Non-Coffee","OG Thai Tea",19000,23000,"https://food-cms.grab.com/compressed_webp/items/IDITE20260504023427013103/detail/a874415f_2101e81a7c0f32a.webp"],
    ["Non-Coffee","Oatside Matcha Latte",25000,32000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193109021326/detail/281a5a15_dbfc6e9ff734f3c.webp"],
    ["Non-Coffee","Oreo Shake",26000,34000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193149036011/detail/f91d4201_feb994df04c4453.webp"],
    ["Non-Coffee","Raspberry Hibiscus",20000,27000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193149052378/detail/7ba226ae_3d05dece9480be2.webp"],
    ["Non-Coffee","Susu Grass Jelly",24000,32000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193149060970/detail/0c699bd8_168caaa10f5f95c.webp"],
    ["Non-Coffee","Thai Tea Loaded",null,27000,"https://food-cms.grab.com/compressed_webp/items/IDITE20260504023427054203/detail/5f77bd44_731b4ee712854b3.webp"],
    ["Non-Coffee","Vanilla Kenangan Frappe",25000,32000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250701082014035176/detail/f4c784b7_8915c14d7b17582.webp"],
    ["Makanan","Adam Ayam Toast",19000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/5401f48a-01c5-4981-88aa-f3c1724e75e2_fb8f8b0c-b019-3c84-87a5-753cb136b32f.png?auto=format"],
    ["Makanan","Bambang Choco Cheese Toast",17000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/66499e2e-b9c8-42f4-a32e-296fc8639792_9bcefd8c-c6d2-0bf3-cd8b-d58b53b7c107.png?auto=format"],
    ["Makanan","Wahyu Sapi Toast",19000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/605c7f65-d7ec-4568-9ea0-3650bb92546e_f8688c41-22fd-a3a2-836f-7491a183eda0.png?auto=format"],
    ["Makanan","Vanilla Choux Puff", 12000, null, "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/129e1c5a-38a6-43d9-b1cb-ce5513aad89b_1d03fedc-2774-4f02-ad41-4c8d708f8bc6.png?auto=format"],
    ["Makanan","Strawberry Choux Puff",12000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/c80d7e27-3dbf-4824-9c50-b2dd94ad46bf_3ea6cf0b-7377-4849-b597-94441ba7cbfe.png?auto=format"],
    ["Makanan","Chocolate Choux Puff",12000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/4e97635e-d433-42db-a9b5-7aaba05ab108_eb464661-b1cc-4bc8-a729-6cb15151ffc0.png?auto=format"],
    ["Makanan","Salt Bread Original",11000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/f193bae7-f819-4927-9eb5-2649ea8ba27e_4f833503-36a0-cc16-5b72-5c624190b5be.png?auto=format"],
    ["Makanan","Salt Bread Sausage",14000,null,"https://huawei-food-cms.grab.com/compressed_webp/items/url-d59bae1d/photo/a11e720809d5e4fb.webp"],
    ["Makanan","Salt Bread Choco Butter",11000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/7341908f-c1c9-404e-a877-76e2efad8560_c8198f5b-ee48-47c2-a598-9fb61f1e2081.png?auto=format"],
    ["Makanan","Roti Coklat Klasik",9000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/a638a121-fe33-46e8-8a90-abd75706c1ec_9e12c70d-aa2b-5e0e-aebe-70e0ea1ebfd9.png?auto=format"],
    ["Makanan","Roti Susu Manis",10000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/396da488-0f99-4e03-9e4d-a60c2c979074_33396a34-db50-f763-4f98-7ec86de19e27.png?auto=format"],
    ["Makanan","Roti Keju Manis",13000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/72acff80-65d0-4ccb-8018-c6abb90e76da_4d56bebd-84b0-00e6-34d0-2a7f4bbd7003.png?auto=format"],
    ["Makanan","Roti Srikaya",15000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/bb7f1969-adf1-4402-b565-871903609693_dbf90a98-0acd-2f08-0505-b83f77186496.png?auto=format"],
    ["Makanan","Butter Croissant",15000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/db92aac9-45b6-4d34-8c80-8376eaaf873c_9d55c3c9-52d8-ba1d-93f0-d3463fccf78c.png?auto=format"],
    ["Makanan","Chocolate Croissant",19000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/76d0d5df-9a62-49fa-b65e-8ca8d63a6a4d_91b9e718-9857-2d5c-644a-f5bc8624ebeb.png?auto=format"],
    ["Makanan","Sugar Donut",10000,null,"https://food-cms.grab.com/compressed_webp/items/IDITE20250213181305025046/detail/97b20569_a7aa8c317a3c525.webp"],
    ["Makanan","Chocolate Donut",13000,null,"https://food-cms.grab.com/compressed_webp/items/IDITE20250213181305010702/detail/afc82ffb_503298663d521e4.webp"],
    ["Makanan","Donut Almond",13000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/e704cea8-4c29-431f-bd9c-66152f8851ee_cae9e992-409d-bee6-72b4-0ff723d9f951.png?auto=format"],
    ["Makanan","Choco Chip Cookies",14000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/26fda6fc-f6aa-4fc0-b6e6-304be6c3c38a_e4d2e3fc-27e8-c6b3-8746-363e0e135588.png?auto=format"],
    ["Makanan","Friend Chip Cookie",17000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/056f4a54-9897-438c-8439-8924ce1aec37_31f64dbd-4d3f-10a9-f95e-ecc735c98dba.png?auto=format"],
    ["Makanan","Join the Dark Side Cookie",21000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/abce5af0-e7d7-4699-b2ab-efaed6f3ac45_9e36632a-bf36-8360-39f7-91b3c733e5d4.png?auto=format"],
    ["Makanan","Pasta Indoghetti",22000,null,"https://food-cms.grab.com/compressed_webp/items/IDITE20251212052608012601/detail/505f058b_303643db99c0fa4.webp"],
    ["Makanan","Pasta Mentai",24000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/fb629113-34ef-4ea0-923f-9f6a81681b9b_cfc504ae-2cd8-641d-a09d-b8e8426e43bf.png?auto=format"],
    ["Makanan","Gochu Macaroni Chicken",22000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/507f5288-fd53-4ffd-8a18-bcbcf5e0ed55_8fb50f1c-d5d8-4774-a414-875efc39dfe0.png?auto=format"],
    ["Makanan","Rose Spaghetti Sausage",22000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/acd708cd-c429-4ed4-a33c-14d649f2b683_eeebcb3a-c382-412a-84fb-2d35931ce14f.png?auto=format"],
    ["Makanan","Spaghetti Tuna Aglio Olio",22000,null,"https://huawei-food-cms.grab.com/compressed_webp/items/url-517ba09c/photo/4599f8f43c4b9ff7.webp"],
    ["Makanan","Thai Chicken Spaghetti",22000,null,"https://huawei-food-cms.grab.com/compressed_webp/items/url-968df5db/photo/2bfd90a07d28ed4.webp"],
    ["Makanan","Sandwich Smoked Beef and Cheese",21000,null,"https://food-cms.grab.com/compressed_webp/items/IDITE20251119052648012618/detail/d2d27f4c_18e44164b148568.webp"]
];

const generatedKKProducts = rawKK.map((item, idx) => {
    const [category, name, reg, lrg, image] = item;
    
    const regPrice = reg ? Number(reg) : null;
    const lrgPrice = lrg ? Number(lrg) : null;
    const promoReg = regPrice ? Math.floor((regPrice * 0.5) + 3500) : null;
    const promoLrg = lrgPrice ? Math.floor((lrgPrice * 0.5) + 3500) : null;
    
    let sizes = [];
    let sugars = null;
    let defaultSugar = null;
    let upgrades = [];
    
    const isMakanan = category === "Makanan" || name.includes("Bagel") || name.includes("Soft");
    
    if (!isMakanan) {
        if (regPrice) sizes.push({ name: "Regular", promoPrice: promoReg, originalPrice: regPrice });
        if (lrgPrice) sizes.push({ name: "Large", promoPrice: promoLrg, originalPrice: lrgPrice });
        
        if (["Americano", "Latte", "Cappuccino"].includes(name)) {
            sugars = ["No Sugar", "Less Sugar", "Normal Sugar"];
            defaultSugar = "No Sugar";
        } else {
            sugars = ["Less Sugar", "Normal Sugar"];
            defaultSugar = "Normal Sugar";
        }
        
        const upMap = {
            "Taro Cloud Matcha": ["Oatside"],
            "Taro Milk": ["Oatside"],
            "Taro Cloud Latte": ["Oatside", "Juwara Beans"],
            "Taro Cloud Milk Tea": [],
            "Korean Banana Latte": ["Juwara Beans"],
            "Banana Americano": ["Juwara Beans"],
            "OG Aren Speculoos Latte": ["Oatside", "Juwara Beans"],
            "Dua Shot OG Aren": ["Oatside", "Juwara Beans"],
            "Pistachio Aren Latte": ["Oatside", "Juwara Beans"],
            "Cafe Malt Latte": [],
            "Kopi Kenangan Mantan": ["Oatside", "Juwara Beans"],
            "Caramel Latte": ["Oatside", "Juwara Beans"],
            "Dua Shot Iced Shaken": ["Oatside", "Juwara Beans"],
            "Caramel Macchiato": ["Oatside", "Juwara Beans"],
            "Hazelnut Latte": ["Oatside", "Juwara Beans"],
            "Kopi Susu Black Aren": ["Oatside", "Juwara Beans"],
            "Matcha Espresso": ["Oatside", "Juwara Beans"],
            "Vanilla Latte": ["Oatside", "Juwara Beans"],
            "Avocado Coffee": ["Oatside", "Juwara Beans"],
            "Spanish Latte": ["Juwara Beans"],
            "Creamy Aren Latte": ["Juwara Beans"],
            "Butterscotch Aren Latte": ["Oatside", "Juwara Beans"],
            "Butterscotch Sea Salt Latte": ["Oatside", "Juwara Beans"],
            "Americano": ["Juwara Beans"],
            "Cappuccino": ["Oatside", "Juwara Beans"],
            "Latte": ["Oatside", "Juwara Beans"],
            "Oatside Latte": ["Juwara Beans"],
            "Oatside Kopi Kenangan Mantan": ["Juwara Beans"],
            "Mocha Latte": ["Oatside", "Juwara Beans"],
            "Butterscotch Kenangan Frape": ["Oatside", "Juwara Beans"],
            "Matcha Kenangan Frappe": ["Oatside"],
            "Kopi Kenangan Mantan Frappe": ["Oatside", "Juwara Beans"],
            "Vanilla Kenangan Frappe": ["Oatside"],
            "Dutch Choco Kenangan Frappe": ["Oatside"],
            "OG Thai Tea": [],
            "Thai Tea Loaded": [],
            "Hazelnut Choco Milk Tea": [],
            "Lemon Black Tea": [],
            "Fresh Lemonade": [],
            "Kenangan Milk Tea": [],
            "Milo Dinosaurus": [],
            "Raspberry Hibiscus": [],
            "Oatside Matcha Latte": []
        };

        if (upMap[name] !== undefined) {
            upgrades = upMap[name];
        } else if (category === "Non-Coffee") {
            upgrades = ["Oatside"];
        } else {
            upgrades = [];
        }
    }

    return {
        id: `kk-${idx}`, 
        category, 
        name,
        originalPrice: isMakanan ? regPrice : (sizes.length > 0 ? sizes[0].originalPrice : 0),
        promoPrice: isMakanan ? promoReg : (sizes.length > 0 ? sizes[0].promoPrice : 0),
        brand: "Kopi Kenangan",
        image: image,
        isPackage: false,
        sizes,
        sugars,
        defaultSugar,
        upgrades
    };
});

window.products = generatedKKProducts;

// --- KODE TAMBAHAN DI DATA.JS ---
window.PREMIUM_PRICES = {
    "Taro Cloud Matcha": 32000,
    "Taro Milk": 29000,
    "Taro Cloud Latte": 32000,
    "Taro Cloud Milk Tea": 29000,
    "Korean Banana Latte": 34000,
    "Banana Americano": 30000,
    "Creamy Caramel Latte": 36000,
    "OG Aren Speculoos Latte": 31000,
    "Dua Shot OG Aren": 35000,
    "Pistachio Aren Latte": 29000,
    "Cafe Malt Latte": 33000,
    "Kopi Kenangan Mantan": 28000,
    "Caramel Latte": 36000,
    "Dua Shot Iced Shaken": 38000,
    "Caramel Macchiato": 40000,
    "Hazelnut Latte": 36000,
    "Kopi Susu Black Aren": 32000,
    "Matcha Espresso": 37000,
    "Mocha Latte": 41000,
    "Vanilla Latte": 36000,
    "Avocado Coffee": 44000,
    "Spanish Latte": 29000,
    "Creamy Aren Latte": 33000,
    "Butterscotch Aren Latte": 29000,
    "Butterscotch Sea Salt Latte": 35000,
    "Americano": 22000,
    "Cappuccino": 31000,
    "Latte": 31000,
    "Oatside Latte": 34000,
    "Oatside Kopi Kenangan Mantan": 31000,
    "Butterscotch Kenangan Frape": 43000,
    "Matcha Kenangan Frappe": 45000,
    "Kopi Kenangan Mantan Frappe": 38000,
    "Vanilla Kenangan Frappe": 36000,
    "Dutch Choco Kenangan Frappe": 40000,
    "Banana Choco": 35000,
    "OG Thai Tea": 26000,
    "Thai Tea Loaded": 30000,
    "Hazelnut Choco Milk Tea": 30000,
    "Avocado Caramel": 40000,
    "Avocado Milk": 36000,
    "Caramel Dutch Choco": 41000,
    "Dutch Chocolate": 36000,
    "Hazelnut Dutch Choco": 41000,
    "Lemon Black Tea": 26000,
    "Kenangan Milk Tea": 27000,
    "Milo Dinosaurus": 30000,
    "Oreo Shake": 34000,
    "Raspberry Hibiscus": 29000,
    "Susu Grass Jelly": 32000,
    "Matcha Latte": 34000,
    "Oatside Matcha Latte": 34000,
    "OG Aren Milky Speculoos": 33000
};
