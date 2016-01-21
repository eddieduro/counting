describe('counting', function(){
  it('will accept only numeric values', function() {
    expect(counting(3)).to.equal(3);
  });

  it('will round up non-integer values to the next highest whole number', function() {
    expect(counting(3.6)).to.equal(4);
  });

  it('will add user input1 to itself - until it reaches second user input', function() {
    expect(counting(2, 4)).to.equal(4);
  });
});
