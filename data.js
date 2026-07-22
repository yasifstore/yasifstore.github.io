const rawKK = [
    ["Coffee","Americano",17000,22000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193130067701/detail/a67cc828_bfab17b25c46ffa.webp"],
    ["Coffee","Avocado Coffee",28000,38000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250703074725012544/detail/4ceae86b_c9778ae7145062a.webp"],
    ["Coffee","Blueberry Americano",19000,26000,"https://huawei-food-cms.grab.com/compressed_webp/items/url-b450ad17/photo/907f271ead5b2acd.webp"],
    ["Coffee","Butterscotch Aren Latte",20000,27000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193127015676/detail/ad0dbfe5_cc6de456af98b49.webp"],
    ["Coffee","Butterscotch Kenangan Frape",30000,40000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250701082015016768/detail/63a3f71e_c158a0c20395877.webp"],
    ["Coffee","Butterscotch Sea Salt Latte",25000,33000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193129017472/detail/a3ebb563_895267a518f2978.webp"],
    ["Coffee","Cafe Malt Latte",23000,30000,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/20737db3-3d79-409d-be0e-4e2d25b7f2d3_31e7f50a-1561-9ba1-6a85-b77979cf8b66.png?auto=format"],
    ["Coffee","Cappuccino",22000,29000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193131040855/detail/8e5c4d82_c25681b0cfec532.webp"],
    ["Coffee","Creamy Caramel Latte",26000,16500,"https://huawei-food-cms.grab.com/compressed_webp/items/url-a69e7b1d/photo/8a3fa3a2dcede822.webp"],
    ["Coffee","Caramel Latte",26000,34000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193126060859/detail/e9ddffc4_ecba1398e652979.webp"],
    ["Coffee","Caramel Macchiato",28000,38000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250812051421027652/detail/ae93796d_404b2968cc0722e.webp"],
    ["Coffee","Coffeeberry Frappe",25000,32000,"https://huawei-food-cms.grab.com/compressed_webp/items/url-3efbf577/photo/3402bc12b110167e.webp"],
    ["Coffee","Creamy Aren Latte",22000,31000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250701081956023314/detail/55494d68_fc905469e7d1ef2.webp"],
    ["Coffee","Dua Shot Iced Shaken",28000,38000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193128078742/detail/ee46dfe5_590f16c24cee913.webp"],
    ["Coffee","Dua Shot OG Aren",25000,32000,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/30dca2fe-f397-4f16-b7a9-1b2001d192b9_6bd9ab79-c96e-4a49-853a-15ce6eb1d08c.png?auto=format"],
    ["Coffee","Hazelnut Latte",26000,34000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193125023318/detail/f2220ce9_a2140e6cbaf588b.webp"],
    ["Coffee","Kopi Kenangan Mantan",19000,25000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250812051422019174/detail/5b10a373_2aec27ffffdc9e8.webp"],
    ["Coffee","Kopi Kenangan Mantan Frappe",30000,34000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250701082014010059/detail/9c56be81_1e18627861ae747.webp"],
    ["Coffee","Kopi Susu Black Aren",21000,30000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193125060247/detail/0ff58d8c_63797561bee87b9.webp"],
    ["Coffee","Latte",22000,29000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193132012856/detail/4a8f13ae_00ff4874930fcd7.webp"],
    ["Coffee","Matcha Espresso",26000,35000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193127069282/detail/c7fbb5f5_127f022392f087e.webp"],
    ["Coffee","Mocha Caramel",26000,33000,"https://food-cms.grab.com/compressed_webp/items/new-item/detail/1f006128_d97b9150322d5f3.webp"],
    ["Coffee","Mocha Latte",28000,null,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193128023892/detail/acd94dd5_8e866cccfaca696.webp"],
    ["Coffee","OG Aren Speculoos Latte",21000,28000,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/2dc61af2-87e4-4c58-9728-75d863dd2fd8_e3051f91-0f13-48df-ba37-6bf89299b3b6.png?auto=format"],
    ["Coffee","Oatside Kopi Kenangan Mantan",22000,28000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193109043175/detail/796b24e6_616d14a5728d1ff.webp"],
    ["Coffee","Oatside Latte",25000,32000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193109060320/detail/ced81934_3fd8d7f1e3af821.webp"],
    ["Coffee","Pistachio Aren Latte",19000,26000,"https://food-cms.grab.com/compressed_webp/items/IDITE20251123181919056205/detail/924b3315_c4b1b6cce555736.webp"],
    ["Coffee","Spanish Latte",19000,27000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250812051421018408/detail/4983790e_326fedae12ba368.webp"],
    ["Coffee","Toffee Nut Aren Latte",21000,28000,"https://food-cms.grab.com/compressed_webp/items/IDITE20251123135412014443/detail/8d36bd27_660f8c0a63880f8.webp"],
    ["Coffee","Toffee Nut Late",19000,26000,"https://food-cms.grab.com/compressed_webp/items/IDITE20251123181917021062/detail/bd57be8d_ab0cbd37907d628.webp"],
    ["Coffee","Toffee Nut Oat Latte",22000,29000,"https://food-cms.grab.com/compressed_webp/items/IDITE20251123135412029037/detail/b5c7d7ee_9bb39c2260fdaec.webp"],
    ["Coffee","Vanilla Latte",26000,34000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193130027096/detail/e6f61022_eda82d03ffa2627.webp"],
    ["Non-Coffee","Avocado Caramel",28000,38000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193147016654/detail/559de687_d0ce7a477821c37.webp"],
    ["Non-Coffee","Avocado Milk",24000,34000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193148086543/detail/fd59074d_5395c2fe71dbaa7.webp"],
    ["Non-Coffee","Babyccino",19000,null,"https://i.imgur.com/xVlrWnc.jpeg"],
    ["Non-Coffee","Blueberry Frappe",23000,30000,"https://huawei-food-cms.grab.com/compressed_webp/items/url-6583d06a/photo/a46a1fb1a146f5de.webp"],
    ["Non-Coffee","Butterscotch Sea Salt Crumble",22000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/c035cfad-b164-4982-86e1-cdc7a33595d5_7be23137-13e7-5f63-ccc8-cad9d4e77421.png?auto=format"],
    ["Non-Coffee","Caramel Dutch Choco",28000,38000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250630193147027174/detail/4f5681cb_210431f9a61ba2a.webp"],
    ["Non-Coffee","Choco Caramel",19000,26000,"https://food-cms.grab.com/compressed_webp/items/new-item/detail/682d775f_1d9084095f8e90a.webp"],
    ["Non-Coffee","Choco Caramel Frappe",28000,35000,"https://food-cms.grab.com/compressed_webp/items/new-item/detail/ef6a56d3_945a3bc5c0c1f87.webp"],
    ["Non-Coffee","Chocoberry Frappe",27000,34000,"https://huawei-food-cms.grab.com/compressed_webp/items/url-f8295be9/photo/671de38d58d351e3.webp"],
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
    ["Non-Coffee","Toffe Nut Choco Macchiato",22000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/1ef5180c-efe9-429d-b255-ce63277548a6_ec742ff0-d8d7-6f86-f84b-daabc4ee543c.png?auto=format"],
    ["Non-Coffee","Vanilla Kenangan Frappe",25000,32000,"https://food-cms.grab.com/compressed_webp/items/IDITE20250701082014035176/detail/f4c784b7_8915c14d7b17582.webp"],
    ["Makanan","Adam Ayam Toast",19000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/5401f48a-01c5-4981-88aa-f3c1724e75e2_fb8f8b0c-b019-3c84-87a5-753cb136b32f.png?auto=format"],
    ["Makanan","Aren Apple Pie",17000,null,"https://huawei-food-cms.grab.com/compressed_webp/items/url-9216826f/photo/ba454472b5208f2d.webp"],
    ["Makanan","Bambang Choco Cheese Toast",17000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/66499e2e-b9c8-42f4-a32e-296fc8639792_9bcefd8c-c6d2-0bf3-cd8b-d58b53b7c107.png?auto=format"],
    ["Makanan","Blueberry Muffin",15000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/32e30e0d-9103-4e37-a7ba-d82545d8d945_cd7feac8-efcb-4e4e-8521-abdca51e7b4a.png?auto=format"],
    ["Makanan","Butter Croissant",15000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/db92aac9-45b6-4d34-8c80-8376eaaf873c_9d55c3c9-52d8-ba1d-93f0-d3463fccf78c.png?auto=format"],
    ["Makanan","Canele Aren",15000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/b839edd5-c9f8-44d3-97e8-b60cdddf1f2c_951c3451-e0e3-46d2-9f8a-c2cfd1700147.png?auto=format"],
    ["Makanan","Canele Original",13000,null,"https://food-cms.grab.com/compressed_webp/items/IDITE20251211192434026758/detail/f3748a41_319e31bd7ec6b3f.webp"],
    ["Makanan","Canele Toffee Nut Crumble",15000,null,"https://food-cms.grab.com/compressed_webp/items/IDITE20251211192433012142/detail/94793536_6425ab37b5ac942.webp"],
    ["Makanan","Chicken Japanese Curry Rice",24000,null,"https://food-cms.grab.com/compressed_webp/items/IDITE20251212052609023189/detail/80161efd_ba6140742e7b7b3.webp"],
    ["Makanan","Chicken Pad Kra Pao Rice",22000,null,"https://food-cms.grab.com/compressed_webp/items/IDITE20251212052608024725/detail/0cd18658_ece4248728d730c.webp"],
    ["Makanan","Choco Chip Cookies",14000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/26fda6fc-f6aa-4fc0-b6e6-304be6c3c38a_e4d2e3fc-27e8-c6b3-8746-363e0e135588.png?auto=format"],
    ["Makanan","Choco Muffin",15000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/48b6dfe9-6642-4f01-a2db-5fe5443c9944_b7bb083c-dc42-4221-b368-d262394e63cb.png?auto=format"],
    ["Makanan","Chocolate Choux Puff",12000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/4e97635e-d433-42db-a9b5-7aaba05ab108_eb464661-b1cc-4bc8-a729-6cb15151ffc0.png?auto=format"],
    ["Makanan","Chocolate Croissant",19000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/76d0d5df-9a62-49fa-b65e-8ca8d63a6a4d_91b9e718-9857-2d5c-644a-f5bc8624ebeb.png?auto=format"],
    ["Makanan","Chocolate Donut",13000,null,"https://food-cms.grab.com/compressed_webp/items/IDITE20250213181305010702/detail/afc82ffb_503298663d521e4.webp"],
    ["Makanan","Croissant Abon",17000,null,"https://food-cms.grab.com/compressed_webp/items/IDITE20251211192433021856/detail/9c7d5034_00dce96fec491e6.webp"],
    ["Makanan","Donut Abon",13000,null,"https://placehold.co/600x600/F7F5F0/77756D?text=Donut+Abon"],
    ["Makanan","Donut Almond",13000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/e704cea8-4c29-431f-bd9c-66152f8851ee_cae9e992-409d-bee6-72b4-0ff723d9f951.png?auto=format"],
    ["Makanan","Friend Chip Cookie",17000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/056f4a54-9897-438c-8439-8924ce1aec37_31f64dbd-4d3f-10a9-f95e-ecc735c98dba.png?auto=format"],
    ["Makanan","Join the Dark Side Cookie",21000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/abce5af0-e7d7-4699-b2ab-efaed6f3ac45_9e36632a-bf36-8360-39f7-91b3c733e5d4.png?auto=format"],
    ["Makanan","Pasta Indoghetti",22000,null,"https://food-cms.grab.com/compressed_webp/items/IDITE20251212052608012601/detail/505f058b_303643db99c0fa4.webp"],
    ["Makanan","Pasta Mentai",24000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/fb629113-34ef-4ea0-923f-9f6a81681b9b_cfc504ae-2cd8-641d-a09d-b8e8426e43bf.png?auto=format"],
    ["Makanan","Roti Coklat Klasik",9000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/a638a121-fe33-46e8-8a90-abd75706c1ec_9e12c70d-aa2b-5e0e-aebe-70e0ea1ebfd9.png?auto=format"],
    ["Makanan","Roti Gulung Abon",18000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/5cec4577-f126-471c-97d8-48aab38857e5_d7030c09-50e9-f29c-0a18-d32c3c51cf88.png?auto=format"],
    ["Makanan","Roti Keju Manis",13000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/72acff80-65d0-4ccb-8018-c6abb90e76da_4d56bebd-84b0-00e6-34d0-2a7f4bbd7003.png?auto=format"],
    ["Makanan","Roti Srikaya",15000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/bb7f1969-adf1-4402-b565-871903609693_dbf90a98-0acd-2f08-0505-b83f77186496.png?auto=format"],
    ["Makanan","Roti Susu Manis",10000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/396da488-0f99-4e03-9e4d-a60c2c979074_33396a34-db50-f763-4f98-7ec86de19e27.png?auto=format"],
    ["Makanan","Salt Bread Abon",14000,null,"https://huawei-food-cms.grab.com/compressed_webp/items/new-item/photo/09b7f146_e401bd2a47aff24.webp"],
    ["Makanan","Salt Bread Beef and Cheese",14000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/fab74fca-bc4a-4dff-bad3-7f758510c460_7289c848-7c1c-e767-8582-5fde0af01f81.png?auto=format"],
    ["Makanan","Salt Bread Choco Butter",11000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/7341908f-c1c9-404e-a877-76e2efad8560_c8198f5b-ee48-47c2-a598-9fb61f1e2081.png?auto=format"],
    ["Makanan","Salt Bread Original",11000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/f193bae7-f819-4927-9eb5-2649ea8ba27e_4f833503-36a0-cc16-5b72-5c624190b5be.png?auto=format"],
    ["Makanan","Salt Bread Sausage",14000,null,"https://huawei-food-cms.grab.com/compressed_webp/items/url-d59bae1d/photo/a11e720809d5e4fb.webp"],
    ["Makanan","Sandwich Chicken Tartar",21000,null,"https://food-cms.grab.com/compressed_webp/items/IDITE20251119052649019190/detail/653da70a_2ddbbcee926d573.webp"],
    ["Makanan","Sandwich Smoked Beef and Cheese",21000,null,"https://food-cms.grab.com/compressed_webp/items/IDITE20251119052648012618/detail/d2d27f4c_18e44164b148568.webp"],
    ["Makanan","Spaghetti Tuna Aglio Olio",22000,null,"https://huawei-food-cms.grab.com/compressed_webp/items/url-517ba09c/photo/4599f8f43c4b9ff7.webp"],
    ["Makanan","Strawberry Choux Puff",12000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/c80d7e27-3dbf-4824-9c50-b2dd94ad46bf_3ea6cf0b-7377-4849-b597-94441ba7cbfe.png?auto=format"],
    ["Makanan","Sugar Donut",10000,null,"https://food-cms.grab.com/compressed_webp/items/IDITE20250213181305025046/detail/97b20569_a7aa8c317a3c525.webp"],
    ["Makanan","Thai Chicken Spaghetti",22000,null,"https://huawei-food-cms.grab.com/compressed_webp/items/url-968df5db/photo/2bfd90a07d28ed4.webp"],
    ["Makanan","Vanila Choux Puff",12000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/129e1c5a-38a6-43d9-b1cb-ce5513aad89b_1d03fedc-2774-4f02-ad41-4c8d708f8bc6.png?auto=format"],
    ["Makanan","Wahyu Sapi Toast",19000,null,"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/605c7f65-d7ec-4568-9ea0-3650bb92546e_f8688c41-22fd-a3a2-836f-7491a183eda0.png?auto=format"]
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
    
    if (category !== "Makanan") {
        if (regPrice) sizes.push({ name: "Regular", promoPrice: promoReg, originalPrice: regPrice });
        if (lrgPrice) sizes.push({ name: "Large", promoPrice: promoLrg, originalPrice: lrgPrice });
        
        if (["Americano", "Latte", "Cappuccino"].includes(name)) {
            sugars = ["No Sugar", "Less Sugar", "Normal Sugar"];
            defaultSugar = "No Sugar";
        } else {
            sugars = ["Less Sugar", "Normal Sugar"];
            defaultSugar = "Normal Sugar";
        }
    }

    return {
        id: `kk-${idx}`, 
        category, 
        name,
        originalPrice: category === "Makanan" ? regPrice : (sizes.length > 0 ? sizes[0].originalPrice : 0),
        promoPrice: category === "Makanan" ? promoReg : (sizes.length > 0 ? sizes[0].promoPrice : 0),
        brand: "Kopi Kenangan",
        image: image,
        sizes,
        sugars,
        defaultSugar
    };
});

window.products = [
    { id: "901", category: "Coffee", name: "Matcha Caramel Coffee Mousse", originalPrice: 26000, promoPrice: 16000, brand: "Tomoro Coffee", image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/f4d1db53-13b7-4a0d-a9f6-ca6742859419_116R_XfVNh51pkIzKrd1cLqYGdtemHsOC.jpeg?auto=format" },
    { id: "902", category: "Non-Coffee", name: "Matcha Jasmine Milk Tea", originalPrice: 23000, promoPrice: 14500, brand: "Tomoro Coffee", image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/406f23c9-d9cb-4654-8f49-e65771100493_1M8ujUGNZpCMJPVx7AXKMGmShNeIkjj27.jpeg?auto=format" },
    { id: "903", category: "Coffee", name: "Matcha Espresso", originalPrice: 30000, promoPrice: 18000, brand: "Tomoro Coffee", image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/9886bffc-35f7-464d-829f-cf4b521239dd_1JD-OY9GOJH6-SuL6Ub9u8_JujS6I_mp4.jpeg?auto=format" },
    { id: "109", category: "Coffee", name: "Caramel Cheese Latte", originalPrice: 26000, promoPrice: 16000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE202410011221397303144/detail/7ca6b6e58bf54039ae151eabdb45d24c_1767718900688893063.webp" },
    { id: "110", category: "Coffee", name: "Cheese Cloud Latte", originalPrice: 26000, promoPrice: 16000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE202410011221397315374/detail/f1babbdc82e544d183b4da1712bd68b0_1767718901087073805.webp" },
    { id: "111", category: "Coffee", name: "TOMORO Coconut Latte", originalPrice: 23000, promoPrice: 14500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20231201052540011833/detail/8d01ad1991a0440daaf7c0937a71234c_1767718899526247736.webp" },
    { id: "112", category: "Coffee", name: "Caffe Latte", originalPrice: 24000, promoPrice: 15000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20240403024221025333/detail/1773363ba36f4673b6f77aac7eb5b940_1767718897408486157.webp" },
    { id: "113", category: "Coffee", name: "Cappuccino", originalPrice: 24000, promoPrice: 15000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20220929064719026558/detail/34c119e022514d8e9764fb0415dd62e5_1767718900845353926.webp" },
    { id: "114", category: "Coffee", name: "Caffe Mocha", originalPrice: 25000, promoPrice: 15500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20220929064719026558/detail/34c119e022514d8e9764fb0415dd62e5_1767718900845353926.webp" },
    { id: "115", category: "Coffee", name: "Coconut Aren Latte", originalPrice: 25000, promoPrice: 15500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20231201052541024582/detail/679391d630de4918854905b7569418dd_1767718899338187433.webp" },
    { id: "116", category: "Coffee", name: "Caramel Macchiato", originalPrice: 26000, promoPrice: 16000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20230113034948015908/detail/48cfbac27da84199bac6cdabda400960_1767718899608943367.webp" },
    { id: "117", category: "Coffee", name: "Manuka Oat Latte", originalPrice: 30000, promoPrice: 18000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20230219161627031365/detail/955f100e3b8c41448497e13dc817a559_1767718898481789067.webp" },
    { id: "118", category: "Coffee", name: "Kopi susu Aren", originalPrice: 18000, promoPrice: 12000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20240618125618038275/detail/d0e271fba13c432ab45400db87c2b448_1767718899017695017.webp" },
    { id: "119", category: "Coffee", name: "Spanish Latte", originalPrice: 25000, promoPrice: 15500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20240501051955281535/detail/7eb0df4e07294ac88f76900ac6e36089_1767718899559551463.webp" },
    { id: "120", category: "Coffee", name: "Spanish Aren Latte", originalPrice: 26000, promoPrice: 16000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE202405010520513896209/detail/89f8922a0c7d45a49a4abc9fe94698f7_1767718901461746147.webp" },
    { id: "121", category: "Coffee", name: "TOMORO Aren Latte", originalPrice: 20000, promoPrice: 13000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20240403024220010397/detail/55bd41658e204801894d8c3f45d7f0fb_1767718897226800221.webp" },
    { id: "122", category: "Coffee", name: "TOMORO Oat Latte", originalPrice: 24000, promoPrice: 15000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20240403024217071021/detail/3ebf60f7f0a045ee843455713f8ba4ce_1767718901591453215.webp" },
    { id: "123", category: "Coffee", name: "Breve Latte", originalPrice: 30000, promoPrice: 18000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20240325044729017344/detail/311eb8f560784148ba90dd3752c75645_1767718898980151003.webp" },
    { id: "125", category: "Coffee", name: "Sea Salt Cloud Caramel Macchiato", originalPrice: 30000, promoPrice: 18000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20240810022442050982/detail/c17635f2a19e40f49956a58207806de9_1761584469101605119.webp" },
    { id: "126", category: "Coffee", name: "Caffe Americano", originalPrice: 18000, promoPrice: 12000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20220929064721012611/detail/10d414e6e6a84e00b324ecf6bde12dba_1767718901499056587.webp" },
    { id: "127", category: "Coffee", name: "Pistachio Latte", originalPrice: 26000, promoPrice: 16000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20250624170201139716/detail/425e14296d8c4c1faa0d7f2e37ee1498_1750784521443125824.webp" },
    { id: "129", category: "Coffee", name: "Pistachio Matcha Latte", originalPrice: 29000, promoPrice: 17500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20250624170201283226/detail/58fd2f40ab834a79aed13a2c851b7969_1750784521915553429.webp" },
    { id: "134", category: "Coffee", name: "Peach Americano", originalPrice: 19000, promoPrice: 12500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20250423071639302532/detail/699b1ccd6b4c47d9a48c07a13e4d6f6c_1767718899691325777.webp" },
    { id: "140", category: "Coffee", name: "Grapefruit Americano", originalPrice: 20000, promoPrice: 13000, brand: "Tomoro Coffee", image: "https://i.imgur.com/A91deWe.jpeg" },
    { id: "141", category: "Coffee", name: "Lemonade Americano", originalPrice: 20000, promoPrice: 13000, brand: "Tomoro Coffee", image: "https://i.imgur.com/Cu60gON.jpeg" },
    { id: "101", category: "Non-Coffee", name: "Chocolate", originalPrice: 21000, promoPrice: 13500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20240403024213034788/detail/53f057e0_80b61c9204b.webp" },
    { id: "102", category: "Non-Coffee", name: "Chocolate Frappe", originalPrice: 24000, promoPrice: 15000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20220929064725056609/detail/a66426ae_2821ecfca9d.webp" },
    { id: "103", category: "Non-Coffee", name: "Matcha Latte", originalPrice: 27000, promoPrice: 16500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20220929064729010429/detail/18fe3801_206262e13b5.webp" },
    { id: "104", category: "Non-Coffee", name: "Matcha Frappe", originalPrice: 27000, promoPrice: 16500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20220929064726033490/detail/62897f72_5aeb5f34a5a.webp" },
    { id: "108", category: "Non-Coffee", name: "Coconut Choco", originalPrice: 23000, promoPrice: 14500, brand: "Tomoro Coffee", image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/35f93737-90fb-4da2-a641-dcadffbbcf9a_menu-item-image_1715225491288.jpg?auto=format" },
    { id: "128", category: "Non-Coffee", name: "Pistachio Chocolate", originalPrice: 26000, promoPrice: 16000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20250624170201202214/detail/822707456a94472692b678cb312412f0_1750784521695266242.webp" },
    { id: "130", category: "Non-Coffee", name: "Jasmine Green Milk Tea", originalPrice: 19000, promoPrice: 12500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20251029170536179666/detail/1a1063a8bc184779977c922f01733dcb_1761757536367092703.webp" },
    { id: "131", category: "Non-Coffee", name: "Peach Oolong Milk Tea", originalPrice: 19000, promoPrice: 12500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20251029170536293336/detail/d69a67a472d44336950d7af198b76ae2_1761757536575419792.webp" },
    { id: "132", category: "Non-Coffee", name: "Sea Salt Cloud Chocolate", originalPrice: 28000, promoPrice: 17000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20240810022442061963/detail/0a745b5caf584d3093c43348ed4d7ee2_1723256682769202693.webp" },
    { id: "133", category: "Non-Coffee", name: "Sea Salt Cloud Matcha Latte", originalPrice: 30000, promoPrice: 18000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE2024060517151517386238/detail/8cda9d73723142169181a777f023f974_1718175725457655629.webp" },
    { id: "135", category: "Non-Coffee", name: "Peach Coconut Frappe", originalPrice: 19000, promoPrice: 12500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20250423071640031309/detail/b83a4534c7d2409db9d7567e351f2462_1745392600052868531.webp" },
    { id: "136", category: "Non-Coffee", name: "Peach Jasmine Tea", originalPrice: 19000, promoPrice: 12500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20250423071639436875/detail/d98c2912357d46adbcc6dccc3a09bb98_1745392599839416641.webp" },
    { id: "105", category: "Non-Coffee", name: "Choco Oat Latte", originalPrice: 28000, promoPrice: 17000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20230219161632023953/detail/021df064_87871d6bde9.webp" },
    { id: "106", category: "Non-Coffee", name: "Matcha Oat Latte", originalPrice: 28000, promoPrice: 17000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20230703164542011562/detail/b22e4f68_ea594884b8c.webp" },
    { id: "107", category: "Non-Coffee", name: "Hojicha Oat Latte", originalPrice: 30000, promoPrice: 18000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20230219161630020636/detail/c45bc165_5db6b392573.webp" },
    { id: "137", category: "Non-Coffee", name: "Strawberry Jasmine Smoothie", originalPrice: 19000, promoPrice: 12500, brand: "Tomoro Coffee", image: "https://i.imgur.com/c2WfUSE.jpeg" },
    { id: "138", category: "Non-Coffee", name: "Pink Pop Lemonade", originalPrice: 14000, promoPrice: 10000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20230116155019015218/detail/36076b86_3a72d99a8b4.webp" },
    { id: "139", category: "Non-Coffee", name: "Pink Pop Lemon Tea", originalPrice: 17000, promoPrice: 11500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20230116155019049154/detail/85cf8914_28542950b08.webp" },
    { id: "142", category: "Non-Coffee", name: "Chocolate Frappe", originalPrice: 24000, promoPrice: 15000, brand: "Tomoro Coffee", image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/bce80055-6bf6-493f-9c94-15a8342e0cc9_menu-item-image_1715226267850.jpg?auto=format" }
].concat(generatedKKProducts);
