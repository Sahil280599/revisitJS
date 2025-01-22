const grocries = ['banglore', 'chennai', 'tamilnadu', 'maharashtra']

// O(n)
const searchForItems=(item)=> {
    for (i=0 ; i<grocries.length; i++){
        if(grocries[i]==item){
            console.log(`Found ${item}`);
        }
    }
}

for(j=0;j<grocries.length.length;j++)
    if(grocries[j]==item){
        console.log(`Found ${item}2`);
    }

searchForItems("chennai")


// n + n = 2n o(2n)
// drop the constants so it becomes O(2n)