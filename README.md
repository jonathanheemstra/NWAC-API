# NWAC-API
Simple API for Northwest Avalanche Center data that stores


## Data Model
### Forecast Summary Example
``` javascript
{
  "forecast_summary" : {
    "bottom_line_summary" : string,
    "snowpack_analysis" : {
      "weather_and_snowpack" : string,
      "recent_observations" : string
    },
    "detailed_forecast" : string
  }
}
```

### Zone Summary Example
``` javascript
{
  {
    "zone_id" : number,
    "zone_name" : string
    "zone_url" : string
    "geometry" : {
      "type" : string,
      "coordinates" : [[ [lat, long], [lat, long], [lat, long] ... ]]
    },
    "danger_elev_high" : {
      "elev_name" : string,
      "danger_scale_today" : string,
      "danger_scale_tomorrow" : string
    },
    "danger_elev_low" : {
      "elev_name" : string,
      "danger_scale_today" : string,
      "danger_scale_tomorrow" : string
    },
    "danger_elev_middle" : {
      "elev_name" : string,
      "danger_scale_today" : string,
      "danger_scale_tomorrow" : string
    },
    "url" : string
    "zone_abbreviated_name" : string
    "issue_date" : date,
    "author" : string
    "avalanche_problems" : [
      {      
        "problem" : string,
        "problem_summary" : string,
        "aspect" : [
          {
            "elev_name" : string,
            "north" : boolean,
            "northeast" : boolean,
            "east" : boolean,
            "southeast" : boolean,
            "south" : boolean,
            "southwest" : boolean,
            "west" : boolean,
            "northwest" : boolean,
          },
          {
            "elev_name" : string,
            "north" : boolean,
            "northeast" : boolean,
            "east" : boolean,
            "southeast" : boolean,
            "south" : boolean,
            "southwest" : boolean,
            "west" : boolean,
            "northwest" : boolean,
          },
          {
            "elev_name" : string,
            "north" : boolean,
            "northeast" : boolean,
            "east" : boolean,
            "southeast" : boolean,
            "south" : boolean,
            "southwest" : boolean,
            "west" : boolean,
            "northwest" : boolean,
          }
        ]
        "likelihood" : string,
        "size" : string
      },
      {      
        "problem" : string,
        "problem_summary" : string,
        "aspect" : [
          {
            "elev_name" : string,
            "north" : boolean,
            "northeast" : boolean,
            "east" : boolean,
            "southeast" : boolean,
            "south" : boolean,
            "southwest" : boolean,
            "west" : boolean,
            "northwest" : boolean,
          },
          {
            "elev_name" : string,
            "north" : boolean,
            "northeast" : boolean,
            "east" : boolean,
            "southeast" : boolean,
            "south" : boolean,
            "southwest" : boolean,
            "west" : boolean,
            "northwest" : boolean,
          },
          {
            "elev_name" : string,
            "north" : boolean,
            "northeast" : boolean,
            "east" : boolean,
            "southeast" : boolean,
            "south" : boolean,
            "southwest" : boolean,
            "west" : boolean,
            "northwest" : boolean,
          }
        ]
        "likelihood" : string,
        "size" : string
      },
      {      
        "problem" : string,
        "problem_summary" : string,
        "aspect" : [
          {
            "elev_name" : string,
            "north" : boolean,
            "northeast" : boolean,
            "east" : boolean,
            "southeast" : boolean,
            "south" : boolean,
            "southwest" : boolean,
            "west" : boolean,
            "northwest" : boolean,
          },
          {
            "elev_name" : string,
            "north" : boolean,
            "northeast" : boolean,
            "east" : boolean,
            "southeast" : boolean,
            "south" : boolean,
            "southwest" : boolean,
            "west" : boolean,
            "northwest" : boolean,
          },
          {
            "elev_name" : string,
            "north" : boolean,
            "northeast" : boolean,
            "east" : boolean,
            "southeast" : boolean,
            "south" : boolean,
            "southwest" : boolean,
            "west" : boolean,
            "northwest" : boolean,
          }
        ]
        "likelihood" : string,
        "size" : string
      }
    ]
  },
  {
    *****NEXT ZONE*****
  },
  {
    *****NEXT ZONE*****
  }
}
```

