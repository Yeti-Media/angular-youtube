describe("YoutubeSearch", function() {

  var search;

  beforeEach(function() {
    module("AngularYoutube");

    inject(function($injector) {
      search = $injector.get("YoutubeSearch");
    });
  });
   
  it("exists", function() {
    expect(search).toBeTruthy()
  });
});