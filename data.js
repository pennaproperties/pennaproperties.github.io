// ============================================================
//  PENNA PROPERTIES - PROPERTY DATA
//  ------------------------------------------------------------
//  HOW TO ADD A NEW PROPERTY (easy guide):
//  1. Copy one full block between the { } below.
//  2. Paste it at the top of the list (after the "[").
//  3. Change the details (id must be UNIQUE).
//  4. Set "newlyAvailable: true" to show it in the catalog header.
//  5. Save the file. That's it! The website updates automatically.
// ============================================================

const PROPERTIES = [
    {
        id: "plot-001",
        type: "plot",                       // "plot" or "apartment"
        title: "DTCP Plot - Kovur Road",
        location: "Kovur Road, Nellore",
        price: "₹18,00,000",
        area: "200 sq. yards",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        newlyAvailable: true,               // true = shows in "Newly Available" header
        latitude: "14.4426",
        longitude: "79.9865",
        surveyNumber: "123/2A",
        approvalNumber: "NUDA/2025/DTCP/1123",
        approvalType: "NUDA / DTCP Approved",
        facing: "East",
        description: "Prime residential plot on Kovur Road with excellent connectivity. Clear title, ready for registration. Suitable for building your dream home.",
        amenities: ["Road Access", "Electricity", "Water Connection", "Near School", "Near Hospital"]
    },
    {
        id: "plot-002",
        type: "plot",
        title: "Residential Plot - Mypadu Road",
        location: "Mypadu Road, Nellore",
        price: "₹12,50,000",
        area: "150 sq. yards",
        image: "https://images.unsplash.com/photo-1542889601-399c4f3a8402?w=800&q=80",
        newlyAvailable: true,
        latitude: "14.4089",
        longitude: "80.0215",
        surveyNumber: "87/1B",
        approvalNumber: "NUDA/2025/DTCP/0987",
        approvalType: "NUDA / DTCP Approved",
        facing: "North",
        description: "Well located residential plot near Mypadu Road. Peaceful neighbourhood, close to the beach route. Good for investment and self-construction.",
        amenities: ["Road Access", "Electricity", "Water Connection", "Near Market"]
    },
    {
        id: "apt-001",
        type: "apartment",
        title: "2BHK Apartment - Magunta Layout",
        location: "Magunta Layout, Nellore",
        price: "₹42,00,000",
        area: "1150 sq. ft",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
        newlyAvailable: true,
        latitude: "14.4512",
        longitude: "79.9869",
        surveyNumber: "45/3",
        approvalNumber: "NUDA/2024/BLDG/0456",
        approvalType: "NUDA Building Approval",
        facing: "East",
        description: "Spacious 2BHK apartment in the heart of Magunta Layout. 3rd floor with lift, car parking, and 24/7 security. Ready to move in.",
        amenities: ["Lift", "Car Parking", "24/7 Security", "Power Backup", "Water Supply"]
    },
    {
        id: "plot-003",
        type: "plot",
        title: "Commercial Plot - GNT Road",
        location: "Grand Trunk Road, Nellore",
        price: "₹55,00,000",
        area: "400 sq. yards",
        image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=800&q=80",
        newlyAvailable: false,
        latitude: "14.4625",
        longitude: "79.9712",
        surveyNumber: "210/5A",
        approvalNumber: "NUDA/2024/COM/0210",
        approvalType: "NUDA Commercial Approved",
        facing: "West",
        description: "High-visibility commercial plot on the busy GNT Road. Ideal for showroom, office, or retail. Excellent footfall and road frontage.",
        amenities: ["Main Road Frontage", "Electricity", "High Footfall", "Corner Plot"]
    },
    {
        id: "apt-002",
        type: "apartment",
        title: "3BHK Flat - Dargamitta",
        location: "Dargamitta, Nellore",
        price: "₹58,00,000",
        area: "1550 sq. ft",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        newlyAvailable: false,
        latitude: "14.4398",
        longitude: "79.9754",
        surveyNumber: "78/2C",
        approvalNumber: "NUDA/2024/BLDG/0789",
        approvalType: "NUDA Building Approval",
        facing: "North-East",
        description: "Premium 3BHK flat in Dargamitta with modern amenities. Covered parking, gym, and children's play area. Close to schools and shopping.",
        amenities: ["Lift", "Covered Parking", "Gym", "Play Area", "24/7 Security", "Power Backup"]
    }
];
