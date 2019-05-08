# lab-12-city-explorer-reboot
## Requirements
Create the following components, all within your `app.js` file.

#### `<App>`
* Should contain all child components, which are wrapped in `<React.Fragment>`.  The breakdown of child components is as follows.  We will be expanding on this structure throughout the week:

```
<App>
  <Header>
  <Main>
    <Search>
    <Map>
    <Result>
```

#### `<Header>`
* Should contain an `<h1>` with the title of your application (City Explorer).
* Should contain a `<p>` with the following text: "Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!"

#### `<Main>`
* Should contain the homepage markup and subsequent components.  This includes the following:
1. A search box and button for searching for a location
2. A Google Maps placeholder
3. 5 result boxes that will be used to house results our future API calls.  You may use "lorem ipsum" text for now. Those APIs include: the Dark Sky API, Yelp API, Meetup API, MovieDB API, nd the Hiking Project API.

Use the current deployed site or your previous City Explorer front end code as a way to capture what features should exist.  All dynamic data should be filled with placeholder content for now.  We'll update this later in the week with real-time data from 3rd party APIs.

#### `<Search>`
* Should contain an `<input>` and a `<button>` element for searching for a location.  This does not have to be wired to work yet - just the markup is required.

#### `<Map>`
* Should contain a Google Map placholder.  This does not have to be wired up work yet - just the markup is required.

#### `<Result>`
* Should contain an `<section>` element with placeholder content that will be filled with real-time data later in the week.  You may simply nest 5 `<Result>` components inside of `<Main>` for the time being.  We will be recomposing this later in the week.
### Time Estimate

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```
Number and name of feature: Header

Estimate of time needed to complete: 10 min

Start time: 9:15

Finish time: 9:20

Actual time needed to complete: 5 min
```
### Time Estimate

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```
Number and name of feature: Main

Estimate of time needed to complete: 1 hr

Start time: 9:45

Finish time: 11:15

Actual time needed to complete: 1.5 hrs
```
### Time Estimate

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```
Number and name of feature: Search

Estimate of time needed to complete: 1hr

Start time: 9:20

Finish time: 10:00

Actual time needed to complete: 40 min
```
### Time Estimate

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```
Number and name of feature: Map

Estimate of time needed to complete: 30 min

Start time: 10:00

Finish time: 10:20

Actual time needed to complete: 20 min
```
### Time Estimate

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```
Number and name of feature: Result

Estimate of time needed to complete: 1hr

Start time: 10:25

Finish time: 11:15

Actual time needed to complete: 50 min
```