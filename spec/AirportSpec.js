describe ('Airport', function() {
  let airport;

  beforeEach (function() {
    airport = new Airport();
  });

  describe ('#capacity', function() {
    it ('automatically sets to default capacity', function() {
      expect(airport.capacity()).toEqual(airport.DEFAULT_CAPACITY)
    });
  });
});
