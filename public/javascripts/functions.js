
// let myAddress = "";
// web3 = new Web3(ethereum);
// let web3 = {};
// let myContract = {}


async function connectMetamask() {
    const {ethereum} = window;
    //console.log(Boolean(ethereum && ethereum.isMetaMask));
    // console.log(window.ethereum);
    const web3 = new Web3(ethereum);
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

    let abi = [
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
    let contractAddress = "0xD7F8F226aCB2989e3A64054d8Ee0BCE5627CB53C"
      const  myContract = new web3.eth.Contract(abi, contractAddress);
        console.log(myContract);
        myContract.methods.acquista("cipolla"  ).send({
            from: myAddress,
            value: web3.utils.toWei('0.001', 'ether')
        }).then(function (response) {
            console.log(response);
        });

}

async function loadContract(){
    let abi = [
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
let contractAddress = "0xD7F8F226aCB2989e3A64054d8Ee0BCE5627CB53C"
    myContract = new web3.eth.Contract(abi, contractAddress);
    console.log(myContract);
    myContract.methods.acquista("cipolla").send({
        from: myAddress,
        value: web3.utils.towei('0.001', 'ether')
    }).then(function (response) {
        console.log(response);
    });
    
  // Funzione per calcolare il prezzo totale della pizza
  function calcolaPrezzo(pizza, quantita) {
    const prezzoPizza = prezziPizze[pizza];
    const prezzoTotale = prezzoPizza * quantita;
    return prezzoTotale;
  }
  
  // Esempio di utilizzo della funzione
  const pizzaScelta = 'margherita';
  const quantita = 2;
  const prezzoTotale = calcolaPrezzo(pizzaScelta, quantita);
  console.log(`Il prezzo totale per ${quantita} ${pizzaScelta} è ${prezzoTotale} euro.`);
  
    }