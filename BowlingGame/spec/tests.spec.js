"use strict";

describe("Bowling Player", function(){
  var player1;

  beforeEach(function(){
      player1 = new Player();
  });

  it("can create player", function() {
      expect(player1.score).not.toBe(undefined);
      expect(player1.score).toBe(0);
  });

  it("can roll a strike", function(){
      player1.roll(10);
      player2.roll(3);
      player3.roll(3);
      expect(player1.score).toBe(22);
  });
});