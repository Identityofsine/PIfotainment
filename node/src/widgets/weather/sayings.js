module.exports = function returnStatement(code, is_day){
    switch(code){
        case("1000"):
            return is_day ? "Are you blind look outside! It's sunny..." : "It's a very clear night -- but your inside jerking your rod."
        case("1003"):
            return is_day ? "Kinda Cloudy outside." : "Mid Clouds outside -- go outside."
        case("1006"):
            return is_day ? "Yea it's fucking cloudy outside." : "Cloudy night, don't go outside..."
        case("1009"):
            return is_day ? "Overcast today, a good day to take photos -- bad day if you want to have a good one." : "Some rain shit is definitely going to happen, its an Overcast night"
        case("1030"):
            return is_day ? "Dude it's misty out." : "You might get murdered if you go outside, its misty as shit"
        case ("1063"):
            return "Some intermediate raining may happen today..." 
        case ("1066"):
            return "Some intermediate snowing may happen today..."
        case ("1069"):
            return "Some intermediate sleet may happen today... whatever that means."
        case ("1072"):
            return "Some intermediate freezing drizzle may happen today... That doesn't make sense."
        case ("1087"):
            return "Hope you got shawty over because theres a chance of thundery outbreaks"
        case ("1114"):
            return is_day ? "Blowing slow today..." : "Blowing snow tonight..."
        case ("1114"):
            return is_day ? "Dude there's an actual Blizzard outside. Go outside fight for your life." : "Turn on the AC and rest easy -- theres a Blizzard tonight"
        case ("1135"):
            return is_day ? "The weather is rocks, brotherman -- it's Foggy as shit" : "Go outside if you want to play rust IRL - it's foggy outside."
        case ("1150"):
            return is_day ? "Intermediate drizzle today, nothing crazy just some rain." : "Order chinese food. It's barley raining"
        case ("1153"):
            return is_day ? "Some light drizzle, nothing crazy" : "Light up a candle and get shawty(sad face)..."
        case ("1168"):
            return is_day ? "Fuck. Freezing Drizzle today, get ready to fight for your life" : "Why isn't this snow? Freezing Drizzle tonight."
        case ("1171"):
            return is_day ? "Holy shit. HEAVY Freezing Drizzle today... no fucking comment" : "Hit up Nick Burgio, its a heavy freezing drizzle night."
        case ("1180"):
            return is_day ? "Intermediate raining today, little rain here, little rain there" : "It's going to be a relaxing night."
        case ("1183"):
            return is_day ? "Light rain, will be annoying but it will probably clear up soon" : "Light rain tonight, hopefully you aren't on your phone battering your bologna because it's going to be relaxing"
        case ("1186"):
            return is_day ? "Moderate, patchy raining today. Be prepared..." : "Good times tonight, its gonna be raining good :)."
    
        case ("1189"):
            return is_day ? "Good amount of rain tonight... Moderate Rain" : "Sleep easy king, Moderate Rain Tonight."
        case ("1192"):
            return is_day ? "Intermediate Heavy raining today. No jokes be prepared." : "Hopefully you have no plans going out tonight, its Intermediate Heavy Raining tonight."
        case ("1195"):
            return is_day ? "As of writing this it was a hot sunny day, I hope whoever is reading this has no plans to go outside any time soon, Heavy Rain coming through." : "I really hope you got shawty tonight or something -- maybe a good session of DayZ? Monopoly? It's Heavy Rain tonight."
    
        case ("1198"):
            return is_day ? "Light freezing rain dude. What does that even mean." : "You are most likely going to be either overheating or freezing."

        case ("1201"):
            return is_day ? "I'm just reading a JSON file: It's going to be moderate or heavy freezing rain today." : "weather_conditions.json {\"night\" : \"Moderate or heavy freezing rain\"}, you thought this was broken; i am just lazy." 
    
        case ("1204"):
            return is_day ? "Where do you live? Light sleet." : "Light sleet tonight!"
        case ("1207"):
            return "Heavy or Moderate Sleet today. I don't know what sleet is"
        case ("1210"):
            return is_day ? "Patchy Light Snow Today, don't get your hopes up" : "Shitty Patchy Snow Tonight, do not get your hopes up."
    
        case ("1213"):
            return is_day ? "Light snow, it will be a nice sight if you are out." : "It's going to be a nice suprise waking up. Light Snow!"
        case ("1216"):
            return is_day ? "Patchy moderate snow today, don't expect to go anywhere far!" : "Patcy moderate snow today, I really hope there isn't a typo in here somewhere..."
        case ("1219"):
            return is_day ? "Hope you don't have a lot of plans Moderate Snowfall today!" : "If it snows by the time you sleep tonight, you might just have to jerk off to nature."
        case ("1222"):
            return is_day ? "Patchy Heavy Snow Today, Pray." : "AKON - LONELY. Patchy Heavy Snow Tonight."
    
        case ("1225"):
            return is_day ? "You are going to be fighting for life today, most likely school and work is cancelled -- enjoy the day off!" : "Wow. I envy you right now. Genuinely envy... Heavy Snow."
        case ("1237"):
            return "Fucking ice pellets. Wow"
        case ("1240"):
            return "I don't know what 'light rain shower' is but its happening today"
        case ("1243"):
            return "Moderate or heavy rain showers today. I still don't know what that means." 
        case ("1246"):
            return is_day ? "Torrential Rain Shower today, you are going to be fighting for your life. No joke." : "Hear me out, get some chinese with shawty and cuddle in bed while the weather tries to destory Long Island"
    
        case ("1249"):
            return "If I have to type sleet again I'm going to kill Gabe Santiago. Light Sleet Showers"  
        case ("1252"):
            return  "Heavy sleet showers... Has anyone actually seen sleet?" 
    
        case ("1255"):
            return is_day ? "Some Light snow showers today, not too sure what month it is though" : "Light snow showers tonight, theres a high chance you do not care."
        case ("1258"):
            return "Light showers of ice pellets. If you are not me(Kevin), please be gratful for the present moment."
        case ("1264"):
            return "Moderate or heavy showers of ice pellets. What are the chances you actually see this message?"
    
        case ("1273"):
            return is_day ? "Patchy light rain with a side of thunderstorms. This is a beast day." : "It's going to be a night with light rain and thunderstorms -- go tell someone you are grateful for them."
        case ("1276"):
            return is_day ? "Decent rain with some thunderstorms. I hope you have plans today -- hope you are doing well future me!" : "It's a goodnight, rain with thunderstorms. Hopefully, you are with shawty -- this is past single Kevin, I am gratful for you even though I do not know you yet. (If this message applies to no one I am sorry, future me)"
        case ("1279"):
            return is_day ? "Patchy light snow with thunder today, didn't even know that was possible" : "Snow and thunderstorms tonight... What the fuck?"
        case ("1282"):
            return is_day ? "Patchy Moderate snow with thunder today, didn't even know that was possible" : "Snow and thunderstorms tonight... What the fuck?"
        default:
            return "DEFAULT";
    }
}