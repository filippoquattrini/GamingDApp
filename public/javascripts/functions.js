
 let myAddress = "";
// web3 = new Web3(ethereum);
 let web3 = {};
 let myContract = {}
 let currentImgIdx = 0;
 let a = 0;


async function connectMetamask() {
	currentImgIdx = 1;
    const {ethereum} = window;
    //console.log(Boolean(ethereum && ethereum.isMetaMask));
    // console.log(window.ethereum);
    web3 = new Web3(ethereum);
    // web3.eth.getAccounts(function (err, response) {
    //     console.log("account via web3js api");
    //     console.log(response);
    //     myAddress = response[0];
    // })

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
    let abi =[
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
			"inputs": [],
			"name": "Cartone",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
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
			"stateMutability": "payable",
			"type": "receive"
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
		}
	]
let contractAddress = "0xaf81D4efC34Ee3c22b68FB260C581E20756E7421"
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

    async function acquista(nome, value){
		console.log(value)
        myContract.methods.acquista(nome).send({
            from: myAddress,
            value: web3.utils.toWei(value, 'ether')
        }).then(function (response) {
            console.log(response);
	     	 changeImage(nome)
    		
        });
	}
		
    async function vendita(){
       
    myContract.methods.Vendita("capricciosa").send({
        from:myAddress
    }).then(function (response) {
        console.log(response);
    });
}
    async function cartone()    {
        myContract.methods.cartone().send({
			from: myAddress
		}).then(function (response) {
        console.log(response);
    })
}


 
// Call changeImage() function on button click
function changeImage(nome){
	//aumenta margherita
	const margherita = [ 
		'/img/New Piskel-4.png.png',
		'/img/New Piskel-3.png.png',
		'/img/New Piskel-2.png.png',
		'/img/1.png'
	]; 
	const img = document.getElementById(nome);
    if(currentImgIdx >= margherita.length){
        currentImgIdx = 0;
        // If current idx exceeds images array
        // length, reset it to 0 again
		img.src = margherita[currentImgIdx];
    currentImgIdx++;
    }
    img.src =  margherita[currentImgIdx];
    currentImgIdx++;
	//aumenta diavola
	const diavola = [ 
		'/img/New Piskel-4.png.png',
		'/img/New Piskel-3.png.png',
		'/img/New Piskel-2.png.png',
		'/img/1.png'
	]; 
    if(currentImgIdx >= diavola.length){
        currentImgIdx = 0;
		img.src = diavola[currentImgIdx];
    currentImgIdx++;
    }
    img.src =  diavola[currentImgIdx];
    currentImgIdx++;

	//aumenta cipolla
	const cipolla = [ 
		'/img/New Piskel-4.png.png',
		'/img/New Piskel-3.png.png',
		'/img/New Piskel-2.png.png',
		'/img/1.png'
	]; 
    if(currentImgIdx >= cipolla.length){
        currentImgIdx = 0;
        // If current idx exceeds images array
        // length, reset it to 0 again
		img.src = cipolla[currentImgIdx];
    currentImgIdx++;
    }
    img.src =  cipolla[currentImgIdx];
    currentImgIdx++;ù
	
	//aumenta wuestel
  
	const capricciosa= [ 
		'/img/capricciosavuota.png',
		'/img/unafettacapricciosa.png',
		'/img/duefettecapricciosa.png',
		'/img/trefettecapricciosa.png',
		'/img/capricciosa.png'
	]; 
    if(currentImgIdx >= capricciosa.length){
        currentImgIdx = 0;
        // If current idx exceeds images array
        // length, reset it to 0 again
		img.src = capricciosa[currentImgIdx];
    currentImgIdx++;
    }
    img.src =  capricciosa[currentImgIdx];
    currentImgIdx++;

	//aumenta
}


