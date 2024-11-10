const twoLetterISO = [
    "af", "al", "dz", "as", "ad", "ao", "ai", "aq", "ag", "ar", "am", "aw", "au", "at", "az", "bs",
    "bh", "bd", "bb", "by", "be", "bz", "bj", "bm", "bt", "bo", "ba", "bw", "br", "io", "vg", "bn",
    "bg", "bf", "bi", "kh", "cm", "ca", "cv", "ky", "cf", "td", "cl", "cn", "co", "km", "ck", "cr",
    "ci", "hr", "cu", "cw", "cy", "cz", "dk", "dj", "dm", "do", "ec", "eg", "sv", "gq", "er", "ee",
    "sz", "et", "fk", "fo", "fj", "fi", "fr", "gf", "pf", "ga", "gm", "ge", "de", "gh", "gi", "gr",
    "gl", "gd", "gp", "gu", "gt", "gg", "gn", "gw", "gy", "ht", "hn", "hk", "hu", "is", "in", "id",
    "ir", "iq", "ie", "im", "il", "it", "jm", "jp", "je", "jo", "kz", "ke", "ki", "kp", "kr", "kw",
    "kg", "la", "lv", "lb", "ls", "lr", "ly", "li", "lt", "lu", "mo", "mg", "mw", "my", "mv", "ml",
    "mt", "mh", "mq", "mr", "mu", "yt", "mx", "fm", "md", "mc", "mn", "me", "ms", "ma", "mz", "mm",
    "na", "nr", "np", "nl", "nc", "nz", "ni", "ne", "ng", "nu", "mk", "mp", "no", "om", "pk", "pw",
    "ps", "pa", "pg", "py", "pe", "ph", "pn", "pl", "pt", "pr", "qa", "re", "ro", "ru", "rw", "bl",
    "sh", "kn", "lc", "mf", "pm", "vc", "ws", "sm", "st", "sa", "sn", "rs", "sc", "sl", "sg", "sx",
    "sk", "si", "sb", "so", "za", "ss", "es", "lk", "sd", "sr", "sj", "se", "ch", "sy", "tw", "tj",
    "tz", "th", "tl", "tg", "tk", "to", "tt", "tn", "tr", "tm", "tc", "tv", "ug", "ua", "ae", "gb",
    "us", "uy", "uz", "vu", "va", "ve", "vn", "wf", "eh", "ye", "zm", "zw"
];

