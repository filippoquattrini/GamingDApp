let myAddress = "";
let web3 = {};



async function connectMetamask() {
    const {ethereum} = window;
    //console.log(Boolean(ethereum && ethereum.isMetaMask));
    // console.log(window.ethereum);
    web3 = new Web3(ethereum);
    web3.eth.getAccounts(function (err, response) {
        console.log("account via web3js api");
        console.log(response);
        myAddress = response[0];
    })

    const accounts = await ethereum.request({method: 'eth_accounts'});
    console.log("account via metamask api");
    console.log(accounts[0]);
    myAddress = accounts[0];


}
