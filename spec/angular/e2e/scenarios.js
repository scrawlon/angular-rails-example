'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  describe('/', function() {

    beforeEach(function() {
      browser.get('/');
    });


    it('should render default route /posts#index/ when user navigates to /', function() {
      expect(element.all(by.css('h1')).first().getText()).
        toMatch(/Listing posts/);
    });

  });
});

