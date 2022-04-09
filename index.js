// Code your solution in this file!
let hq = 42
function distanceFromHqInBlocks(blockA){
  if (blockA >= 42){
    return blockA - hq;
  }
  return hq - blockA;
};
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);
function distanceFromHqInFeet (blockA){
  if (blockA >= 42) {
    return (blockA - hq)*264;
  }
  return (hq - blockA)*264;
};
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet (block1, block2) {
  if (block1 >= block2){
    return (block1 - block2)*264;
  }
  return (block2 - block1)*264;
}
distanceTravelledInFeet (43, 48);
distanceTravelledInFeet (50, 60);
distanceTravelledInFeet (34, 28);

function calculatesFarePrice (start, destination){
  if (start <= destination){
    if ((destination - start)*264 <= 400){
      return 0;
    } else if ((destination - start)*264 < 2500){
      return 25;
    }
  } else if ((start - destination)*264 < 2000){
    return parseFloat(((start - destination)*264 - 400)*2/100);
  } else {
    return 'cannot travel that far';
  }
}
calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);