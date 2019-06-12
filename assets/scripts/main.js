            var callback = function() {
                  var img1 = document.createElement("img");
                  var img2 = new Image();
                  var img3 = new Image();

                  document.body.append(img1);
                  document.body.append(img2);
                  document.body.append(img3);

                  var promise1 = new Promise(function(resolve, reject) {
                        img1.onload = function() {
                              resolve('foo');
                        }
                  });

                  promise1.then(function(value) {
                        var backgoundElement = document.getElementsByClassName("background")[0];
                        backgoundElement.style.backgroundImage = "url(./assets/images/background.png)";
                        backgoundElement.style.backgroundRepeat = "no-repeat";
                        backgoundElement.style.backgroundPosition = "100% 10%";
                  });

                  var promise2 = new Promise(function(resolve, reject) {
                        img2.onload = function() {
                              resolve('foo');
                        }
                  });

                  promise2.then(function(value) {
                        var cloudsElement = document.getElementsByClassName("clouds")[0];
                        cloudsElement.style.backgroundImage = "url(./assets/images/clouds.png)";
                        cloudsElement.style.backgroundRepeat = "no-repeat";
                        cloudsElement.style.backgroundPosition = "50% 50%";
                  });            

                  var promise3 = new Promise(function(resolve, reject) {
                        img3.onload = function() {
                              resolve('foo');
                        }
                  });

                  promise3.then(function(value) {
                        var logoElement = document.getElementsByClassName("logo")[0];
                        logoElement.style.backgroundImage = "url(./assets/images/logo.png)";
                        logoElement.style.backgroundRepeat = "no-repeat";
                        logoElement.style.backgroundPosition = "50% 50%";
                  });   

                  img1.src = "assets/images/background.png";
                  img2.src = "assets/images/clouds.png";
                  img3.src = "assets/images/logo.png";

                  Promise.all([promise1, promise2, promise3]).then(function() {
                        var rellax = new Rellax('.rellax');

                        document.body.style.opacity = 0;
                        document.body.style.display = "block";

                        (function fade() {
                              var val = parseFloat(document.body.style.opacity);
                              if (!((val += .01) > 1)) {
                                    document.body.style.opacity = val;
                                    requestAnimationFrame(fade);
                              }
                        })();
                  });
            };

            if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
                  callback();
            } else {
                  document.addEventListener("DOMContentLoaded", callback);
            }
