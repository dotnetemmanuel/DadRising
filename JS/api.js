var dadJoke
	fetch(`https://api.api-ninjas.com/v1/dadjokes?limit=1`, {
		method: "GET",
		headers: {
			"X-Api-Key": "oV70/R/OjomCpenizwCmyA==25fn2IoVRLpaHjTD",
			"Content-Type": "application/json",
		},
	})
		.then((res) => 
			res.json()
		)
		.then((data) => {
                  dadJoke = data[0].joke;
                  console.log(data[0].joke);
			return data[0].joke;
		})
		.catch((error) => {
			console.log(
				"Something went wrong... your dad forgot his joke! You win!",
				error
			);
		});


