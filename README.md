# Let it fly

## API

### Destination
/api/destination/:city

Gets all the flights from SIN towards the specified city

### Profile
/api/profile/:id

Fetches the profile of the specified user

### Experiences
/api/experiences?airport=&tag=

Fetches all the experiences matching the two optionals parameters 

### Events
/api/events

Gets all the events occuring in Singapore. N'utilise pas l'API en ce moment, seulement les extra_events

### Hotels 
/api/hotels?airport

Gets the hotels near specified airport

### Weather 
/api/weather/

Gets the weather forecast

## TO EXPLAIN :
for the hitching a flight part :

the customer can only choose flights where the sum of the duration of the 2 legs is smaller than the original flight time + 4h.
For example if originally going from SIN to CDG (15h), you can choose to have a layover in Madrid but not in NY.
(Singapore -> Madrid : 14h, Madrid -> Paris : 2h, total = 16h < 15h + 4h donc c'est OK)
(try to show this on a map)

## TO REMEMBER :
when booking hotels and experiences, the man in charge can choose to include all persons related to his reservation


according to the class you are flying (economy, business, first), you have access to more hotels  


## TO DISCUSS


Should we let the customer decide ? (between good hotels or good acitvities) ? Hide what he can't choose ?


