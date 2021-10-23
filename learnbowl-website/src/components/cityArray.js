const cityArray = [
    "Mumbai",
    "Bengaluru",
    "Kolkata",
    "Chennai",
    "Ahmedabad",
    "Hyderabad",
    "Pune",
    "Surat",
    "Kanpur",
    "Jaipur",
    "Navi Mumbai",
    "Lucknow",
    "Nagpur",
    "Indore",
    "Patna",
    "Bhopal",
    "Ludhiana",
    "Tirunelveli",
    "Agra",
    "Vadodara",
    "Gorakhpur",
    "Nashik",
    "Pimpri",
    "Kalyan",
    "Thane",
    "Meerut",
    "Nowrangapur",
    "Faridabad",
    "Ghaziabad",
    "Dombivli",
    "Rajkot",
    "Varanasi",
    "Amritsar",
    "Allahabad",
    "Visakhapatnam",
    "Teni",
    "Jabalpur",
    "Haora",
    "Aurangabad",
    "Shivaji Nagar",
    "Solapur",
    "Srinagar",
    "Chandigarh",
    "Coimbatore",
    "Jodhpur",
    "Madurai",
    "Guwahati",
    "Gwalior",
    "Vijayawada",
    "Mysore",
    "Ranchi",
    "Hubli",
    "Jalandhar",
    "Thiruvananthapuram",
    "Salem",
    "Tiruchirappalli",
    "Kota",
    "Bhubaneshwar",
    "Aligarh",
    "Bareilly",
    "Moradabad",
    "Bhiwandi",
    "Raipur",
    "Gorakhpur",
    "Bhilai",
    "Jamshedpur",
    "Borivli",
    "Cochin",
    "Amravati",
    "Sangli",
    "Cuttack",
    "Bikaner",
    "Warangal",
    "Bhavnagar",
    "Nanded",
    "Raurkela",
    "Guntur",
    "Dehra Dun",
    "Bhayandar",
    "Durgapur",
    "Ajmer",
    "Ulhasnagar",
    "Kolhapur",
    "Shiliguri",
    "Bilimora",
    "Karol Bagh",
    "Asansol",
    "Jamnagar",
    "Saharanpur",
    "Gulbarga",
    "Bhatpara",
    "Jammu",
    "Kurnool",
    "Ujjain",
    "Ramgundam",
    "Shyamnagar",
    "Nangi",
    "Kozhikode",
    "Malegaon",
    "Davangere",
    "Jalgaon",
    "Akola",
    "Belgaum",
    "Gaya",
    "Udaipur",
    "Korba",
    "Bokaro",
    "Mangalore",
    "Jhansi",
    "Thoothukudi",
    "Nellore",
    "Tiruppur",
    "Kollam",
    "Panihati",
    "Ahmadnagar",
    "Dhulia",
    "Bhagalpur",
    "Punasa",
    "Muzaffarnagar",
    "Latur",
    "Kukatpalli",
    "Ambattur",
    "Bellary",
    "Muzaffarpur",
    "Kamarhati",
    "Mathura",
    "Patiala",
    "Chanda",
    "Bhilwara",
    "Trichur",
    "Brahmapur",
    "Shahjanpur",
    "Shimoga",
    "New Delhi",
    "Rohtak",
    "Tumkur",
    "Firozabad",
    "Nizamabad",
    "Kulti",
    "Rajahmundry",
    "Barddhaman",
    "Barasat",
    "Bali",
    "Hisar",
    "Rampur",
    "Noida",
    "Greater Noida",
    "Kakinada",
    "Panipat",
    "Parbhani",
    "Darbhanga",
    "Alwar",
    "Bilaspur",
    "Ichalkaranji",
    "Bijapur",
    "Aizawl",
    "Jalna",
    "Lal Bahadur Nagar",
    "Dewas",
    "Baranagar",
    "Gajuwaka",
    "Satna",
    "Etawah",
    "Durg",
    "Naihati",
    "Tirupati",
    "Sonipat",
    "Avadi",
    "Tiruvottiyur",
    "Saugor",
    "Mau",
    "Bihar Sharif",
    "Hapur",
    "Bathinda",
    "Farrukhabad",
    "Anantapur",
    "Barasat",
    "Ratlam",
    "Ramagundam",
    "Ganganagar",
    "Bharatpur",
    "Karimnagar",
    "Puducherry",
    "Shrirampur",
    "Raichur",
    "Quthbullapur",
    "Karnal",
    "Arrah",
    "Imphal",
    "Gosaba",
    "Mirzapur",
    "Kharagpur",
    "Dhanbad",
    "Tanjore",
    "Amarnath",
    "Nagercoil",
    "Pali",
    "Yamunanagar",
    "Rewa",
    "Secunderabad",
    "Bidar",
    "Agartala",
    "Monghyr",
    "Burhanpur",
    "Nadiad",
    "Chapra",
    "Dindigul",
    "Panchkula",
    "Sikar",
    "Bulandshahr",
    "Purnia",
    "Hospet",
    "Gurgaon",
    "Sambhal",
    "Gandhinagar",
    "Murwara",
    "Nangloi Jat",
    "Machilipatnam",
    "Katihar",
    "Bhiwani",
    "Kultali",
    "Raebareli",
    "Haridwar",
    "Singrauli",
    "Junagadh",
    "Sujangarh",
    "Ellore",
    "Bhusaval",
    "Khandwa",
    "Bahraigh",
    "Sirsa",
    "Chandannagar",
    "Baharampur",
    "Surendranagar",
    "Vizianagaram",
    "Proddatur",
    "Vellore",
    "Hugli",
    "Alleppey",
    "Amroha",
    "Tambaram",
    "Pathankot",
    "Bhind",
    "Shimla",
    "Ongole",
    "Gadag-Betageri",
    "Puri",
    "Haldia",
    "Khammam",
    "Raiganj",
    "Ingraj Bazar",
    "Jaunpur",
    "Fatehpur",
    "Gandhidham",
    "Nandyal",
    "Udupi",
    "Loni",
    "Sitapur",
    "Shivpuri",
    "Bhadravati",
    "Adoni",
    "Veraval",
    "Sambalpur",
    "Gadag",
    "Unnao",
    "Budaun",
    "Jind",
    "Madhyamgram",
    "Jamuria",
    "Jaigaon",
    "Cuddalore",
    "Orai",
    "Hoshiarpur",
    "Pallavaram",
    "Hanumangarh",
    "Kanchipuram",
    "Alandur",
    "Guna",
    "Bahadurgarh",
    "Bharuch",
    "Medinipur",
    "Fyzabad",
    "Dinapore",
    "Silchar",
    "Banda",
    "Morena",
    "Tonk",
    "Raj-Nandgaon",
    "Serilingampalle",
    "Virar",
    "Malkajgiri",
    "Shantipur",
    "Barakpur",
    "Erode",
    "Ambala",
    "Krishnanagar",
    "Saharsa",
    "Batala",
    "Bhimavaram",
    "Balurghat",
    "Kaithal",
    "Lakhimpur",
    "Hazaribagh",
    "Vidisha",
    "Haldwani",
    "Habra",
    "Kumbakonam",
    "Porbandar",
    "Chitradurga",
    "Thanesar",
    "Tiruvannamalai",
    "Anand",
    "Kanchrapara",
    "Mahbubnagar",
    "Dimapur",
    "Robertsonpet",
    "Chhindwara",
    "Mandya",
    "Bankura",
    "Hajipur",
    "Gonda City",
    "Bhuj",
    "Hindupur",
    "Shillong",
    "Palghat",
    "Godhra",
    "Kishangarh",
    "Raniganj",
    "Pilibhit",
    "Beawar",
    "Abohar",
    "Moga",
    "Dehri",
    "Deoria",
    "Hassan",
    "Khardah",
    "Yavatmal",
    "Halisahar",
    "Panvel",
    "Titagarh",
    "Cuddapah",
    "Bettiah",
    "Hathras",
    "Lalitpur",
    "Kolar",
    "Mandsaur",
    "Gondia",
    "Rajapalaiyam",
    "Darjiling",
    "Mohali",
    "Palanpur",
    "Dam Dam",
    "Hardoi",
    "Puruliya",
    "Dibrugarh",
    "Palwal",
    "Nalgonda",
    "Bhadreswar",
    "Vejalpur",
    "Chikmagalur",
    "Raigarh",
    "Guntakal Junction",
    "Gangapur",
    "Deoli",
    "Siwan",
    "Damoh",
    "Adilabad",
    "Chicacole",
    "Uppal Kalan",
    "Jetpur",
    "Morbi",
    "Patan",
    "Khanna",
    "Botad",
    "Rishra",
    "Azamgarh",
    "Yelahanka",
    "Gudivada",
    "Baidyabati",
    "Basti",
    "Balasore",
    "Dharmavaram",
    "Maler Kotla",
    "Wardha",
    "Jhunjhunun",
    "Satara",
    "Chanduasi",
    "Mothihari",
    "Chas",
    "Pudukkottai",
    "Rewari",
    "Port Blair",
    "Suriapet",
    "Bangaon",
    "Chhatarpur",
    "Ashoknagar Kalyangarh",
    "Achalpur",
    "Navadwip",
    "Barsi",
];
export default cityArray;