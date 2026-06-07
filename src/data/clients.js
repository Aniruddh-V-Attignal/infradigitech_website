/**
 * Clients displayed in the carousel.
 *
 * All logos now load from /public/images/clients/<filename>.
 *
 * To add or replace a client logo:
 *   1. Drop a PNG / SVG / JPG into:  public/images/clients/<filename>
 *      Recommended: PNG with transparent background, ~500x200 px,
 *      logo centered, no surrounding padding.
 *   2. If the filename below doesn't match yours, edit the `logo` field
 *      to match - the carousel will pick it up automatically.
 *
 * Graceful fallback: if a file is missing or fails to load, the carousel
 * renders the client's initials (e.g. "SBI", "HDFC") instead of breaking
 * - so it is safe to commit a name before the image file is in place.
 */

export const clients = [
  // BFSI / Banking & Finance
  { name: "State Bank of India",            logo: "/images/clients/state-bank-of-india.jpeg",       url: "https://sbi.co.in",         sector: "bfsi" },
  { name: "Canara Bank",                    logo: "/images/clients/canara-bank.png",               url: "https://canarabank.com",    sector: "bfsi" },
  { name: "HDFC Bank",                      logo: "/images/clients/hdfc-bank.png",                 url: "https://hdfcbank.com",      sector: "bfsi" },
  { name: "ICICI Bank",                     logo: "/images/clients/icici-bank.png",                url: "https://icicibank.com",     sector: "bfsi" },
  { name: "Karnataka Bank",                 logo: "/images/clients/karnataka-bank.png",            url: "https://karnatakabank.com", sector: "bfsi" },
  { name: "Bank of Baroda",                 logo: "/images/clients/bank-of-baroda.png",            url: "",                          sector: "bfsi" },
  { name: "Union Bank of India",            logo: "/images/clients/union-bank-of-india.png",       url: "",                          sector: "bfsi" },
  { name: "Punjab National Bank",           logo: "/images/clients/punjab-national-bank.jpg",      url: "",                          sector: "bfsi" },
  { name: "Bank of India",                  logo: "/images/clients/Bank-of-india.png",      url: "",                          sector: "bfsi" },
  { name: "India Post",                  logo: "/images/clients/india-post.png",      url: "",                          sector: "bfsi" },


  // Healthcare
  { name: "Manipal Hospitals",              logo: "/images/clients/manipal-hospitals.jpg",         url: "",                          sector: "healthcare" },
  { name: "Apollo Hospitals",               logo: "/images/clients/apollo-hospitals.png",          url: "",                          sector: "healthcare" },
  { name: "Narayana Health",                logo: "/images/clients/narayana-health.png",           url: "",                          sector: "healthcare" },
  { name: "Fortis Healthcare",              logo: "/images/clients/fortis-healthcare.png",         url: "",                          sector: "healthcare" },
  { name: "Rainbow Hospital",               logo: "/images/clients/rainbow-hospitals.png",         url: "",                          sector: "healthcare" },
  { name: "Aster Hospital",                 logo: "/images/clients/aster-dm-healthcare.png",       url: "",                          sector: "healthcare" },
  { name: "Sparsh Hospital",                logo: "/images/clients/sparsh-hospital.png",           url: "",                          sector: "healthcare" },
  { name: "Commando Hospital",              logo: "/images/clients/commando-hospital.jpg",           url: "",                          sector: "healthcare" },
  { name: "Jain Hospital",                  logo: "/images/clients/jain-hospital.png",           url: "",                          sector: "healthcare" },
  { name: "St John's Hospital",                logo: "/images/clients/st-John's-hospital.jpg",           url: "",                          sector: "healthcare" },
  { name: "St Philomena Hospital",                logo: "/images/clients/St-Philomena-hospital.jpg",           url: "",                          sector: "healthcare" },
  { name: "St Martha's Hospital",                logo: "/images/clients/st-martha's-hospital.png",           url: "",                          sector: "healthcare" },
  { name: "LIC",                logo: "/images/clients/lic.jpg",           url: "",                          sector: "healthcare" },
  { name: "jindal Hospital",                logo: "/images/clients/jindal-hospital.jpg",           url: "",                          sector: "healthcare" },
  
  
  // Hospitality
  { name: "Pizza Hut",                      logo: "/images/clients/pizza-hut.png",                 url: "",                          sector: "hospitality" },
  { name: "Dominos Pizza",                      logo: "/images/clients/dominos.jpg",                 url: "",                          sector: "hospitality" },

  // Airports / Transport
  { name: "Bangalore International Airport", logo: "/images/clients/kempegowda-international-airport.jpg", url: "",                  sector: "airports" },
  { name: "Aadhar", logo: "/images/clients/aadhar.jpg", url: "",                  sector: "airports" },
   { name: "MRTH", logo: "/images/clients/mrth.png", url: "",                  sector: "airports" },



  // Corporate / Factories / Industrial
  { name: "Infosys",                        logo: "/images/clients/infosys.png",                   url: "",                          sector: "corporate" },
  { name: "Wipro",                          logo: "/images/clients/wipro.png",                     url: "",                          sector: "corporate" },
  { name: "Toyota",                         logo: "/images/clients/toyota.png",                    url: "",                          sector: "factories" },
  { name: "TVS Motors",                     logo: "/images/clients/tvs-motors.png",                url: "",                          sector: "factories" },
  { name: "Biocon",                         logo: "/images/clients/biocon.png",                    url: "",                          sector: "factories" },
  { name: "Ashok Leyland",                  logo: "/images/clients/ashok-leyland.jpg",             url: "",                          sector: "factories" },
  { name: "GE",                             logo: "/images/clients/general-electric.jpg",          url: "",                          sector: "factories" },
];
