import { Wadson } from './../js/wadson.js';

describe('wadson', function() {
  let lumberjackWadson;

  beforeEach(function() {
    lumberjackWadson = new Wadson("Lumberjack Wadson");
    jasmine.clock().install();
    lumberjackWadson.setHunger();
    lumberjackWadson.setSleep();
    lumberjackWadson.setPlay();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and base levels', function() {
    expect(lumberjackWadson.name).toEqual("Lumberjack Wadson");
    expect(lumberjackWadson.foodLevel).toEqual(10);
    expect(lumberjackWadson.sleepLevel).toEqual(3);
    expect(lumberjackWadson.playLevel).toEqual(5);
    alert(lumberjackWadson.playLevel);
    expect(lumberjackWadson.level).toEqual(1);
  });

  it('should show decriments of food level', function() {
    jasmine.clock().tick(30001);
    expect(lumberjackWadson.foodLevel).toEqual(8);
  });

  it('should show decriments of sleep level', function() {
    jasmine.clock().tick(80001);
    expect(lumberjackWadson.sleepLevel).toEqual(1);
  });

  it('should show decriments of play level', function() {
    alert(lumberjackWadson.playLevel);
    jasmine.clock().tick(30001);
    expect(lumberjackWadson.playLevel).toEqual(4);
  });

});
