import json
from time import sleep
from wsgiref.headers import Headers
import requests
import os
from dotenv import load_dotenv
from requests.structures import CaseInsensitiveDict
import json
from musicinfo import CurrentlyPlaying

load_dotenv()
url = os.environ.get("spotlink")
apikey = os.environ.get("authkey")
market = os.environ.get("market")
deviceID = os.environ.get("dvid")

def getSpotify():
    headers = CaseInsensitiveDict()
    headers["Accept"] = "application/json"
    headers["Authorization"] = f"Bearer {apikey}"
    data = CaseInsensitiveDict()
    data["device_ids"] = [deviceID]
    r = requests.get(f"{url}?market={market}", headers=headers)
    parsed_json = r.json()
    print(parsed_json["item"]["name"])
    currentlyplaying = CurrentlyPlaying(parsed_json["item"]["name"], parsed_json["item"]["duration_ms"], parsed_json["item"]["album"]["images"][2]["url"], parsed_json["item"]["album"]["name"], ''.join(' {}'.format(i["name"]) for i in parsed_json["item"]["artists"]), parsed_json["is_playing"], getSpotify)
    return currentlyplaying


def main():
    sex = getSpotify()
    print(sex.artist)
    sleep(15)
    sex.updateSelf()
    print(sex.artist)

main()

#print(json.dumps(parsed_json["item"], indent=4, sort_keys=True))
