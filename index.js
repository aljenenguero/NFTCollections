// create a variable to hold your NFT's
const myNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (nftName, nftShape, nftColor) {
    const NFT = {
        "Name": nftName,
        "Shape": nftShape,
        "Color": nftColor
    }
    myNFTs.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < myNFTs.length; i++){
        console.log("\Name: \t" + myNFTs[i].Name);
        console.log("\Shape: \t" + myNFTs[i].Shape);
        console.log("\Color: \t" + myNFTs[i].Color);
        console.log("\n")
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number of NFTs: " + myNFTs.length);
}

// call your functions below this line
mintNFT("Patrick", "Star", "Pink");
mintNFT("SpongeBob", "Square", "Yellow");
mintNFT("Plankton", "Oval", "Green");
listNFTs();
getTotalSupply();