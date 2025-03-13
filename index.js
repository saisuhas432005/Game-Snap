
    fetch("session_check.php")
    .then(response => response.json())
    .then(data => {
        if (data.loggedIn) {
            window.location.href = "index.php"; // Redirect to PHP homepage if logged in
        }
    });


    
    function redirectToGame() {
        let input = document.getElementById("searchBox").value.toLowerCase();
        let gameLinks = {
            "action games": "actiongames.html",
            "adventure games": "advaenturegames.html",
            "car games": "cargames.html",
            "mind games": "mindgames.html",
            "couple games": "couplegames.html",
            "bike games": "bikegames.html"
          
           
        };
        
        for (let category in gameLinks) {
            if (category.includes(input)) {
                window.location.href = gameLinks[category];
                return;
            }
        }
        alert("Game category not found!");
    }
