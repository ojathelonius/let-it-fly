# Singapore Airlines AppChallenge - Let it fly (back-end)

This is a simple back-end for the  ["Let it fly"](https://appchallenge.singaporeair.com/en/challenges/appchallenge-2018/teams/360) entry of the Singapore Airlines AppChallenge 2018.

The single page app that consumes it lives on https://letitfly.johanet.fr/

The back-end runs on https://api.johanet.fr/

Watch the **explanation video** [on YouTube](https://youtu.be/3PAMQNL95pk).

This API uses both data coming from the provided API as a part of the challenge resources, as well as dummy data stored as JSON that is quite similar to the one you could get from real services, such as :
* AirBnB
* Booking.com
* TripAdvisor

Unfortunately these websites do not provide API for development projects, thus we had to create our own data.


## API

### Destination
/api/destination/:airport

Gets all the flights from SIN towards the specified airport

### Profile
/api/profile/{0,1}

Fetches the profile of the specified user

### Experiences
/api/experiences?airport=&tag=

Fetches all the experiences matching the two optionals parameters 

### Events
/api/events

Gets all the events occuring in Singapore. For a lack of events in the Singapore Tourism Board API, we fetched data coming from other sources.

### Hotels 
/api/hotels/{SIN,FRA}

Gets the hotels near specified airport

### Weather 
/api/weather

Gets the weather forecast


