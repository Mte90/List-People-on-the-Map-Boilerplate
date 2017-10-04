# List People on the Map Boilerplate
Do you want easily a map with names and marker on a map but you have no time for coding? This boilerplate is here for you! You have only to work on the design and on the list of people!

## Add your name

### Pull Request Way

* Create/Sign in into github account. (you can jump to step 4 or take them one by one)
* Go to https://github.com/[your nick]/[your repo]
* Choose the file `list.json` - https://github.com/[your nick]/[your repo]/blob/gh-pages/list.json 
* Tap the pencil icon - near the history button - at the top of ther file **OR** https://github.com/[your nick]/[your repo]/edit/gh-pages/listspeakers.json 
* Add your dates in a similar form as those already entered between `},{` or copy this:  
```            
,{
      "name": "FirstName LastName", 
      "url": "your profile url",
      "gravatar": "youremail@domain.tld",
      "country": "yourCountry",
      "lat": 00,
      "lng": 00
}
```
* Add at the end of file
* Now you need to create a new Pull Request, go to https://github.com/[your nick]/[your repo]/pulls
* Click on New Pull Request
* Click on Compare across forks
* On Head fork search your fork (YourNickOnGitHub/[your repo]/)
* Click on create Pull Request
* Done!

### Issue/Ticket Way

* Create/Sign in into github account. 
* Go to https://github.com/[your nick]/[your repo]
* Tap the Issues button from left side panel
* Tap the green "New Issue" button
* Add your data (gravatar email, profile url, latitude, longitude and country)

### Finding my latitude and longitude
You can easily find your latitude and longitude accessing OpenStreetMap: http://nominatim.openstreetmap.org
* Search for your location
* Click on details
* Check the Centre Point information (lat and lng)
* Done!
