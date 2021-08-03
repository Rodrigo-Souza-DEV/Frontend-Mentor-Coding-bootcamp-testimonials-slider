let camp1 = document.querySelector("#article-text");
    let camp2 = document.querySelector("#article-text2");
    let face = document.querySelector("#face");
    let face2 = document.querySelector("#face2");
    let n = 0;
    function next() {
      if (camp1.style.display == "block") {
        camp1.style.display = "none";
        camp2.style.display = "block";
        face.style.display = "none";
        face2.style.display = "block";
      } else {
        camp1.style.display = "block";
        camp2.style.display = "none";
        face.style.display = "block";
        face2.style.display = "none";
      }
    }
    function pre() {
      if (camp1.style.display == "none") {
        camp1.style.display = "block";
        camp2.style.display = "none";
        face.style.display = "block";
        face2.style.display = "none";
      } else {
        camp1.style.display = "none";
        camp2.style.display = "block";
        face.style.display = "none";
        face2.style.display = "block";
      }
    }

    function load(){
      setInterval(() => {
        if (camp1.style.display == "block") {
        camp1.style.display = "none";
        camp2.style.display = "block";
        face.style.display = "none";
        face2.style.display = "block";
      } else {
        camp1.style.display = "block";
        camp2.style.display = "none";
        face.style.display = "block";
        face2.style.display = "none";
      }
      }, 2000);
    }