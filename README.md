Keychain
=========
Keychain is a hybrid iOS and Android app that manages and opens smart-doors in commercial properties. It was a group, paid project for [Oldcastle Building Envelope's](http://en.wikipedia.org/wiki/Oldcastle_Inc.) Digital Engineering Group and I worked with fellow [Fullstack](http://www.fullstackacademy.com/) engineers [Eddie Ng](https://github.com/wardsng) and [Sam Lau](http://laudsome.com/). The app was built using AngularJS, Javascript, the [Ionic Framework](http://ionicframework.com/), [PhoneGap](http://phonegap.com/), HTML, and CSS. While this was a group project I have included a few snippets of code that I personally wrote.

Code snippets
---------
* **Swipe to unlock feature**: Users are able to unlock doors with a simple swiping motion. The green background gradient (which advances with as the finger swipes), the "unlocking" text, and the spinning loading icon appear when the motion is completed and remain until the door unlocks (see first image below). The lock also makes a loud click indicating that it unlocked. The code to visualize a changing gradient is shown below.
```
function sliderHtml(number, index) {
  var key = angular.element(document.getElementsByClassName('key' + index));
  // number is how far the user has slide his finger over the selected element
  if (number > 1) {
    key.css({
      background: ''
    });
    key.css({
      background: 'linear-gradient( 90deg, #66cc33, #FFF ' + number + '%)'
    });
  } else {
    key.css({
      background: 'linear-gradient( 90deg, #66cc33, #FFF ' + number + '%)'
    });
  }
}
```
* **Events Page**: Locking events occur every time a door is unlocked. The app managed who opened the lock, what door they opened, and when the door was opened. This AngularJS/HTML page presented a searchable and filterable events page.
```
// only show when events are found and loaded
<div ng-show="loaded && !noEventsFound" class="list">
  // the events page is searchable
  <label class="item item-input row">
    <i class="icon ion-search placeholder-icon"></i>
    <input type="search" ng-model="searchTerm" placeholder="Search">
  </label>
  // the who, where, and what of each unlocking event are shown here. Clicking on the span name will change the filtering (similar to excel filters)
  <div class="item item-divider row">
    <div class="col col-25">
      <span ng-click="changeCurrent('name')" ng-class="{'blue-text': current === 'name'}">Name
      </span>
    </div>
    <div class="col col-25">
      <a ng-click="changeCurrent('door')" ng-class="{'blue-text': current === 'door'}">Door
      </a>
    </div>
    <div class="col col-50">
      <a ng-click="changeCurrent('date')" ng-class="{'blue-text': current === 'date'}">Date
      </a>
    </div>
  </div>
  <div ng-repeat="event in mainUser.events | filter:matchField(searchTerm) | orderBy:predicate: reverse">
    <div class="item row">
      <span class="col iPhone item-text-wrap text-small">{{event.user.name}}</span>
      <span class="col iPhone item-text-wrap text-small">{{event.lock.name}}</span>
      <span class="col iPhone item-text-wrap text-small">{{event.time | amDateFormat: 'lll' }}</span>
      <span class="col iPhone item-text-wrap text-small" am-time-ago="event.time"></span>
    </div>
  </div>
</div>
```

IMAGES
---------
![](/screenshots/landing.png?raw=true)
![](/screenshots/keys.png?raw=true)
![](/screenshots/locks.png?raw=true)