const isoCountries = {
    'af': "Afghanistan", 'al': "Albania", 'dz': "Algeria", 'as': "American Samoa", 'ad': "Andorra", 'ao': "Angola", 'ai': "Anguilla",
    'aq': "Antarctica", 'ag': "Antigua and Barbuda", 'ar': "Argentina", 'am': "Armenia", 'aw': "Aruba", 'au': "Australia", 'at': "Austria",
    'az': "Azerbaijan", 'bs': "Bahamas", 'bh': "Bahrain", 'bd': "Bangladesh", 'bb': "Barbados", 'by': "Belarus", 'be': "Belgium",
    'bz': "Belize", 'bj': "Benin", 'bm': "Bermuda", 'bt': "Bhutan", 'bo': "Bolivia", 'ba': "Bosnia and Herzegovina", 'bw': "Botswana",
    'br': "Brazil", 'io': "British Indian Ocean Territory", 'vg': "British Virgin Islands", 'bn': "Brunei", 'bg': "Bulgaria",
    'bf': "Burkina Faso", 'bi': "Burundi", 'kh': "Cambodia", 'cm': "Cameroon", 'ca': "Canada", 'cv': "Cape Verde", 'ky': "Cayman Islands",
    'cf': "Central African Republic", 'td': "Chad", 'cl': "Chile", 'cn': "China", 'co': "Colombia", 'km': "Comoros", 'ck': "Cook Islands",
    'cr': "Costa Rica", 'ci': "Côte d'Ivoire", 'hr': "Croatia", 'cu': "Cuba", 'cw': "Curaçao", 'cy': "Cyprus", 'cz': "Czech Republic",
    'dk': "Denmark", 'dj': "Djibouti", 'dm': "Dominica", 'do': "Dominican Republic", 'ec': "Ecuador", 'eg': "Egypt", 'sv': "El Salvador",
    'gq': "Equatorial Guinea", 'er': "Eritrea", 'ee': "Estonia", 'sz': "Eswatini", 'et': "Ethiopia", 'fk': "Falkland Islands", 'fo': "Faroe Islands",
    'fj': "Fiji", 'fi': "Finland", 'fr': "France", 'gf': "French Guiana", 'pf': "French Polynesia", 'ga': "Gabon", 'gm': "Gambia",
    'ge': "Georgia", 'de': "Germany", 'gh': "Ghana", 'gi': "Gibraltar", 'gr': "Greece", 'gl': "Greenland", 'gd': "Grenada",
    'gp': "Guadeloupe", 'gu': "Guam", 'gt': "Guatemala", 'gg': "Guernsey", 'gn': "Guinea", 'gw': "Guinea-Bissau", 'gy': "Guyana",
    'ht': "Haiti", 'hn': "Honduras", 'hk': "Hong Kong", 'hu': "Hungary", 'is': "Iceland", 'in': "India", 'id': "Indonesia",
    'ir': "Iran", 'iq': "Iraq", 'ie': "Ireland", 'im': "Isle of Man", 'il': "Israel", 'it': "Italy", 'jm': "Jamaica",
    'jp': "Japan", 'je': "Jersey", 'jo': "Jordan", 'kz': "Kazakhstan", 'ke': "Kenya", 'ki': "Kiribati", 'kp': "North Korea",
    'kr': "South Korea", 'kw': "Kuwait", 'kg': "Kyrgyzstan", 'la': "Laos", 'lv': "Latvia", 'lb': "Lebanon", 'ls': "Lesotho",
    'lr': "Liberia", 'ly': "Libya", 'li': "Liechtenstein", 'lt': "Lithuania", 'lu': "Luxembourg", 'mo': "Macau", 'mg': "Madagascar",
    'mw': "Malawi", 'my': "Malaysia", 'mv': "Maldives", 'ml': "Mali", 'mt': "Malta", 'mh': "Marshall Islands", 'mq': "Martinique",
    'mr': "Mauritania", 'mu': "Mauritius", 'yt': "Mayotte", 'mx': "Mexico", 'fm': "Micronesia", 'md': "Moldova", 'mc': "Monaco",
    'mn': "Mongolia", 'me': "Montenegro", 'ms': "Montserrat", 'ma': "Morocco", 'mz': "Mozambique", 'mm': "Myanmar", 'na': "Namibia",
    'nr': "Nauru", 'np': "Nepal", 'nl': "Netherlands", 'nc': "New Caledonia", 'nz': "New Zealand", 'ni': "Nicaragua", 'ne': "Niger",
    'ng': "Nigeria", 'nu': "Niue", 'mk': "North Macedonia", 'mp': "Northern Mariana Islands", 'no': "Norway", 'om': "Oman",
    'pk': "Pakistan", 'pw': "Palau", 'ps': "Palestine", 'pa': "Panama", 'pg': "Papua New Guinea", 'py': "Paraguay", 'pe': "Peru",
    'ph': "Philippines", 'pn': "Pitcairn Islands", 'pl': "Poland", 'pt': "Portugal", 'pr': "Puerto Rico", 'qa': "Qatar",
    're': "Réunion", 'ro': "Romania", 'ru': "Russia", 'rw': "Rwanda", 'bl': "Saint Barthélemy", 'sh': "Saint Helena",
    'kn': "Saint Kitts and Nevis", 'lc': "Saint Lucia", 'mf': "Saint Martin", 'pm': "Saint Pierre and Miquelon",
    'vc': "Saint Vincent and the Grenadines", 'ws': "Samoa", 'sm': "San Marino", 'st': "São Tomé and Príncipe", 'sa': "Saudi Arabia",
    'sn': "Senegal", 'rs': "Serbia", 'sc': "Seychelles", 'sl': "Sierra Leone", 'sg': "Singapore", 'sx': "Sint Maarten", 'sk': "Slovakia",
    'si': "Slovenia", 'sb': "Solomon Islands", 'so': "Somalia", 'za': "South Africa", 'ss': "South Sudan", 'es': "Spain",
    'lk': "Sri Lanka", 'sd': "Sudan", 'sr': "Suriname", 'sj': "Svalbard and Jan Mayen", 'se': "Sweden", 'ch': "Switzerland",
    'sy': "Syria", 'tw': "Taiwan", 'tj': "Tajikistan", 'tz': "Tanzania", 'th': "Thailand", 'tl': "Timor-Leste", 'tg': "Togo",
    'tk': "Tokelau", 'to': "Tonga", 'tt': "Trinidad and Tobago", 'tn': "Tunisia", 'tr': "Turkey", 'tm': "Turkmenistan",
    'tc': "Turks and Caicos Islands", 'tv': "Tuvalu", 'ug': "Uganda", 'ua': "Ukraine", 'ae': "United Arab Emirates",
    'gb': "United Kingdom", 'us': "United States", 'uy': "Uruguay", 'uz': "Uzbekistan", 'vu': "Vanuatu", 'va': "Vatican City",
    've': "Venezuela", 'vn': "Vietnam", 'wf': "Wallis and Futuna", 'eh': "Western Sahara", 'ye': "Yemen", 'zm': "Zambia",
    'zw': "Zimbabwe"
};

let Countries=[];
twoLetterISO.forEach(element=>{
    let obj={
        iso_2_alpha:element,
        png:`https://flagcdn.com/32x24/${element}.png`,
        countryName:getCountryName(element.toUpperCase()),
    }
    Countries.push(obj);
})

function getCountryName(countryCode){
    if(isoCountries.hasOwnProperty(countryCode)){
        return isoCountries[countryCode];
    }else{
        return countryCode;
    }
}

console.log(Countries)

export default Countries;