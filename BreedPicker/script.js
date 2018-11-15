
  let APIResponse = { //dog data
    "status": "success",
    "message": {
      "affenpinscher": [

      ],
      "african": [

      ],
      "airedale": [

      ],
      "akita": [

      ],
      "appenzeller": [

      ],
      "basenji": [

      ],
      "beagle": [

      ],
      "bluetick": [

      ],
      "borzoi": [

      ],
      "bouvier": [

      ],
      "boxer": [

      ],
      "brabancon": [

      ],
      "briard": [

      ],
      "bulldog": [
        "boston",
        "french"
      ],
      "bullterrier": [
        "staffordshire"
      ],
      "cairn": [

      ],
      "cattledog": [
        "australian"
      ],
      "chihuahua": [

      ],
      "chow": [

      ],
      "clumber": [

      ],
      "cockapoo": [

      ],
      "collie": [
        "border"
      ],
      "coonhound": [

      ],
      "corgi": [
        "cardigan"
      ],
      "cotondetulear": [

      ],
      "dachshund": [

      ],
      "dalmatian": [

      ],
      "dane": [
        "great"
      ],
      "deerhound": [
        "scottish"
      ],
      "dhole": [

      ],
      "dingo": [

      ],
      "doberman": [

      ],
      "elkhound": [
        "norwegian"
      ],
      "entlebucher": [

      ],
      "eskimo": [

      ],
      "frise": [
        "bichon"
      ],
      "germanshepherd": [

      ],
      "greyhound": [
        "italian"
      ],
      "groenendael": [

      ],
      "hound": [
        "afghan",
        "basset",
        "blood",
        "english",
        "ibizan",
        "walker"
      ],
      "husky": [

      ],
      "keeshond": [

      ],
      "kelpie": [

      ],
      "komondor": [

      ],
      "kuvasz": [

      ],
      "labrador": [

      ],
      "leonberg": [

      ],
      "lhasa": [

      ],
      "malamute": [

      ],
      "malinois": [

      ],
      "maltese": [

      ],
      "mastiff": [
        "bull",
        "tibetan"
      ],
      "mexicanhairless": [

      ],
      "mix": [

      ],
      "mountain": [
        "bernese",
        "swiss"
      ],
      "newfoundland": [

      ],
      "otterhound": [

      ],
      "papillon": [

      ],
      "pekinese": [

      ],
      "pembroke": [

      ],
      "pinscher": [
        "miniature"
      ],
      "pointer": [
        "german",
        "germanlonghair"
      ],
      "pomeranian": [

      ],
      "poodle": [
        "miniature",
        "standard",
        "toy"
      ],
      "pug": [

      ],
      "puggle": [

      ],
      "pyrenees": [

      ],
      "redbone": [

      ],
      "retriever": [
        "chesapeake",
        "curly",
        "flatcoated",
        "golden"
      ],
      "ridgeback": [
        "rhodesian"
      ],
      "rottweiler": [

      ],
      "saluki": [

      ],
      "samoyed": [

      ],
      "schipperke": [

      ],
      "schnauzer": [
        "giant",
        "miniature"
      ],
      "setter": [
        "english",
        "gordon",
        "irish"
      ],
      "sheepdog": [
        "english",
        "shetland"
      ],
      "shiba": [

      ],
      "shihtzu": [

      ],
      "spaniel": [
        "blenheim",
        "brittany",
        "cocker",
        "irish",
        "japanese",
        "sussex",
        "welsh"
      ],
      "springer": [
        "english"
      ],
      "stbernard": [

      ],
      "terrier": [
        "american",
        "australian",
        "bedlington",
        "border",
        "dandie",
        "fox",
        "irish",
        "kerryblue",
        "lakeland",
        "norfolk",
        "norwich",
        "patterdale",
        "russell",
        "scottish",
        "sealyham",
        "silky",
        "tibetan",
        "toy",
        "westhighland",
        "wheaten",
        "yorkshire"
      ],
      "vizsla": [

      ],
      "weimaraner": [

      ],
      "whippet": [

      ],
      "wolfhound": [
        "irish"
      ]
    }
  };
  // let  list = {
  //   key: keys,
  //   value: values,
  // };


  let value = Object.values(APIResponse);
  let container = document.createElement("div");
  let list = container.classList.add("list"); //creating a class for the div container
  let listDom = document.querySelector(".list"); //class DOM
  let search = document.querySelector(".search"); //button

    search.addEventListener("click", (event) => {
      event.preventDefault();
      search.style.background = "lightgreen";
      event.target.parentNode.insertBefore(container, search);
    // event.target.body.appendChild(container);
    });
    const upperCase = (word1) =>{
      word1.charAt(0).toUpperCase() + key[i].slice(1);
    };
    const randoness = (arr) => {
      Math.floor(Math.random() * arr.length);
    };
             // container.innerText = `${breedList.push(upperCase(breedOrigen) + " " + subArr)}`;
     // subArr = APIResponse.message[key[i]];
    let breedList = [];
    objkey =  APIResponse.message

    const displayBreeds = (subArr) => {
      let key = Object.keys(APIResponse.message);
      for (let i = 0; i < subArr.length; i++) {
        subArr = subArr[key[i]]
        if (subArr.length === undefined) {
          subArr.forEach(breedOrigen => {
            subArr[breedOrigen]
          breedList.push(upperCase(breedOrigen[randoness(breedOrigen)]) + " " + subArr[randoness(subArr)]);
          });
        }else {
          breedList.push(upperCase(subArr));
            // container.innerHTML = `${key}` //All the breeds
        }
      }
    };
    search.addEventListener("click", (event) => {
      // let name = `${firstNames[randomNum(firstNames)]}
      // displayBreeds()
      container.innerHTML = displayBreeds();
      search.innerText = "Another One!";

    });
      // let divided = key.split("", key.length)
      //   if(key.length !== undefined){ // listBread.length === 0
      //     let subBreeds = breadList.push(Object.entries(key)); // (87)... .is the key.length Object.values(Object.keys(key))
      //     container.innerHTML = `${subBreeds}`
      // }
