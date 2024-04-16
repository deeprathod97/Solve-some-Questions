  let radius = 8;
  let volume = calculateSphereVolume(radius);
  console.log("The volume of the sphere is: " + volume.toFixed(2)); 


  function calculateSphereVolume(radius) {
    return (4/3) * Math.PI * Math.pow(radius, 3);
  }
  