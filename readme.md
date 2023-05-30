#Node-cron heroku practice
by Alec Hannaford

-----
### Problems to Troubleshoot
- Determine whether we should set timezone in the dyno or in the node-cron statement. It seems to be running in UTC right now. 

- On May 29th at 1:55 PM I restarted the App with the westcoast timezone as the TZ env variable, and inside the node cron statement. Will this mean that 2 more docs will be made today? Or will it remain in UTC?
    - Update May 29th 2:01PM: It added a new doc w UTC timestamp 2023-05-29T21:00:00.652+00:00. Will this terminate after 4PM?\
    - should we change nodetab to 8-5, since it's exlusive?
    - Update may 30th: no need - IT WORKED! posted utc till 4pm

### Todo
- Add endpoints to return date ranges