## Data Model Built Example
### Forecast Summary Example
``` javascript
{
  "forecast_summary" : {
    "bottom_line_summary" : "Wind slab should be the primary avalanche problem due to a period of strong westerly winds Thursday afternoon and/or night that may load leeward aspects further downslope than usual. Treat wind loaded slopes in all elevation bands with caution on Friday.",
    "snowpack_analysis" : {
      "weather_and_snowpack" : "Strong storms around the Solstice deposited generally 1 to 2 inches of water equivalent along the west slopes. A period of rain or freezing rain (Snoqualmie) during this storm cycle allowed crust layers to form in the Baker area from 4000-4500 feet, the Passes up to around 5000 feet (Stevens) to 6000 feet (Snoqualmie) and 6000-7000 feet in the Paradise area. The crust is very thin or non existent in the Crystal backcountry.\r\n\r\nA strong front and strong west flow aloft was seen over the Olympics and Cascades on Monday and Tuesday. NWAC stations along the west slopes and crest had strong west winds Monday and Tuesday with 1-3 feet of new snow for the 48 hours ending Wednesday morning with a cooling trend.\r\n\r\nA warm front kept light snow and strong winds going through much of day in the Mt. Baker area Thursday. Precipitation began in the central and south Washington Cascades Thursday afternoon.  A slight warming trend was seen throughout the day Thursday and is expected to peak Thursday afternoon in the north Cascades and Thursday evening for areas further south.",
      "recent_observations" : "NWAC pro-observer Ian Nicholson was at Stevens Pass on Wednesday and reported no signs of instability on east slopes to 5800 feet. There was 2 feet of new snow, with a minor storm layer a Monday/Tuesday interface, over previous snow over the Solstice crust at 65-70 cm. The 12/17 PWL was going away and unlikely to be triggered.\r\n\r\nNWAC pro-observer Dallas Glass was in the Bullion Basin and Pickhandle Basin area on Wednesday on most aspect to 6600 feet and reported 25-35 cm of storm snow generally right side up and minor shallow 2-3\" storm slab and good skiing. The was visual evidence of wind slab on some cross loaded slopes near treeline.\r\n\r\nThe rangers at Paradise reported extensive new wind slab near and above treeline. The Solstice crust was seen at 135 cm with good bonds.\r\n\r\nSki areas reported minimal avalanche control results Thursday morning but winds were quite strong in the Mt. Baker area and transporting new snow in all elevation bands throughout the day."
    },
    "detailed_forecast" : "A strong but quick moving front will bring a period of strong winds along with precipitation Thursday afternoon and night.  Winds and shower intensity should quickly taper down on Friday with a clearing trend expected along with cool temperatures.\r\n\r\nWind slab should be the primary avalanche problem due to a period of moderate to strong westerly winds Thursday afternoon and/or Thursday night that may load leeward aspects further downslope than usual. Treat wind loaded slopes in all elevation bands with caution on Friday.\r\n\r\nStorm slabs are expected to be the most reactive and likely to trigger Thursday night during peak warming and storm intensity. However, sensitive storm slabs may linger and be found in wind sheltered terrain Friday. More snow is expected from Snoqualmie Pass and north to Mt. Baker with this storm and the avalanche danger will be rated higher to account for the additional expected snowfall.\r\n\r\nThe 12/17 PWL persistent slab problem is becoming more deeply buried and less sensitive in snowpack tests but still warrants attention in the Cascades for areas without the Solstice crust layer. Recent and new loading may make this layer more sensitive to triggering where it is still present. Remember that persistent weak layers are generally involved in larger avalanches. Avoid steeper slopes in areas where you still find this layer reactive in snow pits."
  }
}
```

