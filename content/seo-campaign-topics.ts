export type CampaignHub = 'patna' | 'bihar' | 'industries' | 'campaign-guides'

export type CampaignTopic = {
  hub: CampaignHub
  slug: string
  keyword: string
  title: string
  plan: string
  check: string
  example?: string
  existingPath?: string
}

export const campaignTopics: readonly CampaignTopic[] = [
  {
    "hub": "patna",
    "slug": "auto-branding-patna",
    "keyword": "auto branding in patna",
    "title": "Auto Branding in Patna",
    "plan": "Compare sticker, rear-panel and canopy placements before booking a local fleet.",
    "check": "Bring one offer, your preferred catchment and a deadline to the campaign brief.",
    "existingPath": "/"
  },
  {
    "hub": "patna",
    "slug": "auto-rickshaw-advertising",
    "keyword": "auto rickshaw advertising in patna",
    "title": "Auto Rickshaw Advertising in Patna",
    "plan": "Choose a panel based on the message a commuter can read as the auto passes.",
    "check": "Approve a full-size proof and confirm who records fitted vehicles.",
    "existingPath": "/services/auto-rickshaw-advertising-patna"
  },
  {
    "hub": "patna",
    "slug": "price",
    "keyword": "auto branding in patna price",
    "title": "Auto Branding Price in Patna",
    "plan": "Compare published per-vehicle rates by format and billing period.",
    "check": "Check whether print, fitting, monitoring and taxes are separately priced.",
    "existingPath": "/rates"
  },
  {
    "hub": "patna",
    "slug": "campaign-cost",
    "keyword": "auto branding in patna cost",
    "title": "Auto Branding Cost in Patna",
    "plan": "Build a budget from approved vehicle count, campaign dates and production charges.",
    "check": "Compare two quotes on the same fleet size, placement and reporting scope.",
    "existingPath": "/advertising/how-much-does-auto-branding-cost-in-patna"
  },
  {
    "hub": "patna",
    "slug": "contact",
    "keyword": "auto branding in patna contact number",
    "title": "Auto Branding Patna Contact Number",
    "plan": "Reach the campaign desk with your launch date, vehicle format and neighbourhood.",
    "check": "Ask when the first written scope and availability check can be shared.",
    "existingPath": "/contact"
  },
  {
    "hub": "patna",
    "slug": "agency",
    "keyword": "auto advertising agency in patna",
    "title": "Auto Advertising Agency in Patna",
    "plan": "Evaluate agencies on installation records, named contacts and replacement terms.",
    "check": "Request a redacted sample report before committing to the full fleet.",
    "existingPath": "/advertising/auto-branding-agency-patna"
  },
  {
    "hub": "patna",
    "slug": "hood-branding",
    "keyword": "auto hood branding in patna",
    "title": "Auto Hood Branding in Patna",
    "plan": "Use a canopy when your idea needs a larger visual or repeated side visibility.",
    "check": "Approve each visible panel separately and verify seam and opening positions.",
    "existingPath": "/services/auto-hood-branding-patna"
  },
  {
    "hub": "patna",
    "slug": "rear-panel",
    "keyword": "auto back panel advertising patna",
    "title": "Auto Back Panel Advertising in Patna",
    "plan": "Put a short headline and single enquiry action on a rear panel.",
    "check": "Check the mounting surface and protect plates, lights and required markings.",
    "existingPath": "/services/auto-back-panel-advertising-patna"
  },
  {
    "hub": "patna",
    "slug": "e-rickshaw",
    "keyword": "e rickshaw advertising in patna",
    "title": "E-Rickshaw Advertising in Patna",
    "plan": "Match side and rear placements to vehicle design and permitted operating areas.",
    "check": "Compare a photo of each selected vehicle type before signing off on production.",
    "existingPath": "/advertising/e-rickshaw-advertising-patna"
  },
  {
    "hub": "patna",
    "slug": "transit-media",
    "keyword": "transit media advertising patna",
    "title": "Transit Media Advertising in Patna",
    "plan": "Select autos, e-rickshaws or larger transit formats according to route coverage and creative needs.",
    "check": "Compare mobile coverage and fixed visibility using the same campaign brief.",
    "example": "If a store needs visits from nearby shoppers while a launch needs broad awareness, quote a neighbourhood auto plan and a corridor-based transit plan separately. Compare the customer action each format can support."
  },
  {
    "hub": "patna",
    "slug": "rates-bihar",
    "keyword": "auto rickshaw branding rates bihar",
    "title": "Auto Rickshaw Branding Rates Across Bihar",
    "plan": "Compare quotes using separate city rows for fleet, logistics and reporting.",
    "check": "Ask for a city-by-city invoice breakdown and keep Patna rate examples separate.",
    "example": "For a Patna–Gaya brief, request one worksheet with separate production, installation, monitoring and replacement cells for each city. A combined total hides the assumptions that change between markets."
  },
  {
    "hub": "patna",
    "slug": "outdoor-options",
    "keyword": "best outdoor advertising in patna",
    "title": "Outdoor Advertising Options in Patna",
    "plan": "Compare transit, fixed placements and venue media by how buyers encounter the message.",
    "check": "Choose a launch site, repeat routes or a combined plan based on your actual objective.",
    "existingPath": "/advertising/best-outdoor-ad-agency-patna-bihar"
  },
  {
    "hub": "patna",
    "slug": "mobile-van",
    "keyword": "mobile van advertising in patna",
    "title": "Mobile Van Advertising in Patna",
    "plan": "Assess a planned vehicle route, parked activation stops and production format.",
    "check": "Request an operating schedule and written confirmation of permitted stops.",
    "existingPath": "/advertising/mobile-advertising-van-vs-auto-branding-patna"
  },
  {
    "hub": "patna",
    "slug": "vinyl-wrap",
    "keyword": "vinyl auto wrap advertising patna",
    "title": "Full Vinyl Auto Wrap Advertising in Patna",
    "plan": "Check body condition, removable panels and material compatibility before designing a wrap.",
    "check": "Ask who handles removal and clarifies the condition of the vehicle on return.",
    "example": "For a product launch with a large pack shot, test it against a photo of each side of the vehicle. Ask the installer to identify gaps between removable panels and show where artwork may need a separate print file."
  },
  {
    "hub": "patna",
    "slug": "seat-back",
    "keyword": "auto seat back advertising patna",
    "title": "Auto Seat Back Advertising in Patna",
    "plan": "Use in-vehicle space for a readable service prompt where fitting is agreed.",
    "check": "Check whether the mount affects seats, access or passenger movement before ordering.",
    "example": "For a local repair service, choose a short number that a passenger can save after seeing the seat-back panel. Ask how the fitting is removed and who checks wear between campaign dates."
  },
  {
    "hub": "patna",
    "slug": "flyer-distribution",
    "keyword": "pamphlet distribution in auto patna",
    "title": "Auto Flyer Distribution in Patna",
    "plan": "Decide whether handouts need a staffed distribution point or can be offered on selected rides.",
    "check": "Agree who distributes copies and record quantities issued, handed out and returned.",
    "example": "For a one-week opening, agree where the flyers will be offered and print a branch-specific redemption code. Count returned stock by batch and compare code use rather than treating distributed copies as leads."
  },
  {
    "hub": "patna",
    "slug": "printing",
    "keyword": "auto branding printing press patna",
    "title": "Auto Branding Printing in Patna",
    "plan": "Compare film and canopy print proofs using the actual vehicle template.",
    "check": "Request a colour proof and confirm trim, batch quantities and replacement lead time.",
    "example": "For a mixed order of canopy and rear-panel artwork, circulate separate proof files. Mark the material, finished size, orientation and matching vehicle reference on each approval to prevent batch mix-ups."
  },
  {
    "hub": "patna",
    "slug": "low-budget",
    "keyword": "low cost advertising in patna",
    "title": "Low-Cost Local Advertising in Patna",
    "plan": "Run a pilot around one outlet and one customer action before increasing vehicle count.",
    "check": "Put a cap on initial production and use a dedicated response code to assess results.",
    "existingPath": "/advertising/low-cost-transit-advertising-patna"
  },
  {
    "hub": "patna",
    "slug": "btl",
    "keyword": "btl marketing agency in patna",
    "title": "BTL Marketing and Auto Branding in Patna",
    "plan": "Connect a moving ad to a staffed demo, shop opening or scheduled activation.",
    "check": "Assign separate owners for the fleet, the event site and lead follow-up.",
    "example": "For a showroom demo, run the vehicle artwork with venue and date, and use a separate event desk code. Track walk-ins after the demo separately from fleet impressions."
  },
  {
    "hub": "patna",
    "slug": "local-fleet",
    "keyword": "auto rickshaw ad agency near me",
    "title": "Find an Auto Advertising Fleet in Patna",
    "plan": "Evaluate availability by preferred catchment and dates, including night or weekend limits.",
    "check": "Ask for the dispatch contact and approval process before paying a deposit.",
    "example": "For a three-neighbourhood launch, request a small sample vehicle list with operating zones. Use the first week to check actual fit and driver availability before reserving additional vehicles."
  },
  {
    "hub": "patna",
    "slug": "boring-road",
    "keyword": "auto branding in boring road patna",
    "title": "Auto Branding on Boring Road, Patna",
    "plan": "Build a coaching or retail brief around the stretch customers actually use.",
    "check": "Use the branch landmark and enquiry deadline on the same proof.",
    "existingPath": "/locations/boring-road"
  },
  {
    "hub": "patna",
    "slug": "bailey-road",
    "keyword": "auto branding in bailey road patna",
    "title": "Auto Branding on Bailey Road, Patna",
    "plan": "Choose a segment for branch visits, institutional audiences or property enquiries.",
    "check": "Specify a start point, an end point and the direction customers approach from.",
    "existingPath": "/locations/bailey-road"
  },
  {
    "hub": "patna",
    "slug": "kankarbagh",
    "keyword": "auto branding in kankarbagh patna",
    "title": "Auto Branding in Kankarbagh, Patna",
    "plan": "Plan around a clinic, coaching centre or retail catchment rather than the whole neighbourhood.",
    "check": "Use a short lane or landmark reference and track calls on one dedicated number.",
    "existingPath": "/locations/kankarbagh"
  },
  {
    "hub": "patna",
    "slug": "danapur",
    "keyword": "auto branding in danapur patna",
    "title": "Auto Branding in Danapur, Patna",
    "plan": "Separate residential markets from station and cantonment-oriented travel when briefing the fleet.",
    "check": "Give the team the target approach roads and your customer appointment hours.",
    "existingPath": "/locations/danapur"
  },
  {
    "hub": "patna",
    "slug": "raja-bazar",
    "keyword": "auto branding in raja bazar patna",
    "title": "Auto Branding in Raja Bazar, Patna",
    "plan": "Use the market or IGIMS-side catchment as a reference for retail or appointment messaging.",
    "check": "Test whether the offer can be understood with the branch name and one nearby landmark.",
    "example": "An appointment campaign can carry one branch name and nearby landmark. Ask whether the available routes pass the catchment during appointment hours, and track confirmed bookings separately from general calls."
  },
  {
    "hub": "patna",
    "slug": "patna-junction",
    "keyword": "auto branding in patna junction",
    "title": "Auto Branding Around Patna Junction",
    "plan": "Design for travellers who may only encounter the message once during a transfer.",
    "check": "For a hotel or shop, use a clear exit-side landmark or short number.",
    "existingPath": "/locations/patna-junction"
  },
  {
    "hub": "patna",
    "slug": "gandhi-maidan",
    "keyword": "auto branding in gandhi maidan patna",
    "title": "Auto Branding Around Gandhi Maidan",
    "plan": "Build a date-specific brief for an event, exhibition or nearby store opening.",
    "check": "Use a venue gate and date on the design, and reconcile vehicle timings with the event.",
    "example": "For an exhibition near Gandhi Maidan, use a venue gate and event date in large type. Confirm the proposed route under normal operations and ask how any event-day detours would be handled."
  },
  {
    "hub": "patna",
    "slug": "ashok-rajpath",
    "keyword": "auto branding in ashok rajpath patna",
    "title": "Auto Branding on Ashok Rajpath, Patna",
    "plan": "Separate university and hospital trips when deciding what message to run.",
    "check": "Check where your intended audience enters the corridor and agree a realistic operating stretch.",
    "example": "A coaching brief may need an admissions deadline, while a clinic brief may need opening hours. Run separate proofs if both share this corridor, and record responses on separate numbers."
  },
  {
    "hub": "patna",
    "slug": "phulwari-sharif",
    "keyword": "auto branding in phulwari sharif patna",
    "title": "Auto Branding in Phulwari Sharif",
    "plan": "Create a local brief around market visits or the AIIMS approach catchment.",
    "check": "Validate which vehicles can serve the chosen stretch before printing directional artwork.",
    "example": "For a service around the AIIMS approach, lead with an address cue and verified opening hours. Request a fitting plan by vehicle type before asking for a combined Phulwari fleet."
  },
  {
    "hub": "patna",
    "slug": "mithapur",
    "keyword": "auto branding in mithapur patna",
    "title": "Auto Branding in Mithapur, Patna",
    "plan": "Plan for neighbourhood trips around Mithapur and Jakkanpur with separate commuter and student messages where needed.",
    "check": "Use a clear shop or campus landmark instead of a citywide headline.",
    "example": "For a shop near Mithapur, choose one approach and use a landmark buyers can recognise after the trip. Track the store offer separately from any student-facing campaign."
  },
  {
    "hub": "patna",
    "slug": "anisabad",
    "keyword": "auto branding in anisabad patna",
    "title": "Auto Branding in Anisabad, Patna",
    "plan": "Choose the local market side or Beur approach as the anchor for your pilot.",
    "check": "Ask for a route sketch and check that expected operating times align with your branch hours.",
    "example": "An outlet between Anisabad and Beur can test a pickup or appointment offer on vehicles serving the nearer end. Use a response code linked to the outlet and compare only within that service radius."
  },
  {
    "hub": "patna",
    "slug": "patliputra-colony",
    "keyword": "auto branding in patliputra colony",
    "title": "Auto Branding in Patliputra Colony",
    "plan": "Distinguish residential customers from workers travelling toward the industrial area.",
    "check": "Use a morning or evening allocation only after the operator confirms typical trips.",
    "example": "A lunch or shift-service campaign should use a confirmed operating window. Ask whether the available autos typically serve the residential or work-side catchment before adding time-specific artwork."
  },
  {
    "hub": "patna",
    "slug": "digha",
    "keyword": "auto branding in digha patna",
    "title": "Auto Branding in Digha, Patna",
    "plan": "Compare Ashiana–Digha neighbourhood journeys with trips toward the bridge approach.",
    "check": "Make the creative legible even if a commuter has no reason to stop or scan immediately.",
    "example": "For an outlet on the Ashiana–Digha side, ask whether the selected autos turn toward the bridge or continue into neighbourhood streets. Design for the route customers can use to reach the outlet."
  },
  {
    "hub": "patna",
    "slug": "rajendra-nagar",
    "keyword": "auto branding in rajendra nagar patna",
    "title": "Auto Branding in Rajendra Nagar, Patna",
    "plan": "Choose a neighbourhood or rail-side brief according to your service location.",
    "check": "Use appointment messaging for clinics and a usable deadline for admissions.",
    "existingPath": "/locations/rajendra-nagar"
  },
  {
    "hub": "patna",
    "slug": "boring-canal-road",
    "keyword": "auto branding in boring canal road",
    "title": "Auto Branding on Boring Canal Road",
    "plan": "Plan a café, retail or offer campaign around a specific canal-road stretch.",
    "check": "Use an offer code distinct from Boring Road to compare enquiry sources.",
    "example": "A weekend café offer can use a two-word benefit and a canal-road landmark. Keep the copy distinct from the nearby Boring Road version so enquiries can be attributed by offer."
  },
  {
    "hub": "patna",
    "slug": "exhibition-road",
    "keyword": "auto branding in exhibition road patna",
    "title": "Auto Branding on Exhibition Road",
    "plan": "Focus on the exact showroom, office or exhibition approach you want people to recognise.",
    "check": "Keep the product name, date and enquiry action readable on one panel.",
    "example": "For an electronics launch, show one model or product family and an exact showroom cue. Confirm whether the route runs near the store on the dates buyers can see a demo."
  },
  {
    "hub": "patna",
    "slug": "fraser-road",
    "keyword": "auto branding in fraser road patna",
    "title": "Auto Branding on Fraser Road, Patna",
    "plan": "Use Dak Bungalow as a planning reference for a central retail or service campaign.",
    "check": "State the branch side or cross street so the creative is useful after the exposure.",
    "example": "For a central retail launch, choose a single Fraser Road landmark and a short expiry date. Ask whether the fleet covers the approach your customers use near Dak Bungalow."
  },
  {
    "hub": "patna",
    "slug": "saguna-more",
    "keyword": "auto branding in saguna more patna",
    "title": "Auto Branding at Saguna More, Patna",
    "plan": "Treat the junction as an approach point, then decide which outbound corridor serves the buyer.",
    "check": "Use separate artwork or response codes if comparing multiple approaches.",
    "example": "A property campaign can reserve a separate QR or phone extension for each confirmed Saguna More approach. Compare appointment outcomes instead of estimating the value of all passing traffic."
  },
  {
    "hub": "patna",
    "slug": "gola-road",
    "keyword": "auto branding in gola road patna",
    "title": "Auto Branding on Gola Road, Patna",
    "plan": "Focus on school admissions, apartment services or property visits around a specific pocket.",
    "check": "Choose one gate, branch or site marker and check whether the route can pass it repeatedly.",
    "example": "For school admissions near Gola Road, show an open-day date and gate. Check with the operator whether a neighbourhood route passes the gate or merely runs on a nearby road."
  },
  {
    "hub": "patna",
    "slug": "bihta",
    "keyword": "auto branding in bihta patna",
    "title": "Auto Branding in Bihta, Patna",
    "plan": "Choose an education, industrial or town-market objective before selecting the fleet.",
    "check": "Separate staff-shift, campus and retail schedules in the proposal.",
    "example": "For a training course in Bihta, separate industrial shift workers from a campus audience. Use a schedule and contact route that reflect when applicants can act on the message."
  },
  {
    "hub": "patna",
    "slug": "patna-city",
    "keyword": "auto branding in patna city",
    "title": "Auto Branding in Patna City Markets",
    "plan": "Define whether the message serves Chowk retail shoppers or Marufganj trade buyers.",
    "check": "Use short bilingual artwork that remains legible along compact market lanes.",
    "example": "For a Marufganj trade offer, use a dealer enquiry number and one product category. For Chowk retail, use a nearby landmark and customer-facing hours instead."
  },
  {
    "hub": "patna",
    "slug": "agamkuan",
    "keyword": "auto branding in agamkuan patna",
    "title": "Auto Branding in Agamkuan, Patna",
    "plan": "Choose between a neighbourhood objective and visibility near the Zero Mile approach.",
    "check": "Confirm proximity to your outlet and avoid assuming bypass traffic can visit it easily.",
    "example": "For a local outlet near the Zero Mile approach, test a district-facing directional message against a neighbourhood offer. Ask which vehicles can repeat the route within the planned duration."
  },
  {
    "hub": "patna",
    "slug": "sipara",
    "keyword": "auto branding in sipara patna",
    "title": "Auto Branding in Sipara, Patna",
    "plan": "Plan around a local service catchment or an approach from Punpun Road.",
    "check": "Give the operator the delivery or appointment radius before requesting vehicle allocation.",
    "example": "For a delivery business, compare the Sipara operating area against the zones the business can actually serve. Print one order number and include a short service-area cue."
  },
  {
    "hub": "patna",
    "slug": "shastri-nagar",
    "keyword": "auto branding in shastri nagar patna",
    "title": "Auto Branding in Shastri Nagar, Patna",
    "plan": "Break the target into residential and branch-facing pockets around Shastri Nagar or Patel Nagar.",
    "check": "Test a branch reminder separately from a price-led store offer.",
    "example": "For a branch reminder, choose an address marker and avoid putting multiple neighbourhood names on the same compact sticker. Log callbacks under a branch-specific reference."
  },
  {
    "hub": "patna",
    "slug": "rajeev-nagar",
    "keyword": "auto branding in rajeev nagar patna",
    "title": "Auto Branding in Rajeev Nagar, Patna",
    "plan": "Test a compact neighbourhood message around Rajeev Nagar or Keshri Nagar.",
    "check": "Check passenger-auto or e-rickshaw fit before locking the creative dimensions.",
    "example": "For a home-service pilot, start with one service pocket and a single booking number. Confirm whether the preferred autos or e-rickshaws can fit the artwork before paying for print."
  },
  {
    "hub": "patna",
    "slug": "kumhrar",
    "keyword": "auto branding in kumhrar patna",
    "title": "Auto Branding in Kumhrar, Patna",
    "plan": "Choose feeder streets for a Kumhrar or Sandalpur shop, clinic or local service.",
    "check": "Tie the message to one point of sale and track use of a neighbourhood-specific code.",
    "example": "For a store near Kumhrar, use a Sandalpur version only if the proposed fleet covers that approach. Record both routes in the order so the print quantities match the allocation."
  },
  {
    "hub": "patna",
    "slug": "mahendru",
    "keyword": "auto branding in mahendru patna",
    "title": "Auto Branding in Mahendru, Patna",
    "plan": "Plan a student-facing offer with a clear local landmark in Mahendru or Sultanganj.",
    "check": "Separate time-limited admissions or course messages from evergreen brand artwork.",
    "example": "For admissions in Mahendru, ask the client for application dates before choosing the media window. Use a distinct course code when the same institution also advertises in another neighbourhood."
  },
  {
    "hub": "patna",
    "slug": "khagaul",
    "keyword": "auto branding in khagaul patna",
    "title": "Auto Branding in Khagaul, Patna",
    "plan": "Distinguish railway-side audience movement from everyday town-market trips.",
    "check": "For a shop campaign, agree whether the operating zone includes the exact access road.",
    "example": "For Khagaul retail, compare vehicles serving the railway approach with those serving the market. A directional line for rail passengers may need a different landmark from a local shopper version."
  },
  {
    "hub": "patna",
    "slug": "naubatpur",
    "keyword": "auto branding in naubatpur patna",
    "title": "Auto Branding in Naubatpur and Bikram",
    "plan": "Plan around one market catchment at a time when comparing the two towns.",
    "check": "Ask for a separate local dispatch window and vehicle count for each location.",
    "example": "For an agricultural-supply offer, use the local dealer contact in each town. Allow a separate print and fit schedule when the operator cannot service Naubatpur and Bikram from the same point."
  },
  {
    "hub": "patna",
    "slug": "barh-bakhtiyarpur",
    "keyword": "auto branding in barh bakhtiyarpur",
    "title": "Auto Branding in Barh and Bakhtiyarpur",
    "plan": "Plan separate town allocations for Barh, Bakhtiyarpur or Fatuha if the campaign spans eastern Patna district.",
    "check": "Break out print delivery, fitting and installation verification by town.",
    "example": "For a three-town trade promotion, group artwork by local branch and request reports by town. Reconcile installation dates rather than using the same start date for every vehicle by default."
  },
  {
    "hub": "bihar",
    "slug": "statewide",
    "keyword": "auto branding in bihar",
    "title": "Auto Branding Across Bihar",
    "plan": "Build a city-by-city plan with separate local confirmation before committing a state budget.",
    "check": "Use a shared creative master and reserve space for an eligible branch or city-specific contact.",
    "existingPath": "/advertising/auto-rickshaw-advertising-in-bihar"
  },
  {
    "hub": "bihar",
    "slug": "muzaffarpur",
    "keyword": "auto branding in muzaffarpur",
    "title": "Auto Branding in Muzaffarpur",
    "plan": "Separate wholesale, student and clinic trip patterns in the campaign brief.",
    "check": "For a distributor launch, anchor the message to a trade contact and record dealer enquiries.",
    "existingPath": "/locations/muzaffarpur"
  },
  {
    "hub": "bihar",
    "slug": "gaya",
    "keyword": "auto branding in gaya",
    "title": "Auto Branding in Gaya and Bodh Gaya",
    "plan": "Choose local resident visibility in Gaya or visitor-oriented messaging around Bodh Gaya.",
    "check": "Use separate contact or location cues and request availability for each catchment.",
    "existingPath": "/locations/gaya"
  },
  {
    "hub": "bihar",
    "slug": "bhagalpur",
    "keyword": "auto branding in bhagalpur",
    "title": "Auto Branding in Bhagalpur",
    "plan": "Decide whether the campaign is for textile trade, education or local retail audiences.",
    "check": "Ask for a report that distinguishes fitted autos from approved production quantity.",
    "existingPath": "/locations/bhagalpur"
  },
  {
    "hub": "bihar",
    "slug": "darbhanga",
    "keyword": "auto branding in darbhanga",
    "title": "Auto Branding in Darbhanga",
    "plan": "Choose a market, education or transport catchment before discussing formats.",
    "check": "Keep a Mithila-oriented creative brief readable in the language your customers prefer.",
    "example": "For a course or retail campaign, choose one Darbhanga route and test whether the proof reads well in the audience’s preferred language. Assign a local callback contact for enquiries."
  },
  {
    "hub": "bihar",
    "slug": "purnia",
    "keyword": "auto branding in purnia",
    "title": "Auto Branding in Purnia",
    "plan": "Separate distributor outreach in wholesale areas from clinic or neighbourhood awareness.",
    "check": "Use different calls to action for trade buyers and consumers.",
    "example": "For a wholesale launch, show the product category and distributor number. Use a different proof for consumer retail so the media buyer can compare calls routed through each contact."
  },
  {
    "hub": "bihar",
    "slug": "begusarai",
    "keyword": "auto branding in begusarai",
    "title": "Auto Branding in Begusarai and Barauni",
    "plan": "Treat Begusarai town and Barauni industrial or rail access as separate buying areas.",
    "check": "Check shift timings and local vehicle availability before combining fleet counts.",
    "example": "For a staff-service offer around Barauni, ask which fleet can cover the relevant shift window. A Begusarai store opening can use its own launch dates and branch reference."
  },
  {
    "hub": "bihar",
    "slug": "ara",
    "keyword": "auto branding in ara bhojpur",
    "title": "Auto Branding in Ara, Bhojpur",
    "plan": "Choose between Ara station approaches and an in-town shopping catchment.",
    "check": "For branch campaigns, add an address cue customers can recognise after leaving the vehicle.",
    "example": "For a Bhojpur shop launch, use Ara station as a route reference only when it matches the expected customer trip. Confirm the actual approach and vehicle allocation before fitting."
  },
  {
    "hub": "bihar",
    "slug": "chapra",
    "keyword": "auto branding in chapra saran",
    "title": "Auto Branding in Chapra, Saran",
    "plan": "Separate Chapra town exposure from an additional Revelganj requirement.",
    "check": "Ask for local fleet references and a route-level split in the estimate.",
    "example": "For a Chapra retail campaign, price Revelganj as a separate extension. Check whether the proposal includes an independent vehicle list and local proof for that extension."
  },
  {
    "hub": "bihar",
    "slug": "katihar",
    "keyword": "auto branding in katihar",
    "title": "Auto Branding in Katihar",
    "plan": "Plan for station-connected commuters or market shoppers using distinct placements.",
    "check": "Agree how fittings will be scheduled around local vehicle operating hours.",
    "example": "For food or hospitality near Katihar Junction, select a distance cue customers can act on after arrival. Agree when operators can install or check panels without taking autos out during busy hours."
  },
  {
    "hub": "bihar",
    "slug": "munger",
    "keyword": "auto branding in munger",
    "title": "Auto Branding in Munger and Jamalpur",
    "plan": "Allocate vehicles separately if both towns serve your business objective.",
    "check": "Specify the relevant branch, trade contact or event venue on each artwork file.",
    "example": "For a Munger and Jamalpur branch offer, mark every proof with the town and branch reference. Use a separate contact where buyers would otherwise be sent to the wrong office."
  },
  {
    "hub": "bihar",
    "slug": "saharsa",
    "keyword": "auto branding in saharsa",
    "title": "Auto Branding in Saharsa",
    "plan": "Use a single local market or commuter catchment as the starting point for a Kosi-region pilot.",
    "check": "Confirm whether production can be supplied locally before setting the launch date.",
    "example": "For a Saharsa branch launch, pre-approve a small print batch and ask how replacements would be produced or shipped. Set the go-live date after confirming the local fit window."
  },
  {
    "hub": "bihar",
    "slug": "samastipur",
    "keyword": "auto branding in samastipur",
    "title": "Auto Branding in Samastipur",
    "plan": "Choose railway-connected trips or agricultural market outreach according to buyer type.",
    "check": "Separate consumer store messages from bulk or distributor enquiries.",
    "example": "A distributor campaign can use a trade contact for agricultural buyers while a station-area store uses a shopping cue. Keep the two artwork variants separate so callers reach the correct desk."
  },
  {
    "hub": "bihar",
    "slug": "hajipur",
    "keyword": "auto branding in hajipur vaishali",
    "title": "Auto Branding in Hajipur, Vaishali",
    "plan": "Choose a town-based campaign or a commuter proposal near the cross-river approaches.",
    "check": "Check route permissions and actual fleet coverage before assuming vehicles cross the bridge.",
    "example": "For a referral campaign near a cross-river approach, ask whether vehicles cover only the Hajipur side. Use an offer that remains actionable from the side actually served."
  },
  {
    "hub": "bihar",
    "slug": "bihar-sharif",
    "keyword": "auto branding in bihar sharif nalanda",
    "title": "Auto Branding in Bihar Sharif and Nalanda",
    "plan": "Plan a Bihar Sharif retail campaign separately from a visitor-facing Rajgir or Nalanda brief.",
    "check": "Give each town a distinct contact, campaign window and delivery plan.",
    "example": "A local Bihar Sharif opening can use a branch landmark. A Rajgir promotion may need a date or visitor contact, so price and approve each artwork separately."
  },
  {
    "hub": "bihar",
    "slug": "sasaram",
    "keyword": "auto branding in sasaram rohtas",
    "title": "Auto Branding in Sasaram and Dehri-on-Sone",
    "plan": "Choose town-market coverage or a GT Road approach relevant to your outlet.",
    "check": "Confirm vehicle fit and approved operating zones in each Rohtas town quoted.",
    "example": "For a Sasaram showroom or Dehri campaign, submit distinct addresses and ask where vehicles can be fitted. Compare local contacts and return logistics before combining quotes."
  },
  {
    "hub": "bihar",
    "slug": "motihari",
    "keyword": "auto branding in motihari",
    "title": "Auto Branding in Motihari",
    "plan": "Start with a clearly defined town audience before expanding across East Champaran.",
    "check": "Review the staging point and how replacement artwork will reach the fleet.",
    "example": "For a Motihari retail pilot, request a named fitting point and one route sample. Keep replacement art files ready if the fleet changes after approval."
  },
  {
    "hub": "bihar",
    "slug": "bettiah",
    "keyword": "auto branding in bettiah",
    "title": "Auto Branding in Bettiah",
    "plan": "Choose a neighbourhood, market or healthcare access context for the offer.",
    "check": "Keep the message close to one local contact and check the placement photos before launch.",
    "example": "For a clinic or high-street offer in Bettiah, choose one contact and one clearly stated service. Inspect a representative wide and close installation photo before expanding."
  },
  {
    "hub": "bihar",
    "slug": "siwan",
    "keyword": "auto branding in siwan",
    "title": "Auto Branding in Siwan",
    "plan": "Plan around the actual location of a showroom, coaching branch or service counter.",
    "check": "Use a short call number and tracking note to separate auto-generated enquiries.",
    "example": "For a Siwan enrolment campaign, define the class, application deadline and the branch answering calls. Record enquiries tagged to the vehicle campaign before changing allocation."
  },
  {
    "hub": "bihar",
    "slug": "gopalganj",
    "keyword": "auto branding in gopalganj",
    "title": "Auto Branding in Gopalganj",
    "plan": "Distinguish town trips from highway approaches when setting the media brief.",
    "check": "For a local shop, consider whether passing customers can reach the advertised address.",
    "example": "For a Gopalganj hotel or local shop, check that the storefront is accessible from the chosen route. Give the creative a directional cue where travellers can reasonably turn."
  },
  {
    "hub": "bihar",
    "slug": "madhubani",
    "keyword": "auto branding in madhubani",
    "title": "Auto Branding in Madhubani",
    "plan": "Choose a local format for market and neighbourhood trips before scaling to surrounding towns.",
    "check": "Prepare a proof in the language and type size the target audience can read quickly.",
    "example": "For a Madhubani event, use a venue or market landmark in the language your customers expect. Approve a full-size type sample on the actual material before printing the batch."
  },
  {
    "hub": "bihar",
    "slug": "sitamarhi",
    "keyword": "auto branding in sitamarhi",
    "title": "Auto Branding in Sitamarhi",
    "plan": "Separate bazaar routes from rail approaches in a town-level campaign.",
    "check": "Ask the operator to show where it can document installation and verify the fleet.",
    "example": "For a Sitamarhi festival or sale, set separate venue-facing and market-facing creative if the routes serve different trips. Ask for proof by vehicle reference instead of a single gallery."
  },
  {
    "hub": "bihar",
    "slug": "buxar",
    "keyword": "auto branding in buxar",
    "title": "Auto Branding in Buxar",
    "plan": "Choose town retail, rail travellers or pilgrimage-related messaging as one clear objective.",
    "check": "Plan campaign dates around your offer or expected visitor needs without assuming passenger volumes.",
    "example": "For a Buxar visitor campaign, include a date or usable location cue. For an everyday retail campaign, use a branch contact and dates that match in-store availability."
  },
  {
    "hub": "bihar",
    "slug": "aurangabad",
    "keyword": "auto branding in aurangabad bihar",
    "title": "Auto Branding in Aurangabad, Bihar",
    "plan": "Specify Aurangabad, Bihar and the desired town or GT Road catchment in your quote request.",
    "check": "Ask how the local team will handle installation checks and any replacement print.",
    "example": "For an Aurangabad outlet, confirm in writing that the quote is for Bihar and specify the branch or approach. Request a local replacement plan if the print is damaged."
  },
  {
    "hub": "bihar",
    "slug": "nawada-jamui",
    "keyword": "auto branding in jamui nawada",
    "title": "Auto Branding in Nawada and Jamui",
    "plan": "Run separate location checks for Nawada and Jamui before buying a combined South Bihar package.",
    "check": "Use matching reporting fields so fleet delivery can be compared across towns.",
    "example": "For a Nawada–Jamui campaign, use one reporting template and separate town totals. Compare fitting dates and active vehicles before comparing enquiries."
  },
  {
    "hub": "industries",
    "slug": "coaching-institutes-patna",
    "keyword": "auto branding for coaching institutes patna",
    "title": "Auto Branding for Patna Coaching Institutes",
    "plan": "Put the course, enrolment deadline and enquiry number on the artwork.",
    "check": "Use separate codes for Boring Road and Kankarbagh if comparing admission enquiries.",
    "example": "Example brief: a test-prep centre wants to fill an orientation session. Use the course name, exact session date and one reply code. Record registrations and attendees separately."
  },
  {
    "hub": "industries",
    "slug": "hospitals-patna",
    "keyword": "auto advertising for hospitals patna",
    "title": "Auto Advertising for Patna Hospitals and Clinics",
    "plan": "Use service availability, appointment contact and a branch landmark in patient-facing artwork.",
    "check": "Have the hospital approve claims and avoid displaying private patient information in proof photos.",
    "example": "Example brief: a clinic launches evening appointments. Use approved opening hours and a verified number, then track confirmed appointments independently of calls."
  },
  {
    "hub": "industries",
    "slug": "real-estate-patna",
    "keyword": "auto branding for real estate patna",
    "title": "Auto Branding for Patna Real Estate Projects",
    "plan": "Lead with the project location, visit hours or one booking action.",
    "check": "Record confirmed site visits separately from calls when comparing route performance.",
    "example": "Example brief: a developer hosts weekend site visits. Put one correct location cue on the artwork and count attended visits after matching the prospect to the campaign source."
  },
  {
    "hub": "industries",
    "slug": "schools-colleges-patna",
    "keyword": "auto advertising for schools colleges patna",
    "title": "Auto Advertising for Patna Schools and Colleges",
    "plan": "Choose an open day, enrolment deadline or campus location as the single message.",
    "check": "Brief a route around the intended catchment and verify which contact handles admissions.",
    "example": "Example brief: a college open day. Include the campus name and booking deadline, and confirm which desk qualifies enquiries before the campaign begins."
  },
  {
    "hub": "industries",
    "slug": "jewellery-patna",
    "keyword": "auto branding for jewellery showrooms patna",
    "title": "Auto Branding for Patna Jewellery Showrooms",
    "plan": "Use the store location, collection launch or appointment window as the creative anchor.",
    "check": "Compare a compact directional message with a larger product-led canopy proof.",
    "example": "Example brief: a jewellery showroom launches a collection. Keep the product visual large and use a short appointment prompt. Compare weekday enquiries with weekend appointments."
  },
  {
    "hub": "industries",
    "slug": "retail-patna",
    "keyword": "auto advertising for retail stores malls patna",
    "title": "Auto Advertising for Patna Retail Stores",
    "plan": "Choose a store opening, weekend offer or branch reminder that people can act on.",
    "check": "Use a campaign code at checkout so redeemed offers can be counted without relying on footfall guesses.",
    "example": "Example brief: a retailer opens a new outlet. Tie the creative to opening hours and a nearby landmark. Use a checkout code for the launch offer."
  },
  {
    "hub": "industries",
    "slug": "fmcg-bihar",
    "keyword": "auto branding for fmcg brands bihar",
    "title": "Auto Branding for FMCG Brands in Bihar",
    "plan": "Separate consumer awareness from retailer or distributor onboarding.",
    "check": "Align live dates with stock availability and use a different reply path for trade enquiries.",
    "example": "Example brief: an FMCG distributor launches in two towns. Confirm stock arrives before media goes live and give each sales representative a separate tracking contact."
  },
  {
    "hub": "industries",
    "slug": "public-campaigns-bihar",
    "keyword": "auto advertising for political campaigns bihar",
    "title": "Vehicle Media Planning for Bihar Public Campaigns",
    "plan": "Use this checklist to document approvals, vehicle consent and who owns campaign records.",
    "check": "Confirm publication requirements with the relevant authority and assign an approval owner before print.",
    "example": "For an information campaign, keep a dated approval record, authorised artwork file, contracting contact and takedown date together. Confirm applicable rules through the competent authority."
  },
  {
    "hub": "industries",
    "slug": "electronics-patna",
    "keyword": "auto branding for mobile electronics brands patna",
    "title": "Auto Branding for Patna Electronics Stores",
    "plan": "Choose a model launch, service desk or store-opening message around the showroom catchment.",
    "check": "Use a short offer period and one approved response channel per artwork version.",
    "example": "Example brief: a store launches a product demo. Use a short model name and a visible date rather than a long list of specs. Count attended demos separately from WhatsApp enquiries."
  },
  {
    "hub": "industries",
    "slug": "restaurants-patna",
    "keyword": "auto advertising for restaurants cloud kitchens patna",
    "title": "Auto Advertising for Patna Restaurants",
    "plan": "Use a short ordering cue, outlet landmark or meal offer close to the service area.",
    "check": "Track redemptions with an offline code and check whether the kitchen can serve the chosen routes.",
    "example": "Example brief: a kitchen advertises lunch delivery. Use one ordering action and a short service-area cue. Limit the pilot to routes inside its delivery operation."
  },
  {
    "hub": "industries",
    "slug": "diagnostic-labs-patna",
    "keyword": "auto branding for diagnostic labs patna",
    "title": "Auto Branding for Patna Diagnostic Labs",
    "plan": "Explain booking or sample pickup availability with one clear local contact.",
    "check": "Use area-specific enquiry tracking and keep artwork free from unsubstantiated test claims.",
    "example": "Example brief: a lab offers sample pickups in a defined service area. Specify how customers confirm availability and track completed bookings, without recording any patient details in campaign materials."
  },
  {
    "hub": "industries",
    "slug": "finance-patna",
    "keyword": "auto advertising for banks fintech patna",
    "title": "Auto Advertising for Patna Financial Services",
    "plan": "Use approved branch or service information and clear contact details.",
    "check": "Have the institution review disclosures and offer copy before production.",
    "example": "Example brief: a bank advertises a branch service. Use an institution-approved message and official way to contact the branch, then route general enquiries to its authorised team."
  },
  {
    "hub": "industries",
    "slug": "showrooms-patna",
    "keyword": "auto branding for automobile showrooms patna",
    "title": "Auto Branding for Patna Vehicle Showrooms",
    "plan": "Promote a showroom location, test-drive window or service camp with one contact.",
    "check": "Measure booked appointments and attended test drives as separate outcomes.",
    "example": "Example brief: a showroom hosts a service camp. Feature the dates, approved location and registration action. Separate registrations from attendance in the results."
  },
  {
    "hub": "industries",
    "slug": "events-patna",
    "keyword": "auto advertising for events exhibitions patna",
    "title": "Auto Advertising for Patna Events and Expos",
    "plan": "Put the event name, date and venue cue on a compact creative.",
    "check": "Schedule installation around the promotion window and agree a takedown date after the event.",
    "example": "Example brief: an expo runs for a weekend. Book the campaign around the advance-purchase window and request a dated removal schedule once the event ends."
  },
  {
    "hub": "industries",
    "slug": "app-launches-patna",
    "keyword": "auto branding for startups app launches patna",
    "title": "Auto Branding for Patna App Launches",
    "plan": "Use a memorable app name and an offline response path that works after the journey.",
    "check": "Compare attributed installs with first completed actions before widening your rollout.",
    "example": "Example brief: a neighbourhood delivery app launches. Give the offline code its own tracking path, then compare use after install with total scans, calls or store visits."
  },
  {
    "hub": "campaign-guides",
    "slug": "hood-vs-back-panel",
    "keyword": "auto hood vs back panel advertising",
    "title": "Auto Hood vs Back Panel Advertising",
    "plan": "Choose canopy for a larger visual and rear panels for a compact response message.",
    "check": "Compare identical fleet counts and durations before interpreting differences in cost.",
    "example": "Compare a 24 × 18-inch rear-panel proof with a canopy design that spreads the image across panels. Use the same call-to-action where possible so the comparison isolates format and placement."
  },
  {
    "hub": "campaign-guides",
    "slug": "auto-vs-hoarding",
    "keyword": "auto branding vs hoarding cost in patna",
    "title": "Auto Branding vs Hoarding Costs in Patna",
    "plan": "Compare moving route coverage with one fixed frontage at the same campaign length.",
    "check": "Include installation, production and renewal costs on both sides before approving a format.",
    "example": "Set both quotes to 30 days and list print, installation, rent and removal separately. Compare fixed frontage relevance with coverage of the trips your intended audience actually makes."
  },
  {
    "hub": "campaign-guides",
    "slug": "auto-advertising-dimensions",
    "keyword": "auto rickshaw advertising size in feet",
    "title": "Auto Rickshaw Advertising Dimensions",
    "plan": "Convert measured panel width and height to square feet before briefing print.",
    "check": "A rectangular 24 × 6 in sticker is exactly 1 sq ft. Verify usable space on each vehicle before printing.",
    "example": "Area in square feet equals width in inches × height in inches ÷ 144. A rectangular 24 × 18 in panel is 3 sq ft. Subtract unavailable areas after measuring, and use the installer’s trim and bleed specification."
  },
  {
    "hub": "campaign-guides",
    "slug": "permissions-bihar",
    "keyword": "rto permission for auto branding in bihar",
    "title": "Auto Advertising Permissions in Bihar",
    "plan": "Document vehicle consent, approved placement and the authority responsible for written approval.",
    "check": "Confirm current requirements for your vehicle, route and format before producing artwork.",
    "existingPath": "/advertising/transit-ad-campaign-permission-patna"
  },
  {
    "hub": "campaign-guides",
    "slug": "cng-auto",
    "keyword": "cng auto branding in patna",
    "title": "CNG Auto Branding in Patna",
    "plan": "Check fit, availability and safe access around the chosen vehicle body.",
    "check": "Give the installer a photo of the mounting surface and note any areas that must stay clear.",
    "example": "For a CNG auto, have the operator identify unsafe mounting zones and confirm accessibility before artwork is printed. Quote this fleet separately if the available models vary."
  },
  {
    "hub": "campaign-guides",
    "slug": "electric-auto",
    "keyword": "electric auto branding in patna",
    "title": "Electric Auto Branding in Patna",
    "plan": "Compare body dimensions and charging or operating schedules when planning an electric fleet.",
    "check": "Ask which vehicle models run the selected route before setting artwork and campaign dates.",
    "existingPath": "/advertising/electric-auto-branding-patna"
  },
  {
    "hub": "campaign-guides",
    "slug": "gps-verification",
    "keyword": "gps tracked auto branding in patna",
    "title": "GPS and Photo Proof for Patna Auto Ads",
    "plan": "Distinguish proof of installation from evidence of where a vehicle operated.",
    "check": "Define reporting intervals, permitted data and how replacement vehicles will be recorded.",
    "existingPath": "/advertising/auto-rickshaw-ad-tracking-agency-patna"
  },
  {
    "hub": "campaign-guides",
    "slug": "case-study-method",
    "keyword": "auto branding campaign case studies patna",
    "title": "Patna Auto Branding Case Study Checklist",
    "plan": "Record the brief, fitted vehicle count, campaign dates and outcomes in comparable units.",
    "check": "Use consented photos and distinguish verified results from illustrative figures.",
    "example": "For a case study, compare approved fleet size with verified fitted vehicles and active days. Present attributed calls, qualified enquiries and outcomes separately, with the source and date range for each figure."
  },
  {
    "hub": "campaign-guides",
    "slug": "roi-calculation",
    "keyword": "how to calculate auto advertising roi",
    "title": "Calculate ROI for Auto Advertising",
    "plan": "Track media cost, estimated impressions, attributed leads and confirmed sales separately.",
    "check": "Use contribution margin from attributed sales when comparing return against total campaign cost.",
    "existingPath": "/advertising/auto-rickshaw-branding-campaign-roi-patna"
  },
  {
    "hub": "campaign-guides",
    "slug": "vendor-registration",
    "keyword": "auto branding vendor registration patna",
    "title": "Patna Auto Branding Vendor Registration",
    "plan": "Prepare vehicle type, operating area, availability and a professional contact for an enquiry.",
    "check": "Ask how installation, approvals, campaign scheduling and compensation are agreed before accepting work.",
    "example": "Start with a professional contact, approximate operating area and vehicle format. Send documents only through an agreed private channel after the operator confirms what is needed."
  }
]
