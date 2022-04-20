
# Redux Toolkit Sandbox
Some experiments with Redux Toolkit Sandbox

## Origin

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

I've borrowed inspiration from https://github.com/zoltan-nz/meetup-app-2022 and https://github.com/c-ehrlich/rtk-query-vs-react-query .


## Data

The backend used provides a 'get all' type response like this ....


```
rshea@tana:~$ curl http://localhost:8000/movies/
[
{"id":160,"film":"(500) Days of Summer","year":2009,"audience_score_percent":"81.00","genre":"comedy","lead_studio":"Fox","profitability":"8.10","rotten_tomatoes_percent":"87.00","worldwide_gross_usd":"60.72"},
{"id":159,"film":"27 Dresses","year":2008,"audience_score_percent":"71.00","genre":"Comedy","lead_studio":"Fox","profitability":"5.34","rotten_tomatoes_percent":"40.00","worldwide_gross_usd":"160.31"},
{"id":158,"film":"A Dangerous Method","year":2011,"audience_score_percent":"89.00","genre":"Drama","lead_studio":"Independent","profitability":"0.45","rotten_tomatoes_percent":"79.00","worldwide_gross_usd":"8.97"},
...
]

```
