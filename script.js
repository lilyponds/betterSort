function shuffle(arr){

    //arr.sort((a,b)=>(a+Math.random()*arr.length)-(b+Math.random()*arr.length)); - this will give biased results
    
    //Fischer Yates randomly swaps two members of an array
    for(i=arr.length-1;i>=0;i--){
    let j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    }
    
    let count = {
      '123': 0,
      '132': 0,
      '213': 0,
      '231': 0,
      '321': 0,
      '312': 0
    };
    
    for (let i = 0; i < 1000000; i++) {
      let array = [1, 2, 3];
      shuffle(array);
      count[array.join('')]++;
    }
    
    // show counts of all possible permutations
    for (let key in count) {
      console.log(`${key}: ${count[key]}`);
    }