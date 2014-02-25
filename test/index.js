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
  it('should return a string equal to \'by her lover `Bill`.\'', function(){
    truncate.right(killbill, 20).should.be.equal('by her lover `Bill`.');
  });

  it('should return a string equal to given string', function(){
    truncate.right(killbill, 200).should.be.equal(killbill);
  });

  it('should return a string less or equal to 20 characters', function(){
    truncate.right(killbill, 20).length.should.be.below(21);
  });
})

describe('truncate.right(string, 20, \'... \')', function(){
  it('should return a string equal to \'... by her lover `Bill`.\'', function(){
    truncate.right(killbill, 20, '... ').should.be.equal('... by her lover `Bill`.');
  });
});

describe('truncate.right(string, 20, \'… \')', function(){
  it('should return a string equal to \'… by her lover `Bill`.\'', function(){
    truncate.right(killbill, 20, '… ').should.be.equal('… by her lover `Bill`.');
  });
});

var rhapsody = "Is this the real life?\n"
             + "Is this just fantasy?\n"
             + "Caught in a landslide\n"
             + "No escape from reality\n"
             + "Open your eyes\n"
             + "Look up to the skies and see\n"
             + "I'm just a poor boy, I need no sympathy\n"
             + "Because I'm easy come, easy go\n"
             + "Little high, little low\n"
             + "Any way the wind blows, doesn't really matter to me, to me.\n";

var left_part = "Is this the real life?\n"
              + "Is this just fantasy?\n"
              + "Caught in a landslide\n"
              + "No escape from reality\n"
              + "Open your eyes\n"
              + "Look up to the skies and see\n"
              + "I'm just a poor boy, I need no sympathy\n"
              + "Because I'm easy come,";

var right_part  = "Open your eyes\n"
                + "Look up to the skies and see\n"
                + "I'm just a poor boy, I need no sympathy\n"
                + "Because I'm easy come, easy go\n"
                + "Little high, little low\n"
                + "Any way the wind blows, doesn't really matter to me, to me.\n";

describe('truncate(string)', function(){
  it('should return a string equal to left part of `Bohemiam rhapsody`', function(){
    truncate(rhapsody).should.be.equal(left_part);
  });

  it('should return a string less or equal to 200 chars', function(){
    truncate(rhapsody).length.should.be.below(201);
  });

  it('should return a string equal to left part of `Bohemiam rhapsody` plus \'...\'', function(){
    truncate(rhapsody, ' ...').should.be.equal(left_part + ' ...');
  });
});

describe('truncate.right(string)', function(){
  it('should return a string equal to rigth part of `Bohemiam rhapsody`', function(){
    truncate.right(rhapsody).should.be.equal(right_part);
  });

  it('should return a string less or equal to 200 chars', function(){
    truncate.right(rhapsody).length.should.be.below(201);
  });

  it('should return a string equal to \'... \' plus right part of `Bohemiam rhapsody`.', function(){
    truncate.right(rhapsody, '... ').should.be.equal('... ' + right_part);
  });
});
