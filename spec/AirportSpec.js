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

  describe ('#changeCapacity', function() {
    it ('changes capacity', function() {
      const newCapactity = 100;
      airport.changeCapacity(newCapactity);
      expect(airport.capacity()).toEqual(newCapactity);
    });
  });

  describe ('#planes', function() {
    it ('automatically exists as an empty array', function() {
      expect(airport.planes()).toEqual([])
    });
  });

  describe ('when not stormy', function() {
    describe ('#land', function() {
      it ('will land a plane', function() {
        const plane = 'p';
        airport.land(plane);
        expect(airport.planes()[0]).toEqual(plane);
      });
    });
  });
});
