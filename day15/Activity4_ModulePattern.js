console.log("--------------------------Task6------------------------------------");

function ecommerceManagement(){
    let Items=["Griller",
        {
            "vegetables":["Tomatoes","Potatoes","Brinjal","Capsicum"]
        },
        {
            "Fruits":["Mango","Apple","Pomegranate","Pear"]
        },
        {
            "leafy vegetables":["Spinach","Corriander","Mint"]
        }
    ]
    function addItem(newItem){
        if(Items.indexOf(newItem)>-1)
            throw "Already present";
        
            Items.push(newItem);
    }
    function removeItem(item){
        let index=Items.indexOf(item);
        if(index>-1){
            Items.splice(index,1);
        }
        else{
            for(let i=0;i<Items.length;i++){
                if(typeof(Items[i])=='object'){
                    // console.log("found an object");
                    // console.log(Object.values(Items[i])[0]);
                    let index=Object.values(Items[i])[0].indexOf(item);
                    if(index>-1){
                        // console.log("found the item");
                        let key=Object.keys(Items[i])[0];
                        // console.log("key is:",key)
                        // console.log('Object.values(Items[i])',Object.values(Items[i])[0]);
                        let newList=Object.values(Items[i])[0].filter((Item)=>Item!=item)
                        Items.splice(i,1);
                        let newObj={
                            [key]:newList
                        }
                        // console.log(newObj);
                        Items.push(newObj);
                    }
                }
            }
        }
    }
    function displayItems(){
        console.log("---------------------------Available Items---------------------","\n");
        for(let i=0;i<Items.length-1;i++){
            console.log(Items[i],";")
        }
        console.log(Items[Items.length-1],"]\n");
    }
    return {addItem,displayItems,removeItem};
}

const {addItem,removeItem,displayItems}=ecommerceManagement();
displayItems();
console.log("----------------------------Removing Tomatoes----------------------------")
removeItem("Tomatoes");
displayItems();
console.log("----------------------------Adding Griller-------------------------------")
try{
    addItem("Griller");
}catch(err){
    console.error("Error while adding item : ",err);
}
displayItems();
