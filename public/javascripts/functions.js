
 let myAddress = "";
 let web3 = {};
 let myContract = {}
 let currentImgIdx = 0;
 let a = 0;
 



async function connectMetamask() {
    const {ethereum} = window;
    //console.log(Boolean(ethereum && ethereum.isMetaMask));
    // console.log(window.ethereum);
    web3 = new Web3(ethereum);
    // web3.eth.getAccounts(function (err, response) {
    //     console.log("account via web3js api");
    //     console.log(response);
    //     myAddress = response[0];
    // })
	await loadContract()

    await web3.eth.getAccounts().then(function (response) {
        myAddress = response[0];
        console.log(response);
    })

    const accounts = await ethereum.request({method: 'eth_accounts'});
    console.log("account via metamask api");
    console.log(accounts[0]);
    myAddress = accounts[0];

}

async function loadContract(){
    let abi = [
		{
			"inputs": [],
			"stateMutability": "payable",
			"type": "constructor"
		},
		{
			"stateMutability": "payable",
			"type": "fallback"
		},
		{
			"inputs": [],
			"name": "Cartone",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "tipoPizza",
					"type": "string"
				}
			],
			"name": "Vendita",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "tipoPizza",
					"type": "string"
				}
			],
			"name": "acquista",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "nomePizza",
					"type": "string"
				}
			],
			"name": "getPizza",
			"outputs": [
				{
					"components": [
						{
							"internalType": "int256",
							"name": "nfette",
							"type": "int256"
						},
						{
							"internalType": "string",
							"name": "rarita",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "costo",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "costoFetta",
							"type": "uint256"
						}
					],
					"internalType": "struct pazzapizza.Pizza",
					"name": "",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"stateMutability": "payable",
			"type": "receive"
		}
	]

let contractAddress = "0xef14265345ccD8c40Fd17B876Bd25F4988420992"
    myContract = new web3.eth.Contract(abi, contractAddress);
    console.log(myContract);
   
   
   
    
  // Funzione per calcolare il prezzo totale della pizza
//   function calcolaPrezzo(pizza, quantita) {
//     const prezzoPizza = prezziPizze[pizza];
//     const prezzoTotale = prezzoPizza * quantita;
//     return prezzoTotale;
//   }
  
//   // Esempio di utilizzo della funzione
//   const pizzaScelta = 'margherita';
//   const quantita = 2;
//   const prezzoTotale = calcolaPrezzo(pizzaScelta, quantita);
//   console.log(`Il prezzo totale per ${quantita} ${pizzaScelta} è ${prezzoTotale} euro.`);

    }


   
    
  // Funzione per calcolare il prezzo totale della pizza
//   function calcolaPrezzo(pizza, quantita) {
//     const prezzoPizza = prezziPizze[pizza];
//     const prezzoTotale = prezzoPizza * quantita;
//     return prezzoTotale;
//   }
  
//   // Esempio di utilizzo della funzione
//   const pizzaScelta = 'margherita';
//   const quantita = 2;
//   const prezzoTotale = calcolaPrezzo(pizzaScelta, quantita);
//   console.log(`Il prezzo totale per ${quantita} ${pizzaScelta} è ${prezzoTotale} euro.`);


    async function acquista(nome, value){
		console.log(value)
       await myContract.methods.acquista(nome).send({
            from: myAddress,
            value: web3.utils.toWei(value, 'ether')
        }).then(function (response) {
            console.log("acquisto completato");
	     	 changeImage()
    		
        });
	}
		
    async function vendita(pizza){
       
    myContract.methods.Vendita(pizza).send({
        from:myAddress
    }).then(function (response) {
        console.log(response);
    });
}

    async function cartone()    {
        myContract.methods.Cartone().send({
			from: myAddress
		}).then(function (response) {
        console.log(response);
    })
}

// const margherita = [ 
// 	'/img/New Piskel-4.png.png',
// 	'/img/New Piskel-3.png.png',
// 	'/img/New Piskel-2.png.png',
// 	'/img/1.png'
// ]; 
// const capricciosa= [ 
// 	'/img/capricciosavuota.png',
// 	'/img/unafettacapricciosa.png',
// 	'/img/duefettecapricciosa.png',
// 	'/img/trefettecapricciosa.png',
// 	'/img/capricciosa.png'
// ]; 
// const diavola = [ 
// 	'/img/diavolavuota.png',
// 	'/img/unafettadiavola.png',
// 	'/img/duefettediavola.png',
// 	'/img/trefettediavola.png',
// 	'/img/diavola.png'
// ]; 
// const cipolla = [ 
// 	'/img/New Piskel-4.png.png',
// 	'/img/New Piskel-3.png.png',
// 	'/img/New Piskel-2.png.png',
// 	'/img/1.png'
// ]; 

 
// // Call changeImage() function on button click
// function changeImage(nome){
// 	//aumenta margherita
// 	if (nome == 'margherita')
// 	{
	
//     if(currentImgIdx >= margherita.length){
//         currentImgIdx = 0;
//     }
//     img.margherita.src =  margherita[currentImgIdx];
//     currentImgIdx++;
// }
// if (nome == 'diavola'){
// 	//aumenta diavola
//     if(currentImgIdx >= diavola.length){
//         currentImgIdx = 0;

//     }
//     img.diavola.src =  diavola[currentImgIdx];
//     currentImgIdx++;
//     }

// if (nome == 'cipolla')
// {
// 	//aumenta cipolla
//     if(currentImgIdx >= cipolla.length){
//         currentImgIdx = 0;
//     }
//     img.cipolla.src =  cipolla[currentImgIdx];
//     currentImgIdx++;
// }
// if (nome == 'capricciosa')
// {
// 	//capricciosa
	
//     if(currentImgIdx >= capricciosa.length){
//         currentImgIdx = 0;
//         // If current idx exceeds images array
//         // length, reset it to 0 again
//     }
//     img.capricciosa.src =  capricciosa[currentImgIdx];
//     currentImgIdx++;
//     }
// }

// Call changeImage() function on button click
function changeImage(){
	const images = [ 
		'/img/unafettacapricciosa-removebg-preview.png',
		'/img/duefettecapricciosa-removebg-preview.png',
		'/img/trefettecapricciosa-removebg-preview.png',
		'public/img/capricciosa-removebg-preview.png'
	]; 
	const img = document.getElementById('diavola');
    if(currentImgIdx >= images.length){
        currentImgIdx = 0;
        // If current idx exceeds images array
        // length, reset it to 0 again
    }
    img.src = images[currentImgIdx];
    currentImgIdx++;
    // Increment current image idx by 1
}
    
  






