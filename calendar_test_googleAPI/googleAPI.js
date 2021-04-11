var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var { OAuth2Client } = require('google-auth-library');

var SCOPES = ['https://www.googleapis.com/auth/calendar.readonly', 'https://www.googleapis.com/auth/calendar'];

var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) + '/.credentials/';
// 토큰이 저장될 디렉토리
var TOKEN_PATH = TOKEN_DIR + 'calendar-nodejs-quickstart.json';
// 토큰 파일 명

fs.readFile('./client_secret.json', function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }
  authorize(JSON.parse(content), listEvents);
});

function authorize(credentials, callback) {
  var clientSecret = credentials.web.client_secret;
  var clientId = credentials.web.client_id;
  var redirectUrl = credentials.web.redirect_uris[0];

  //var auth = new GoogleAuth();
  var oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUrl);

  fs.readFile(TOKEN_PATH, function (err, token) {
    if (err) {
      getNewToken(oauth2Client, callback);
    } else {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client);
    }
  });
}

function getNewToken(oauth2Client, callback) {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  console.log('Authorize this app by visiting this url: ', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', function (code) {
    rl.close();
    oauth2Client.getToken(code, function (err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}

function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
}

function listEvents(auth) {
  var calendar = google.calendar('v3');

  calendar.events.list(
    {
      auth: auth,
      calendarId: 'primary', // 이곳에 이벤트를 가져올 캘린더 id를 입력해야 합니다.
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    },
    function (err, response) {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      }
      var events = response.items;
      if (events.length == 0) {
        console.log('No upcoming events found.');
      } else {
        console.log('Upcoming 10 events:');
        for (var i = 0; i < events.length; i++) {
          var event = events[i];
          var start = event.start.dateTime || event.start.date;
          console.log('%s - %s', start, event.summary);
        }
      }
    }
  );

  calendar.calendarList.list(
    {
      auth: auth,
    },
    function (err, calendarList) {
      if (err) console.log(err);

      var deleteCalendarId;
      var isCGSCalendar = false;

      for (var i = 0; i < calendarList.items.length; i++) {
        if (calendarList.items[i].summary === 'CHEOLGUSO') {
          isCGSCalendar = true;
          deleteCalendarId = calendarList.items[i].id;
        }
      }

      if (isCGSCalendar) {
        calendar.calendars.delete(
          {
            auth: auth,
            calendarId: deleteCalendarId,
          },
          function (err, calendars) {
            if (err) console.log(err);
          }
        );
      } else {
        calendar.calendars.insert(
          {
            auth: auth,
            resource: {
              summary: 'CHEOLGUSO',
            },
          },
          function (err, calendars) {
            if (err) console.log(err);
          }
        );
      }
    }
  );
}
