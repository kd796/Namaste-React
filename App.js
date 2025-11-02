import ReactDOM from "react-dom/client";
import React from "react";

const Header = () => {
  
  return (<div className="header">
    <div className="logo-container">
      <img className="logo" src="https://png.pngtree.com/template/20191024/ourmid/pngtree-food-delivery-logo-design-fast-delivery-service-sign-image_323015.jpg"></img>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
  );
}


const resObjList = [
{
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "985566",
name: "Chinese Wok",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/6/bc099dac-8421-4174-b42f-5287c120df80_985566.jpg",
locality: "Jawaharlal Nehru Road",
areaName: "Park Street",
costForTwo: "₹250 for two",
cuisines: [
"Chinese",
"Asian",
"Tibetan",
"Desserts"
],
avgRating: 4.3,
parentId: "61955",
avgRatingString: "4.3",
totalRatingsString: "853",
sla: {
deliveryTime: 36,
lastMileTravel: 3.8,
serviceability: "SERVICEABLE",
slaString: "35-40 mins",
lastMileTravelString: "3.8 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-11-02 00:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹119"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-ab16b8d6-d867-4071-bcd6-7856ca1f62b7"
},
cta: {
link: "https://www.swiggy.com/city/kolkata/chinese-wok-jawaharlal-nehru-road-park-street-rest985566",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "651011",
name: "Pizza Hut",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/8ffc3f24-e540-4aba-aefc-af2f6bfc4085_651011.JPG",
locality: "New Market",
areaName: "Esplanade",
costForTwo: "₹350 for two",
cuisines: [
"Pizzas"
],
avgRating: 4.4,
parentId: "721",
avgRatingString: "4.4",
totalRatingsString: "2.1K+",
sla: {
deliveryTime: 35,
lastMileTravel: 2.5,
serviceability: "SERVICEABLE",
slaString: "30-35 mins",
lastMileTravelString: "2.5 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-11-02 04:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "Rxawards/_CATEGORY-Pizza.png",
description: "Delivery!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Delivery!",
imageId: "Rxawards/_CATEGORY-Pizza.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "50% OFF",
discountTag: "FLAT DEAL"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-ab16b8d6-d867-4071-bcd6-7856ca1f62b7"
},
cta: {
link: "https://www.swiggy.com/city/kolkata/pizza-hut-new-market-esplanade-rest651011",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "830564",
name: "Olio - The Wood Fired Pizzeria",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/f8a04cf2-a451-473a-b58a-80aaefeca9c3_830564.JPG",
locality: "Gariahat",
areaName: "Rashbehari Avenue",
costForTwo: "₹300 for two",
cuisines: [
"Pizzas",
"Pastas",
"Italian",
"Fast Food",
"Snacks",
"Beverages",
"Desserts"
],
avgRating: 4.3,
parentId: "11633",
avgRatingString: "4.3",
totalRatingsString: "2.4K+",
sla: {
deliveryTime: 44,
lastMileTravel: 5.6,
serviceability: "SERVICEABLE",
slaString: "40-45 mins",
lastMileTravelString: "5.6 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-11-02 06:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "newg.png",
description: "Gourmet"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Gourmet",
imageId: "newg.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹119"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-ab16b8d6-d867-4071-bcd6-7856ca1f62b7"
},
cta: {
link: "https://www.swiggy.com/city/kolkata/olio-the-wood-fired-pizzeria-gariahat-rashbehari-avenue-rest830564",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "985567",
name: "Big Bowl",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/6/93554071-8e74-4d54-ad5d-64d5872569c0_985567.jpg",
locality: "Jawaharlal Nehru Road",
areaName: "Park Street",
costForTwo: "₹250 for two",
cuisines: [
"Chinese",
"Tibetan",
"Desserts"
],
avgRating: 4.5,
parentId: "434792",
avgRatingString: "4.5",
totalRatingsString: "501",
sla: {
deliveryTime: 37,
lastMileTravel: 3.8,
serviceability: "SERVICEABLE",
slaString: "35-40 mins",
lastMileTravelString: "3.8 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-11-02 00:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹129"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-ab16b8d6-d867-4071-bcd6-7856ca1f62b7"
},
cta: {
link: "https://www.swiggy.com/city/kolkata/big-bowl-jawaharlal-nehru-road-park-street-rest985567",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "630353",
name: "KFC",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/ebdbb4c3-6b18-4074-a578-1a68fddd67d8_630353.JPG",
locality: "Espalande",
areaName: "S.N.Banerjee Road",
costForTwo: "₹400 for two",
cuisines: [
"Fast Food",
"Burgers",
"Rolls & Wraps"
],
avgRating: 4.5,
parentId: "547",
avgRatingString: "4.5",
totalRatingsString: "1.9K+",
sla: {
deliveryTime: 31,
lastMileTravel: 2.5,
serviceability: "SERVICEABLE",
slaString: "30-35 mins",
lastMileTravelString: "2.5 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-11-01 23:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "Rxawards/_CATEGORY-Burger.png",
description: "Delivery!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Delivery!",
imageId: "Rxawards/_CATEGORY-Burger.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹119"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-ab16b8d6-d867-4071-bcd6-7856ca1f62b7"
},
cta: {
link: "https://www.swiggy.com/city/kolkata/kfc-espalande-s-n-banerjee-road-rest630353",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "407661",
name: "Burger King",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/3079cc60-8ee1-4306-8390-fc436f9dc9d5_407661.jpg",
locality: "New Market",
areaName: "Esplanade",
costForTwo: "₹350 for two",
cuisines: [
"Burgers",
"American"
],
avgRating: 4.3,
parentId: "166",
avgRatingString: "4.3",
totalRatingsString: "19K+",
sla: {
deliveryTime: 31,
lastMileTravel: 2.9,
serviceability: "SERVICEABLE",
slaString: "30-35 mins",
lastMileTravelString: "2.9 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-11-02 06:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹55"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "4.5",
ratingCount: "2.3K+"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-ab16b8d6-d867-4071-bcd6-7856ca1f62b7"
},
cta: {
link: "https://www.swiggy.com/city/kolkata/burger-king-new-market-esplanade-rest407661",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "19515",
name: "Mezban Ripon Street",
cloudinaryImageId: "jaj2dspo6b2pfvflxiap",
locality: "Wellesley",
areaName: "Esplanade",
costForTwo: "₹300 for two",
cuisines: [
"Indian",
"Biryani",
"Chinese",
"Tandoor",
"Mughlai"
],
avgRating: 4.2,
parentId: "135608",
avgRatingString: "4.2",
totalRatingsString: "103K+",
sla: {
deliveryTime: 32,
lastMileTravel: 2.3,
serviceability: "SERVICEABLE",
slaString: "30-35 mins",
lastMileTravelString: "2.3 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-11-01 23:59:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹19"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "3.9",
ratingCount: "2.8K+"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-ab16b8d6-d867-4071-bcd6-7856ca1f62b7"
},
cta: {
link: "https://www.swiggy.com/city/kolkata/mezban-ripon-street-wellesley-esplanade-rest19515",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "13033",
name: "Royal Indian - Since 1905",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/18/25e04f02-674c-403d-ac89-ae0dde7443e9_13033.jpg",
locality: "Park Circus",
areaName: "Park Circus",
costForTwo: "₹500 for two",
cuisines: [
"Biryani",
"Mughlai",
"Kebabs",
"Rolls & Wraps"
],
avgRating: 4.6,
parentId: "519349",
avgRatingString: "4.6",
totalRatingsString: "62K+",
sla: {
deliveryTime: 35,
lastMileTravel: 3,
serviceability: "SERVICEABLE",
slaString: "30-35 mins",
lastMileTravelString: "3.0 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-11-02 00:45:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "10% OFF",
subHeader: "UPTO ₹40"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "4.2",
ratingCount: "7.8K+"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-ab16b8d6-d867-4071-bcd6-7856ca1f62b7"
},
cta: {
link: "https://www.swiggy.com/city/kolkata/royal-indian-since-1905-park-circus-rest13033",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}
];

const Restaurantcard = (props) => {
  const {resData} = props;

  const {
    name,
    cuisines,
    avgRatingString,
    cloudinaryImageId
  } = resData?.info;

  return (
    <div className="res-card">
      <img className="res-logo" alt="logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString + " Star"}</h4>
    </div>
  );
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
         {resObjList.map((restro) => (<Restaurantcard key={restro.info.id} resData = {restro} />) )}
      </div>
    </div>
  );
}


const AppLayout = () => {
  return (
    <div className="app">
      { Header() }
      { <Body/>}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);