function receivesAFunction(callback){
  callback()

}

function returnsANamedFunction() {
  function named(){
    console.log('name')
  }

  return named

}

function returnsAnAnonymousFunction(){
  var thing = function(){console.log('secret')}
  return thing
}