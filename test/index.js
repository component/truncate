var truncate = require('../');

var killbill = "The lead character, called `The Bride`, was a member of the Deadly Viper Assassination Squad, lead by her lover `Bill`.";

describe('truncate(string, 20)', function(){
  it('should return a string equal to \'The lead character,\'', function(){
    truncate(killbill, 20).should.be.equal('The lead character,');
  });

  it('should return a string equal to given string', function(){
    truncate(killbill, 200).should.be.equal(killbill);
  });

  it('should return a string less or equal to 20 characters', function(){
    truncate(killbill, 20).length.should.be.below(21);
  });
});

describe('truncate(string, 20, \' ...\')', function(){
  it('should return a string equal to \'The lead character, ...\'', function(){
    truncate(killbill, 20, ' ...').should.be.equal('The lead character, ...');
  });
});

describe('truncate(string, 20, \' …\')', function(){
  it('should return a string equal to \'The lead character, …\'', function(){
    truncate(killbill, 20, ' …').should.be.equal('The lead character, …');
  });
});

describe('truncate.left(string, 20)', function(){
  it('should return a string equal to \'The lead character,\'', function(){
    truncate.left(killbill, 20).should.be.equal('The lead character,');
  });

  it('should return a string equal to given string', function(){
    truncate.left(killbill, 200).should.be.equal(killbill);
  });

  it('should return a string less or equal to 20 characters', function(){
    truncate.left(killbill, 20).length.should.be.below(21);
  });
})

describe('truncate.right(string, 20)', function(){
  it('should return a string equal to \'her lover `Bill`.\'', function(){
    truncate.right(killbill, 20).should.be.equal('her lover `Bill`.');
  });

  it('should return a string equal to given string', function(){
    truncate.right(killbill, 200).should.be.equal(killbill);
  });

  it('should return a string less or equal to 20 characters', function(){
    truncate.right(killbill, 20).length.should.be.below(21);
  });
})

describe('truncate.right(string, 20, \'... \')', function(){
  it('should return a string equal to \'... her lover `Bill`.\'', function(){
    truncate.right(killbill, 20, '... ').should.be.equal('... her lover `Bill`.');
  });
});

describe('truncate.right(string, 20, \'… \')', function(){
  it('should return a string equal to \'… her lover `Bill`.', function(){
    truncate.right(killbill, 20, '… ').should.be.equal('… her lover `Bill`.');
  });
});
