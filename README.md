# Crisis Beacon
<!-- <img src="assets/beacon.png" style="width: 60px; height: 60px"/> -->

## Project Description
FB Hackathon 2019: We wanted to respond to the problem that crisis responders don't know the location of where to find people during a public or private crisis. So this bot responds directly to a person in need of a crisis response by flagging a crisis responder on the map.

## Live Server Link
https://crisis-beacon-server.herokuapp.com/

## API Endpoints

### User Beacons
**`CREATE POST /beacon`** <br>
    - **Arguments:**  Beacon Model <br>
    - **Returns:**   status of 200 or error status 500
 <br>

**`INDEX GET /beacons`**  <br>
    - **Arguments:** <br>
    - **Returns:**   An array of objects with beacons, and status of 200 or error status 500

**`READ GET /beacon/:id`**  <br>
    - **Arguments:** <br>
    - **Returns:**  An object of a beacon, and status of 200 or error status 500
 <br>

## Presentation
[Crisis Beacon Deck](https://docs.google.com/presentation/d/1Ep9Jvll6JiroeZ6YXOi2AEokbLixljNxYOLQyRTfaZI/edit?usp=sharing)


## Tech Stack

## Contributors

 