
document.addEventListener("DOMContentLoaded", () => {
  let APIResponse = {
    "status": "success",
    "message": {
      "affenpinscher": [],
      "african": [],
      "airedale": [],
      "akita": [],
      "appenzeller": [],
      "basenji": [],
      "beagle": [],
      "bluetick": [],
      "borzoi": [],
      "bouvier": [],
      "boxer": [],
      "brabancon": [],
      "briard": [],
      "bulldog": ["boston", "french"],
      "bullterrier": ["staffordshire"],
      "cairn": [],
      "cattledog": ["australian"],
      "chihuahua": [],
      "chow": [],
      "clumber": [],
      "cockapoo": [],
      "collie": ["border"],
      "coonhound": [],
      "corgi": ["cardigan"],
      "cotondetulear": [],
      "dachshund": [],
      "dalmatian": [],
      "dane": ["great"],
      "deerhound": ["scottish"],
      "dhole": [],
      "dingo": [],
      "doberman": [],
      "elkhound": ["norwegian"],
      "entlebucher": [],
      "eskimo": [],
      "frise": ["bichon"],
      "germanshepherd": [],
      "greyhound": ["italian"],
      "groenendael": [],
      "hound": ["afghan", "basset", "blood", "english", "ibizan", "walker"],
      "husky": [],
      "keeshond": [],
      "kelpie": [],
      "komondor": [],
      "kuvasz": [],
      "labrador": [],
      "leonberg": [],
      "lhasa": [],
      "malamute": [],
      "malinois": [],
      "maltese": [],
      "mastiff": ["bull", "tibetan"],
      "mexicanhairless": [],
      "mix": [],
      "mountain": ["bernese","swiss"],
      "newfoundland": [],
      "otterhound": [],
      "papillon": [],
      "pekinese": [],
      "pembroke": [],
      "pinscher": ["miniature"],
      "pointer": ["german", "germanlonghair"],
      "pomeranian": [],
      "poodle": [ "miniature", "standard", "toy"],
      "pug": [],
      "puggle": [],
      "pyrenees": [],
      "redbone": [],
      "retriever": [ "chesapeake", "curly", "flatcoated", "golden"],
      "ridgeback": ["rhodesian"],
      "rottweiler": [],
      "saluki": [],
      "samoyed": [],
      "schipperke": [],
      "schnauzer": [ "giant", "miniature"],
      "setter": ["english", "gordon", "irish"],
      "sheepdog": ["english", "shetland"],
      "shiba": [],
      "shihtzu": [],
      "spaniel": [ "blenheim", "brittany", "cocker", "irish", "japanese", "sussex", "welsh"],
      "springer": ["english"],
      "stbernard": [],
      "terrier": [ "american", "australian", "bedlington", "border", "dandie", "fox", "irish", "kerryblue", "lakeland", "norfolk", "norwich", "patterdale", "russell", "scottish", "sealyham", "silky", "tibetan", "toy", "westhighland", "wheaten", "yorkshire"],
      "vizsla": [],
      "weimaraner": [],
      "whippet": [],
      "wolfhound": ["irish"]
    }
  }

  const upperCase = (str) =>{ // function to capitalize the first letter
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const randoness = (arr) => { // function to made random breeds with the Object.entries that is the total of breeds (87)
    let random = Object.entries(APIResponse.message)[Math.floor(Math.random()*87)] // (87)... .is the key.length Object.values(Object.keys(key))
    if(random[1].length){
      let randomSub = Math.floor(Math.random() * random[1].length)
      return `${random[1][randomSub]} ${random[0]}`
    } else {
      return `${random[0]}`
    }
  };

    let breedList = [];
    let breedKeys = APIResponse.message; // All the breeds
  const displayBreeds = () => {
    for(breedVal in breedKeys){ //for loops for Objs.
      if (breedKeys[breedVal].length > 0) {
        breedKeys[breedVal].forEach(breedSub => {
          breedList.push(upperCase(breedSub) + " " + upperCase(breedVal));
        });
      } else {
        breedList.push(`${upperCase(breedVal)}`);
      };
    }
    return breedList;
  };

    let container = document.createElement("div");
    // container.style.margin = "50px 10px 20px 30px";
    container.classList.add("toShow"); //creating a class for the div container
    let toShow = document.querySelector(".toShow"); //class DOM
    let search = document.querySelector(".search"); //button

  search.addEventListener("click", (event) => {
    event.preventDefault();
    search.style.background = "#f9ae81";
    search.innerText = "Another One!";
    container.innerText = randoness(displayBreeds());
    let outPut = document.body.appendChild(container)
  });
})
// It didn't work ... because: breedList is undefined....
    // const displayBreeds = () => {
    //   Object.keys(breedKeys).forEach(dogVal => {   // I need to see each breed(keys of this object) including sub-breeds(values)
    //     if (breedKeys[dogVal].length) {
    //       breedKeys[dogVal].forEach(breedSub => {
    //       breedList.push(upperCase(dogVal[randoness(dogVal)]) + " " + breedSub[randoness(breedSub)]);
    //       });
    //     }else{
    //       breedList.push(upperCase(breedSub)); // breedList is undefined....
    //     }
    //   });
    //   return breeList; // breedList is undefined....
    // };