### Zone Summary Example
``` javascript
{
  {
    "zone_id": 14,
    "zone_name" : "WA Cascades West, Mt Baker"
    "zone_url" : "http://nwac.us/avalanche-forecast/current/cascade-west-north-baker"
    "geometry" : {
      "type" : "Polygon",
      "coordinates" : [[ [-122.0652301747959, 48.690710727733311], [-121.936381089988004, 48.539210043202523], [-121.822591583423701, 48.535778534181397], [-121.554333846745195, 48.476781672779033], [-121.452541251027498, 48.52010007451873], [-121.279861935030297, 48.530271143013337], [-121.229375162264901, 48.469654443538019], [-121.178833613096501, 48.458505690545778], [-121.124080655575, 48.492929838058977], [-121.054877893607895, 48.464821222429343], [-120.921831981173298, 48.441392503415059], [-120.821006312985403, 48.386962035598131], [-120.755692326782807, 48.374281901492878], [-120.478914602774097, 49.000224898692203], [-121.997245049148404, 49.000737931724942], [-122.0652301747959, 48.690710727733311] ]]
    },
    "danger_elev_high" : {
      "elev_name" : "above treeline",
      "danger_scale_today" : "considerable",
      "danger_scale_tomorrow" : "considerable"
    },
    "danger_elev_low": {
      "elev_name" : "below treeline",
      "danger_scale_today" : "considerable",
      "danger_scale_tomorrow" : "moderate"
    },
    "danger_elev_middle" : {
      "elev_name" : "near treeline",
      "danger_scale_today" : "considerable",
      "danger_scale_tomorrow" : "moderate"
    },
    "zone_abbreviated_name" : "Cascade West - North"
    "issue_date" : Fri Dec 30 2016 15:33:47 GMT-0800 (PST),
    "author" : "Dennis D\'Amico"
    "avalanche_problems" : [
      {      
        "problem" : "wind slab",
        "problem_summary" : "Wind slabs can take up to a week to stabilize. They are confined to lee and cross-loaded terrain features and can be avoided by sticking to sheltered or wind scoured areas.",
        "aspect" : [
          {
            "elev_name" : "above treeline",
            "north" : true,
            "northeast" : true,
            "east" : true,
            "southeast" : true,
            "south" : true,
            "southwest" : false,
            "west" : false,
            "northwest" : true,
          },
          {
            "elev_name" : "below treeline",
            "north" : true,
            "northeast" : true,
            "east" : true,
            "southeast" : true,
            "south" : true,
            "southwest" : false,
            "west" : false,
            "northwest" : true,
          },
          {
            "elev_name" : "near treeline",
            "north" : true,
            "northeast" : true,
            "east" : true,
            "southeast" : true,
            "south" : true,
            "southwest" : false,
            "west" : false,
            "northwest" : true,
          }
        ]
        "likelihood" : "likely",
        "size" : "small to large"
      },
      {      
        "problem" : "storm slabs",
        "problem_summary" : "Storm slabs usually stabilize within a few days, and release at or below the trigger point. They exist throughout the terrain, and can be avoided by waiting for the storm snow to stabilize.",
        "aspect" : [
          {
            "elev_name" : "above treeline",
            "north" : true,
            "northeast" : true,
            "east" : true,
            "southeast" : true,
            "south" : true,
            "southwest" : true,
            "west" : true,
            "northwest" : true,
          },
          {
            "elev_name" : "below treeline",
            "north" : true,
            "northeast" : true,
            "east" : true,
            "southeast" : true,
            "south" : true,
            "southwest" : true,
            "west" : true,
            "northwest" : true,
          },
          {
            "elev_name" : "near treeline",
            "north" : true,
            "northeast" : true,
            "east" : true,
            "southeast" : true,
            "south" : true,
            "southwest" : true,
            "west" : true,
            "northwest" : true,
          }
        ]
        "likelihood" : "possible",
        "size" : "small to large"
      },
      {      
        "problem" : "persistent slab",
        "problem_summary" : "Persistent slabs can be triggered by light loads and weeks after the last storm. You can trigger them remotely and they often propagate across and beyond terrain features that would otherwise confine wind and storm slabs. Give yourself a wide safety buffer to handle the uncertainty.",
        "aspect" : [
          {
            "elev_name" : "above treeline",
            "north" : true,
            "northeast" : true,
            "east" : true,
            "southeast" : true,
            "south" : true,
            "southwest" : true,
            "west" : true,
            "northwest" : true,
          },
          {
            "elev_name" : "below treeline",
            "north" : true,
            "northeast" : true,
            "east" : true,
            "southeast" : true,
            "south" : true,
            "southwest" : true,
            "west" : true,
            "northwest" : true,
          },
          {
            "elev_name" : "near treeline",
            "north" : true,
            "northeast" : true,
            "east" : true,
            "southeast" : true,
            "south" : true,
            "southwest" : true,
            "west" : true,
            "northwest" : true,
          }
        ]
        "likelihood" : "unlikely",
        "size" : "large"
      }
    ]
  },
  {
    *****NEXT ZONE*****
  },
  {
    *****NEXT ZONE*****
  }
}
```
