//! ---------------------------------------- Import
//! ---------------------------------------- Functions
//! --------------------
export function amenitySeparator(amenities) {
  //! --------------------
  const categories = {
    "Scenic View": [
      "view",
      "scenic",
      "landmark",
      "mountain",
      "garden",
      "sea",
      "ocean",
      "lake",
      "river",
      "city view",
    ],

    Features: [
      "air conditioning",
      "heating",
      "washer",
      "dryer",
      "parking",
      "workspace",
      "wifi",
      "internet",
      "balcony",
      "terrace",
      "patio",
      "elevator",
    ],

    "Kitchen & Dining": [
      "kitchen",
      "dining",
      "dishwasher",
      "oven",
      "microwave",
      "refrigerator",
      "fridge",
      "stove",
      "cook",
      "coffee",
      "dining table",
      "kettle",
    ],

    Safety: [
      "smoke alarm",
      "smoke detector",
      "carbon monoxide",
      "fire extinguisher",
      "first aid",
      "security",
      "lock",
      "safe",
      "alarm",
      "camera",
    ],

    Services: [
      "cleaning",
      "housekeeping",
      "laundry",
      "luggage",
      "check-in",
      "checkout",
      "concierge",
      "shuttle",
      "transfer",
      "delivery",
    ],

    Entertainment: [
      "tv",
      "television",
      "netflix",
      "music",
      "sound system",
      "speaker",
      "game",
      "gaming",
      "books",
      "board game",
      "piano",
    ],
  };
  //! --------------------
  return Object.entries(categories).map(([title, keywords]) => {
    const items = amenities.filter((amenity) =>
      keywords.some((keyword) =>
        String(amenity.name).toLowerCase().includes(keyword),
      ),
    );
    return { title, items };
  });
}
